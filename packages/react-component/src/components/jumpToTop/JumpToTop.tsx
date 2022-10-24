import type { MouseEventHandler as ReactMouseEventHandler } from 'react';

import { JumpToTopStyled } from './JumpToTop.styled';
import { ChevronUp } from '../icons/ChevronUp';

export interface JumpToTopProps {
  /**
   * onClick Handler
   */
  onClick: ReactMouseEventHandler<HTMLButtonElement>;
}

export function JumpToTop({ onClick }: JumpToTopProps) {
  return (
    <JumpToTopStyled aria-label="Jump to Top" onClick={onClick}>
      <ChevronUp />
    </JumpToTopStyled>
  );
}
