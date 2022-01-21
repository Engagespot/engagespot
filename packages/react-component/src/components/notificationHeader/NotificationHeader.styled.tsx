import styled, { css } from 'styled-components';
import { Route } from '../notificationPanel/NotificationPanel';

export const NotificationHeaderStyled = styled.div<{ route: Route }>`
  && {
    ${({ theme: { header, colors, preference }, route }) => css`
      display: flex;
      height: ${header.height};
      align-items: center;
      justify-content: space-between;
      padding: ${header.padding};
      font-size: ${header.fontSize};
      color: ${header.fontColor};
      background: ${route === 'home'
        ? colors.brandingPrimary
        : preference.headerBackground};
    `}
  }
`;

export const NotificationHeaderTextStyled = styled.h3`
  && {
    ${({ theme: { header } }) => css`
      font-size: ${header.fontSize};
      font-weight: ${header.fontWeight};
      color: ${header.fontColor};
    `}
  }
`;

export const NotificationHeaderCloseButtonStyled = styled.button`
  && {
    ${({ theme: { header } }) => css`
      border-width: 0;
      margin: ${header.closeButtonMargin};
      position: relative;
      padding: ${header.closeButtonPadding};
      color: ${header.fontColor};
      box-sizing: border-box;
      outline: none;
      user-select: none;
      cursor: pointer;
      background-color: ${header.closeButtonBackground};

      &:hover {
      }

      svg {
        fill: white;
        stroke: none;
        height: 12px;
        width: 12px;
      }
    `}
  }
`;
