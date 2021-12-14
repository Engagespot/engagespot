import React from 'react';
import { JumpToTopStyled } from './JumpToTop.styled';
import { ChevronUp } from '..//icons/ChevronUp';

export interface JumpToTopProps {
  /**
   * onClick Handler
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function JumpToTop({ onClick }: JumpToTopProps) {
  return (
    <JumpToTopStyled aria-label="Jump to Top" onClick={onClick}>
      <ChevronUp />
    </JumpToTopStyled>
  );
}
