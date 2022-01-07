import { Placement } from '@popperjs/core';
import { useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';

type panelVisibility = (
  panelUpdateFn?: (visibility: boolean) => boolean
) => void;

export interface PlacementOptions {
  placement?: Placement;
  preventOverflow?: boolean;
  offset?: [number, number];
  enableArrow?: boolean;
}

export const defaultPlacementOptions: PlacementOptions = {
  placement: 'bottom-end',
  preventOverflow: true,
  enableArrow: true,
  offset: [0, 10],
};

export function useFloatingNotification(
  panelVisibility: boolean,
  togglePanelVisibility: panelVisibility,
  placementOptions: PlacementOptions
) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const arrowRef = useRef<HTMLElement>(null);

  function handleDocumentClick(event: MouseEvent) {
    togglePanelVisibility(visible => {
      if (!visible) {
        return visible;
      }
      if (
        panelRef.current?.contains(event.target as Node) ||
        buttonRef.current?.contains(event.target as Node)
      ) {
        return visible;
      }
      return false;
    });
  }

  useEffect(() => {
    // listen for clicks and close dropdown on body
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  const { styles, attributes, update } = usePopper(
    buttonRef.current,
    panelRef.current,
    {
      placement: placementOptions.placement,
      modifiers: [
        { name: 'preventOverflow', enabled: placementOptions.preventOverflow },
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: placementOptions.offset,
          },
        },
        {
          name: 'arrow',
          enabled: placementOptions.enableArrow,
          options: {
            element: arrowRef.current,
          },
        },
      ],
    }
  );

  return {
    buttonRef,
    panelRef,
    arrowRef,
    styles,
    attributes,
    update,
  };
}
