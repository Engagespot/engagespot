import styled, { css } from 'styled-components';

export const UnreadBadgeCountStyled = styled.span`
  ${({ theme: { unreadBadgeCount } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${unreadBadgeCount.background};
    color: ${unreadBadgeCount.color};
    position: absolute;
    font-size: ${unreadBadgeCount.fontSize};
    border-radius: ${unreadBadgeCount.borderRadius};
    inset: ${unreadBadgeCount.inset};
    height: ${unreadBadgeCount.size};
    width: ${unreadBadgeCount.size};
  `}
`;
