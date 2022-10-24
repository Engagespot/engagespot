import { UnreadBadgeCountStyled } from './UnreadBadgeCount.styled';

export interface UnreadBadgeCountProps {
  /**
   * Count
   */
  count: number;
}

export function UnreadBadgeCount({ count }: UnreadBadgeCountProps) {
  return (
    <UnreadBadgeCountStyled>
      {count}
      {/* {count > 10 ? '10+' : count} */}
    </UnreadBadgeCountStyled>
  );
}
