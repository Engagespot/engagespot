import styled from 'styled-components';

export const NotificationPanelPopper = styled.div``;

export const NotificationPanelStyled = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  box-sizing: border-box;
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.colorPrimary};
  border-bottom-left-radius: ${({ theme }) =>
    theme.panel.borderBottomLeftRadius};
  border-bottom-right-radius: ${({ theme }) =>
    theme.panel.borderBottomRightRadius};
  border-top-left-radius: ${({ theme }) => theme.panel.borderTopLeftRadius};
  border-top-right-radius: ${({ theme }) => theme.panel.borderTopRightRadius};
  flex-direction: column;
  overflow: hidden;
  height: ${({ theme }) => theme.panel.height};
  box-shadow: ${({ theme }) => theme.panel.boxShadow};
  width: ${({ theme }) => theme.panel.width};
  align-items: stretch;
  justify-content: flex-start;
`;
