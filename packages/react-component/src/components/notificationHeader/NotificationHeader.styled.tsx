import styled from 'styled-components';

export const NotificationHeaderStyled = styled.div`
  display: flex;
  height: ${({ theme }) => theme.header.height};
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.header.padding};
  font-size: ${({ theme }) => theme.header.fontSize};
  color: ${({ theme }) => theme.header.fontColor};
  background: ${({ theme }) => theme.colors.brandingPrimary};
`;

export const NotificationHeaderTextStyled = styled.h3`
  font-size: ${({ theme }) => theme.header.fontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.header.fontColor};
`;

export const NotificationHeaderCloseButtonStyled = styled.button`
  border-width: 0;
  margin: 0;
  position: relative;
  padding: 5px;
  font-size: 3rem;
  color: ${({ theme }) => theme.header.fontColor};
  box-sizing: border-box;
  outline: none;
  user-select: none;
  cursor: pointer;
  background-color: transparent;

  &:hover {
  }
`;
