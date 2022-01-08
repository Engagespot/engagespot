import styled, { css } from 'styled-components';

export type buttonTypes = 'normal' | 'floating';

export interface NotificationButtonStyledProps {
  buttonType: buttonTypes;
}

export const NotificationButtonStyled = styled.button<NotificationButtonStyledProps>`
  ${({ theme: { notificationButton }, buttonType }) => css`
    display: flex;
    justify-items: center;
    align-content: center;
    box-shadow: ${buttonType === 'floating' &&
    notificationButton.floatingButtonShadow};
    border-width: ${notificationButton.borderWidth};
    border-radius: ${buttonType === 'floating'
      ? notificationButton.floatingButtonRadius
      : notificationButton.normalButtonRadius};
    margin: ${notificationButton.margin};
    padding: ${notificationButton.padding};
    box-sizing: border-box;
    outline: ${notificationButton.outline};
    user-select: none;
    cursor: pointer;
    position: relative;
    background-color: ${notificationButton.background};

    &:hover {
    }

    svg {
      height: ${notificationButton.iconSize};
      width: ${notificationButton.iconSize};
      stroke: ${notificationButton.iconFill};
    }
  `}
`;
