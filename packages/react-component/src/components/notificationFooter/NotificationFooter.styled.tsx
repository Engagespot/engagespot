import styled from 'styled-components';

export const NotificationFooterStyled = styled.div`
  display: flex;
  height: 2.5rem;
  border-top: ${({ theme }) => theme.footer.border};
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.footer.fontSize};
  color: ${({ theme }) => theme.footer.fontColor};
  background: ${({ theme }) => theme.footer.background};
`;

export const NotificationFooterTextStyled = styled.h3`
  font-size: ${({ theme }) => theme.footer.fontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.footer.fontColor};
`;

export const NotificationFooterLinkStyled = styled.a`
  font-size: ${({ theme }) => theme.footer.fontSize};
  color: ${({ theme }) => theme.footer.fontColor};
  margin-right: 0.5rem;
  cursor: pointer;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 3px;
  }
`;
