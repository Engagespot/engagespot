import styled, { css } from 'styled-components';

export const NotificationFeedStyled = styled.div<{ empty: boolean }>`
  && {
    display: flex;
    position: relative;
    flex: 1;
    flex-direction: column;
    overflow-y: auto;
    height: ${({ theme }) => theme.feed.height};
    align-items: ${({ empty }) => (empty ? 'center' : 'stretch')};
    justify-content: ${({ empty }) => (empty ? 'center' : 'flex-start')};
    background: ${({ theme }) => theme.feed.background};

    path[data-name='Path 154'] {
      fill: ${({ theme }) => theme.colors.brandingPrimary};
    }
  }
`;

export const NotificationEmptyPlaceholderText = styled.p`
  && {
    ${({ theme }) => css`
      font-size: ${theme.feed.placeholderTextSize};
      margin: ${theme.feed.placeholderMargin};
      font-weight: ${theme.feed.placeholderFontWeight};
      color: ${theme.feed.placeholderTextColor};
    `}
  }
`;

export const JumpToTopPositioning = styled.div`
  && {
    ${({ theme }) => css`
      position: absolute;
      inset: ${theme.jumpToTop.inset};
    `}
  }
`;
