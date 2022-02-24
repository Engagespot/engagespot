import { Placement } from '@popperjs/core';
import { useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { useMedia } from 'react-use';
import { breakpointMobile } from 'src/utils/mediaQuery';

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

export interface ButtonProps<T = HTMLButtonElement> {
  ref: React.RefObject<T>;
  onClick: () => void;
}

export interface PanelProps<T = HTMLDivElement> {
  ref: React.RefObject<T>;
  style: React.CSSProperties;
  attributes: object;
}

export interface PanelOffsetProps<T = HTMLDivElement> {
  ref: React.RefObject<T>;
  style: React.CSSProperties;
}

export interface ArrowProps<T = HTMLDivElement> {
  ref: React.RefObject<T>;
  style: React.CSSProperties;
}

export type UpdateNotificationType = { updateNotificationFn: () => void };

export function useFloatingNotification({
  panelOpenByDefault,
  placementOptions,
  updateNotificationFn,
}: FloatingPanelOptions & UpdateNotificationType) {
  const isMobile = useMedia(breakpointMobile);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const arrowRef = useRef<HTMLElement>(null);
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
    if (panelVisibilityRef.current) {
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

  const [panelVisibility, toggleNotificationPanelVisibility] =
    useState(panelOpenByDefault);
  const panelVisibilityRef = useRef<boolean>(false);
  panelVisibilityRef.current = panelVisibility as boolean;
  const togglePanelVisibility = (
    panelUpdateFn = (visibility: boolean) => !visibility
  ) => {
    if (!panelVisibilityRef.current) {
      updateNotificationFn();
    }
    toggleNotificationPanelVisibility(panelUpdateFn as any);
  };

  const mobileProps = {
    styles: {
      popper: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99999999,
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
        isMobile && panelVisibilityRef.current
          ? mobileProps.styles.popper
          : { ...styles.popper, zIndex: 99999999 },
      attributes:
        isMobile && panelVisibilityRef.current
          ? mobileProps.attributes.popper
          : attributes.popper,
    } as PanelProps;
  };

  const getPanelOffsetProps = () => {
    return {
      style:
        isMobile && panelVisibilityRef.current
          ? mobileProps.styles.offset
          : styles.offset,
    } as PanelOffsetProps;
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
    } as ArrowProps;
  };

  return {
    isMobile,
    togglePanelVisibility,
    panelVisibilityRef,
    getButtonProps,
    getArrowProps,
    getPanelOffsetProps,
    getPanelProps,
  };
}
