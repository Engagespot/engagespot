import styled, { css } from 'styled-components';

export const NotificationFooterStyled = styled.div`
  && {
    ${({ theme: { footer } }) => css`
      display: flex;
      height: ${footer.height};
      border-top: ${footer.border};
      align-items: center;
      justify-content: center;
      padding: ${footer.padding};
      font-size: ${footer.fontSize};
      color: ${footer.fontColor};
      background: ${footer.background};
    `}
  }
`;

export const NotificationFooterTextStyled = styled.h3`
  && {
    ${({ theme: { footer } }) => css`
      font-size: ${footer.fontSize};
      font-weight: ${footer.fontWeight};
      color: ${footer.fontColor};
    `}
  }
`;

export const NotificationFooterLinkStyled = styled.a`
  && {
    ${({ theme: { footer } }) => css`
      font-size: ${footer.fontSize};
      color: ${footer.fontColor};
      margin: ${footer.linkMargin};
      cursor: pointer;

      svg {
        height: ${footer.linkSize};
        width: ${footer.linkSize};
        border-radius: ${footer.linkRadius};
      }
    `}
  }
`;
