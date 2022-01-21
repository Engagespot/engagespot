import styled, { css } from 'styled-components';

export const NotificationPreferenceStyled = styled.div`
  && {
    ${({ theme: { preference } }) => css`
      display: flex;
      position: relative;
      flex: 1;
      flex-direction: column;
      overflow-y: auto;
      height: ${preference.height};
      align-items: stretch;
      justify-content: flex-start;
      padding: ${preference.padding};
      color: ${preference.fontColor};
      background: ${preference.background};
    `}
  }
`;

export const NotificationPreferenceLabelStyled = styled.div`
  && {
    ${({ theme: { preference } }) => css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  }
`;

export const NotificationPreferenceBackButton = styled.button`
  margin-top: 3px;
`;
