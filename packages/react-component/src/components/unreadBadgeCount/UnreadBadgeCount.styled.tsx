import styled from 'styled-components';

export const UnreadBadgeCountStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.unreadBadgeCount.background};
  color: ${({ theme }) => theme.unreadBadgeCount.color};
  position: absolute;
  font-size: 0.6rem;
  border-radius: ${({ theme }) => theme.unreadBadgeCount.borderRadius};
  top: -4px;
  right: -4px;
  height: 1rem;
  width: 1rem;
`;
