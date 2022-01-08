import styled, { css } from 'styled-components';

export const NotificationHeaderStyled = styled.div`
  && {
    ${({ theme: { header, colors } }) => css`
      display: flex;
      height: ${header.height};
      align-items: center;
      justify-content: space-between;
      padding: ${header.padding};
      font-size: ${header.fontSize};
      color: ${header.fontColor};
      background: ${colors.brandingPrimary};
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
      font-size: ${header.closeButtonFontSize};
      color: ${header.fontColor};
      box-sizing: border-box;
      outline: none;
      user-select: none;
      cursor: pointer;
      background-color: ${header.closeButtonBackground};

      &:hover {
      }
    `}
  }
`;
