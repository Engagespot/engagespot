import React from 'react';
import { JumpToTopStyled } from './JumpToTop.styled';
// import { ReactComponent as ChevronUp } from '../../assets/icons/chevronUp.svg';

export interface JumpToTopProps {
  /**
   * onClick Handler
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function JumpToTop({ onClick }: JumpToTopProps) {
  return (
    <JumpToTopStyled aria-label="Jump to Top" onClick={onClick}>
      {/* <ChevronUp /> */}
    </JumpToTopStyled>
  );
}
