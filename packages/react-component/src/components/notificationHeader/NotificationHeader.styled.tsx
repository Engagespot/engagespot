import styled, { css } from 'styled-components';
import { Route } from '../notificationPanel/NotificationPanel';

export const NotificationHeaderStyled = styled.div`
  && {
    ${({ theme: { header, colors, preference } }) => css`
      display: flex;
      height: ${header.height};
      align-items: center;
      justify-content: flex-start;
      padding: ${header.padding};
      font-size: ${header.fontSize};
      color: ${header.fontColor};
      background: ${colors.brandingPrimary};
      box-sizing: border-box;
    `}
  }
`;

export const NotificationHeaderTextStyled = styled.h3`
  && {
    ${({ theme: { header } }) => css`
      font-size: ${header.fontSize};
      font-weight: ${header.fontWeight};
      color: ${header.fontColor};
      padding-left: 0.5rem;
      margin-right: auto;
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
