import { useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';

import {
  DropdownOverlay,
  DropdownMenuContainer,
  DropdownMenuItem,
  DropdownButton,
} from './DropdownMenu.styled';
import { Ellipsis as MoreIcon } from '../icons/Ellipsis';

export interface DropdownMenuProps {
  items: string[];
  isVisible: boolean;
}

export function DropdownMenu({ items = [], isVisible }: DropdownMenuProps) {
  const [visible, setVisibility] = useState(false);
  const referenceRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  const { styles, attributes, update } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: 'bottom',
      modifiers: [
        { name: 'preventOverflow', enabled: true },
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [-10, 10],
          },
        },
      ],
    }
  );

  useEffect(() => {
    // listen for clicks and close dropdownMenu on body
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  function handleDocumentClick(event: MouseEvent) {
    if (referenceRef.current?.contains(event.target as Node)) {
      return;
    }
    setVisibility(false);
  }
  function handleDropdownMenuClick() {
    setVisibility(!visible);
    update?.();
  }

  return (
    <>
      <DropdownButton
        aria-label="More"
        ref={referenceRef}
        style={{ visibility: isVisible ? 'visible' : 'hidden' }}
        onClick={handleDropdownMenuClick}
      >
        <MoreIcon />
      </DropdownButton>
      <DropdownOverlay
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
      >
        <DropdownMenuContainer style={styles.offset} visible={visible}>
          {items.map(item => {
            return <DropdownMenuItem key={item}>{item}</DropdownMenuItem>;
          })}
        </DropdownMenuContainer>
      </DropdownOverlay>
    </>
  );
}
