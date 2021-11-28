import styled from 'styled-components';

export type buttonTypes = 'normal' | 'floating';

export interface NotificationButtonStyledProps {
  buttonType: buttonTypes;
}

export const NotificationButtonStyled = styled.button<NotificationButtonStyledProps>`
  display: flex;
  justify-items: center;
  align-content: center;
  box-shadow: ${({ buttonType }) =>
    buttonType === 'floating' &&
    '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'};
  border-width: 0;
  border-radius: ${({ buttonType }) =>
    buttonType === 'floating' ? '50%' : '5px'};
  margin: 0;
  padding: 5px;
  box-sizing: border-box;
  outline: none;
  user-select: none;
  cursor: pointer;
  position: relative;
  background-color: ${({ theme }) => theme.notificationButton.background};

  &:hover {
  }

  svg {
    height: ${({ theme }) => theme.notificationButton.iconSize};
    width: ${({ theme }) => theme.notificationButton.iconSize};
    fill: ${({ theme }) => theme.notificationButton.iconFill};
  }
`;


