import styled from 'styled-components';

export const NotificationFeedStyled = styled.div<{ empty: boolean }>`
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
  height: ${({ theme }) => theme.feed.height};
  align-items: ${({ empty }) => (empty ? 'center' : 'stretch')};
  justify-content: ${({ empty }) => (empty ? 'center' : 'flex-start')};
  background: ${({ theme }) => theme.feed.background};

  path[data-name='Path 154'] {
    fill: ${({ theme }) => theme.colors.brandingPrimary};
  }
`;

export const NotificationEmptyPlaceholderText = styled.p`
  font-size: ${({ theme }) => theme.feed.placeholderTextSize};
  margin: 0;
  margin-top: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.colorTertiary};
`;

export const JumpToTopPositioning = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 7rem;
`;
