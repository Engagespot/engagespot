import styled from 'styled-components';

export const FeedItemStyled = styled.div<{
  clickable: boolean;
}>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'unset')};
  justify-content: flex-start;
  padding: 0.5rem 0.7rem;
  border-bottom: 1px solid #edf4f2;
  background: ${({ theme }) => theme.feed.background};
  font-family: sans-serif;
  &:hover {
    transition: all 0.2s;
    background: ${({ theme }) => theme.colors.colorGreyLighter};
  }
`;

export const FeedItemImage = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  flex-shrink: 0;
  border-radius: 50%;
`;

export const FeedItemTextContent = styled.div`
  display: flex;
  align-self: flex-start;
  margin-right: auto;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: .5rem;
  margin-left: 1.2rem;

  p,
  h4 {
    margin: 0;
  }
`;

export const FeedItemHeader = styled.h4`
  font-weight: 400;
  font-size: 1.2rem;
  padding-bottom: 0.3rem;
  color: ${({ theme }) => theme.colors.colorPrimary};
`;

export const FeedItemDescription = styled.p`
  font-size: 0.9rem;
  padding-bottom: 0.3rem;
  color: ${({ theme }) => theme.colors.colorSecondary};
`;

export const FeedItemTimeAgo = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.colorTertiary};
`;

export const FeedItemMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  align-items: center;
  svg {
    fill: green;
    height: 0.5rem;
    width: 0.5rem;
  }
`;

export const FeedItemPlaceholderStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 0.7rem;
  border-bottom: 1px solid #edf4f2;
  background: ${({ theme }) => theme.feed.background};
`;

export const FeedItemPlaceholderImage = styled(FeedItemImage)`
  background: ${({ theme }) => theme.colors.colorGreyLight};
`;

export const FeedItemTextContentPlaceholder = styled(FeedItemTextContent)`
  flex: 1;
  align-items: stretch;
`;

export const FeedItemHeaderPlaceholder = styled(FeedItemHeader)`
  background: ${({ theme }) => theme.colors.colorGreyLight};
  color: ${({ theme }) => theme.colors.colorGreyLight};
  margin: 0 0 0.8rem 0 !important;
  padding: 0;
`;

export const FeedItemDescriptionPlaceholder = styled(FeedItemDescription)`
  background: ${({ theme }) => theme.colors.colorGreyLight};
  color: ${({ theme }) => theme.colors.colorGreyLight};
  margin: 0 12rem 0 0 !important;
  padding: 0;
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
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 100%;
  width: 100%;
  border-radius: ${({ circle }) => (circle ? '50%' : 'unset')};
  position: relative;
`;
