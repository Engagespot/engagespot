import React, { useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';

import {
  DropdownOverlay,
  DropdownMenuContainer,
  DropdownMenuItem,
  DropdownButton,
  DropdownArrow,
} from './DropdownMenu.styled';
import { Ellipsis as MoreIcon } from '../icons/Ellipsis';

export interface DropdownMenuProps {
  items: string[];
}

export function DropdownMenu({ items = [] }: DropdownMenuProps) {
  const [visible, setVisibility] = useState(false);

  const referenceRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const [arrowRef, setArrowRef] = useState(null);

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: 'bottom',
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: arrowRef,
          },
        },
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [-40, 10],
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
  }

  return (
    <>
      <DropdownButton
        aria-label="More"
        ref={referenceRef}
        onClick={handleDropdownMenuClick}
      >
        <MoreIcon />
      </DropdownButton>
      <DropdownOverlay
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
      >
        <DropdownArrow
          ref={setArrowRef as any}
          style={styles.arrow}
          visible={visible}
        />
        <DropdownMenuContainer style={styles.offset} visible={visible}>
          {items.map(item => {
            return <DropdownMenuItem key={item}>{item}</DropdownMenuItem>;
          })}
        </DropdownMenuContainer>
      </DropdownOverlay>
    </>
  );
}
