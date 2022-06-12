import { Placement } from '@popperjs/core';
import { useRef, useCallback, useEffect } from 'react';
import { usePopper } from 'react-popper';
import { useMedia } from 'react-use';
import { Actions } from 'src/utils/actions';
import { StateReducer } from 'src/utils/hookUtils';
import { breakpointMobile } from 'src/utils/mediaQuery';
import { useJumpToTop } from './useJumpToTop';

export interface PlacementOptions {
  placement?: Placement;
  preventOverflow?: boolean;
  offset?: [number, number];
  enableArrow?: boolean;
}

export interface FloatingPanelOptions {
  panelOpenByDefault?: boolean;
  placementOptions?: PlacementOptions;
  enableFloatingPanel?: boolean;
}

export const defaultPlacementOptions: PlacementOptions = {
  placement: 'bottom-end',
  preventOverflow: true,
  enableArrow: true,
  offset: [0, 10],
};

export interface useFloatingNotificationProps {
  floatingPanelOptions?: FloatingPanelOptions;
}

export interface FloatingNotificationInstance {
  isMobile: boolean;
  togglePanelVisibility: () => void;
  panelVisibility: boolean;
  getButtonProps: () => {
    onClick: () => void;
    ref: React.RefObject<HTMLButtonElement>;
  };
  getArrowProps: () => void;
  getPanelOffsetProps: () => void;
  getPanelProps: () => void;
  useJumpToTop: (offset?: number) => {
    jumpToTop: (scrollableEl: HTMLElement) => void;
    onNotificationScroll: (evt: React.UIEvent<HTMLElement, UIEvent>) => void;
    showJumpToTop: boolean;
  };
}

useFloatingNotification.pluginName = 'useFloatingNotification';
useFloatingNotification.applyDefaults = applyDefaults;

function applyDefaults(props: useFloatingNotificationProps) {
  const floatingPanelOptionsDefault = {
    panelOpenByDefault: false,
    placementOptions: defaultPlacementOptions,
    enableFloatingPanel: true,
  };
  const {
    floatingPanelOptions: {
      panelOpenByDefault = false,
      placementOptions = defaultPlacementOptions,
      enableFloatingPanel = false,
    } = floatingPanelOptionsDefault,
    ...options
  } = props;
  return {
    floatingPanelOptions: {
      panelOpenByDefault,
      placementOptions,
      enableFloatingPanel,
    },
    ...options,
  };
}

Actions.SetPanelVisibility = 'SetPanelVisibility';
Actions.TogglePanelVisibility = 'TogglePanelVisibility';

const reducer: StateReducer = function (state, action, _, instance) {
  if (action.type === Actions.Init) {
    return {
      ...state,
      panelVisibility: instance.floatingPanelOptions.panelOpenByDefault,
    };
  }

  if (action.type === Actions.SetPanelVisibility) {
    return {
      ...state,
      panelVisibility: action.payload?.panelVisibility,
    };
  } else if (action.type === Actions.TogglePanelVisibility) {
    return {
      ...state,
      panelVisibility: !state.panelVisibility,
    };
  } else if (action.type === Actions.AddNotification) {
    return {
      ...state,
      unreadCount: instance.reducerState.panelVisibility
        ? state.unreadCount
        : state.unreadCount + 1,
    };
  } else if (action.type === Actions.MarkAllAsSeen) {
    return {
      ...state,
      unreadCount: 0,
    };
  }

  return state;
};

export function useFloatingNotification(hooks: any) {
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
}

function useInstance(instance: any) {
  const placementOptions = instance.floatingPanelOptions.placementOptions;
  const isMobile = useMedia(breakpointMobile);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const arrowRef = useRef<HTMLElement>(null);
  const panelVisibility = instance.reducerState.panelVisibility;
  const togglePanelVisibility = useCallback(() => {
    if (!instance.reducerState.panelVisibility) {
      instance.markAllAsSeen();
    }
    instance.dispatch({
      type: Actions.TogglePanelVisibility,
    });
  }, [instance]);

  const { styles, attributes, update } = usePopper(
    buttonRef.current,
    panelRef.current,
    {
      placement: placementOptions?.placement,
      modifiers: [
        { name: 'preventOverflow', enabled: placementOptions?.preventOverflow },
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: placementOptions?.offset,
          },
        },
        {
          name: 'arrow',
          enabled: placementOptions?.enableArrow,
          options: {
            element: arrowRef.current,
          },
        },
      ],
    }
  );

  function handleDocumentClick(event: MouseEvent) {
    if (
      panelRef.current?.contains(event.target as Node) ||
      buttonRef.current?.contains(event.target as Node)
    ) {
      return;
    }
    const panelVisibility = instance.reducerState.panelVisibility;
    if (panelVisibility) {
      togglePanelVisibility();
    }
  }

  useEffect(() => {
    // listen for clicks and close dropdown on body
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    instance.core.onNotificationReceive((notificationItem: Notification) => {
      if (instance.reducerState.panelVisibility) {
        instance.markAllAsSeen();
      }
    });
  }, [instance.apiKey, instance.userId]);

  const mobileProps = {
    styles: {
      popper: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99999999999999,
        width: '100%',
        height: '100%',
      },
      offset: { height: '100%', width: '100%', borderRadius: '0' },
      arrow: { display: 'none' },
    },
    attributes: { popper: {} },
  };
  const onButtonClick = () => {
    togglePanelVisibility();
    update?.();
  };

  const getButtonProps = () => {
    return { onClick: onButtonClick, ref: buttonRef };
  };

  const getPanelProps = () => {
    return {
      ref: panelRef,
      style:
        isMobile && panelVisibility
          ? mobileProps.styles.popper
          : { ...styles.popper, zIndex: 999999999999999 },
      attributes:
        isMobile && panelVisibility
          ? mobileProps.attributes.popper
          : attributes.popper,
    } as any;
  };

  const getPanelOffsetProps = () => {
    return {
      style:
        isMobile && panelVisibility ? mobileProps.styles.offset : styles.offset,
    } as any;
  };

  const getArrowProps = () => {
    return {
      ref: arrowRef,
      style: isMobile
        ? mobileProps.styles.arrow
        : ({
            ...styles.arrow,
            display:
              panelVisibility && placementOptions?.enableArrow
                ? 'block'
                : 'none',
          } as React.CSSProperties),
    } as any;
  };

  Object.assign(instance, {
    isMobile,
    togglePanelVisibility,
    panelVisibility,
    getButtonProps,
    getArrowProps,
    getPanelOffsetProps,
    getPanelProps,
    useJumpToTop,
  });
}
