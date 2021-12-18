import styled, { css } from 'styled-components';

export const FeedItemStyled = styled.div<{
  clickable: boolean;
}>`
  ${({ theme: { feedItem }, clickable }) => css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    cursor: ${clickable ? 'pointer' : 'unset'};
    justify-content: flex-start;
    padding: ${feedItem.padding};
    border-bottom: ${feedItem.border};
    background: ${feedItem.background};
    font-family: sans-serif;
    &:hover {
      transition: ${feedItem.hoverTransition};
      background: ${feedItem.hoverBackground};
    }
  `}
`;

export const FeedItemImage = styled.img`
  ${({ theme: { feedItem } }) => css`
    height: ${feedItem.imageSize};
    width: ${feedItem.imageSize};
    flex-shrink: 0;
    border-radius: ${feedItem.imageRadius};
  `}
`;

export const FeedItemTextContent = styled.div`
  ${({ theme: { feedItem } }) => css`
    display: flex;
    align-self: flex-start;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: ${feedItem.textContentPadding};
    margin: ${feedItem.textContentMargin};

    p,
    h4 {
      margin: 0;
    }
  `}
`;

export const FeedItemHeader = styled.h4`
  ${({ theme: { feedItem } }) => css`
    font-weight: ${feedItem.headerFontWeight};
    font-size: ${feedItem.headerSize};
    padding: ${feedItem.headerPadding};
    color: ${feedItem.headerColor};
  `}
`;

export const FeedItemDescription = styled.p`
  ${({ theme: { feedItem } }) => css`
    font-size: ${feedItem.descriptionSize};
    padding: ${feedItem.descriptionPadding};
    color: ${feedItem.descriptionColor};
  `}
`;

export const FeedItemTimeAgo = styled.p`
  ${({ theme: { feedItem } }) => css`
    font-size: ${feedItem.dateSize};
    color: ${feedItem.dateColor};
  `}
`;

export const FeedItemMenu = styled.div`
  ${({ theme: { feedItem } }) => css`
    display: flex;
    justify-content: space-between;
    margin: ${feedItem.menuMargin};
    align-items: center;
    svg {
      fill: ${feedItem.notificationDot};
      height: ${feedItem.notificationDotSize};
      width: ${feedItem.notificationDotSize};
    }
  `}
`;

export const FeedItemPlaceholderStyled = styled.div`
  ${({ theme: { feedItem } }) => css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    padding: ${feedItem.padding};
    border: ${feedItem.border};
    background: ${feedItem.background};
  `}
`;

export const FeedItemPlaceholderImage = styled.div`
  ${({ theme: { feedItem } }) => css`
    height: ${feedItem.imageSize};
    width: ${feedItem.imageSize};
    flex-shrink: 0;
    background: ${feedItem.placeHolderBackground};
    border-radius: ${feedItem.imageRadius};
  `}
`;

export const FeedItemTextContentPlaceholder = styled(FeedItemTextContent)`
  flex: 1;
  align-items: stretch;
`;

export const FeedItemHeaderPlaceholder = styled(FeedItemHeader)`
  ${({ theme: { feedItem } }) => css`
    background: ${feedItem.placeHolderBackground};
    color: ${feedItem.placeHolderBackground};
    margin: 0 0 0.8rem 0 !important;
    padding: 0;
  `}
`;

export const FeedItemDescriptionPlaceholder = styled(FeedItemDescription)`
  ${({ theme: { feedItem } }) => css`
    background: ${feedItem.placeHolderBackground};
    color: ${feedItem.placeHolderBackground};
    margin: 0 12rem 0 0 !important;
    padding: 0;
  `}
`;

export const PlaceholderAnimation = styled.div<{ circle?: boolean }>`
  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: ${({ theme: { feedItem } }) => feedItem.placeHolderGradient};
  background-size: 800px 104px;
  height: 100%;
  width: 100%;
  border-radius: ${({ circle }) => (circle ? '50%' : 'unset')};
  position: relative;
`;
