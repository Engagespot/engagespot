import { Placement } from '@popperjs/core';
import { useRef } from 'react';
import { usePopper } from 'react-popper';

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
  placementOptions: PlacementOptions,
  isMobile: boolean
) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const arrowRef = useRef<HTMLElement>(null);
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
  if (isMobile) {
    return {
      buttonRef,
      panelRef,
      arrowRef,
      styles: {
        popper: {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 999,
          width: '100%',
        },
        offset: { height: '100vh', width: '100%' },
        arrow: {},
      },
      attributes: { popper: {} },
      update,
    };
  }

  return {
    buttonRef,
    panelRef,
    arrowRef,
    styles,
    attributes,
    update,
  };
}
