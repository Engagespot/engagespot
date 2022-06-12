import React, { useState, useEffect, useRef, Fragment } from 'react';
import { usePopper } from 'react-popper';

import theme from '../../theme/themeConfig';

import {
  DropdownOverlay,
  DropdownMenuContainer,
  DropdownMenuItem,
  DropdownButton,
} from './DropdownMenu.styled';
import { Ellipsis as MoreIcon } from '../icons/Ellipsis';

export interface DropdownMenuProps {
  items: { name: string; action: () => unknown }[];
  isVisible: boolean;
  theme: typeof theme['dropdown'];
}

export function DropdownMenu({
  items = [],
  isVisible,
  theme,
}: DropdownMenuProps) {
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
    const targetEl = event.target as Node;
    if (
      referenceRef.current?.contains(targetEl) ||
      popperRef.current?.contains(targetEl)
    ) {
      return;
    }
    setVisibility(false);
  }
  function handleDropdownMenuClick() {
    setVisibility(!visible);
    update?.();
  }

  function onItemClick(
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>,
    actionFn: any
  ) {
    evt.stopPropagation();
    actionFn();
    setVisibility(false);
  }

  return (
    <Fragment>
      <DropdownButton
        aria-label="More"
        ref={referenceRef}
        dropdownTheme={theme}
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
        <DropdownMenuContainer
          style={styles.offset}
          visible={visible}
          dropdownTheme={theme}
        >
          {items.map(item => {
            return (
              <DropdownMenuItem
                key={item.name}
                data-name={item.name}
                onClick={evt => {
                  onItemClick(evt, item.action);
                }}
              >
                {item.name}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContainer>
      </DropdownOverlay>
    </Fragment>
  );
}
