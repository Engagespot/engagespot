import React from 'react';
import { UnreadBadgeCountStyled } from './UnreadBadgeCount.styled';

export interface UnreadBadgeCountProps {
  /**
   * Count
   */
  count: number;
}

export function UnreadBadgeCount({ count }: UnreadBadgeCountProps) {
  return <UnreadBadgeCountStyled>{count}</UnreadBadgeCountStyled>;
}
