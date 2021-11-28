import { useEffect, useRef } from 'react';

import { usePopper } from 'react-popper';

type panelVisibility = React.Dispatch<React.SetStateAction<boolean>>;

export function useFloatingNotification(
  togglePanelVisibility: panelVisibility
) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  function handleDocumentClick(event: MouseEvent) {
    if (
      panelRef.current?.contains(event.target as Node) ||
      buttonRef.current?.contains(event.target as Node)
    ) {
      return;
    }
    togglePanelVisibility(false);
  }

  useEffect(() => {
    // listen for clicks and close dropdown on body
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  const { styles, attributes } = usePopper(
    buttonRef.current,
    panelRef.current,
    {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, 0],
          },
        },
      ],
    }
  );

  return {
    buttonRef,
    panelRef,
    styles,
    attributes,
  };
}
