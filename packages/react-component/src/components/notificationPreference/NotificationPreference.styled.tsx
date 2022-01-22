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
  && {
    ${({ theme: { preference } }) => css`
      margin-top: 3px;
    `}
  }
`;

export const NotificationPreferenceOverlay = styled.div`
  && {
    ${({ theme: { preferenceModal } }) => css`
      background-color: ${preferenceModal.overlayBackground};
      opacity: ${preferenceModal.overlayOpacity};
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1000;
      margin: ${preferenceModal.overlayMargin};
    `}
  }
`;

export const NotificationPreferenceModalStyled = styled.div`
  && {
    ${({ theme: { preferenceModal } }) => css`
      position: absolute;
      height: ${preferenceModal.height};
      bottom: 0;
      left: 0;
      z-index: 1500;
      border-radius: ${preferenceModal.borderRadius};
    `}
  }
`;

export const NotificationPreferenceModalContent = styled.div`
  && {
    ${({ theme: { preferenceModal } }) => css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      border-radius: ${preferenceModal.borderRadius};
      background-color: ${preferenceModal.background};
      backdrop-filter: ${preferenceModal.backdropFilter};
      padding: ${preferenceModal.padding};
      position: relative;
    `}
  }
`;

export const NotificationPreferenceModalHeader = styled.div`
  && {
    ${({ theme: { preferenceModal } }) => css`
      display: flex;
      margin: ${preferenceModal.headerMargin};
    `}
  }
`;

export const NotificationPreferenceModalHeading = styled.h6`
  && {
    ${({ theme: { preferenceModal } }) => css`
      font-size: ${preferenceModal.headerFontSize};
      color: ${preferenceModal.headingColor};
      margin-right: auto;
    `}
  }
`;

export const NotificationPreferenceModalCloseButton = styled.button`
  && {
    ${({ theme: { preferenceModal } }) => css`
      position: absolute;
      right: 1rem;
      top: 0.5rem;

      svg {
        height: ${preferenceModal.closeButtonSize};
        width: ${preferenceModal.closeButtonSize};
        fill: ${preferenceModal.closeButtonColor};
      }
    `}
  }
`;

export const NotificationPreferenceModalPrimaryTextContent = styled.p`
  && {
    ${({ theme: { preferenceModal } }) => css`
      color: ${preferenceModal.textPrimaryColor};
      margin: ${preferenceModal.textPrimaryMargin};
      font-size: ${preferenceModal.textPrimaryFontSize};
      text-align: ${preferenceModal.textAlign};
    `}
  }
`;

export const NotificationPreferenceModalSecondaryTextContent = styled.p`
  && {
    ${({ theme: { preferenceModal } }) => css`
      color: ${preferenceModal.textSecondaryColor};
      margin: ${preferenceModal.textSecondaryMargin};
      font-size: ${preferenceModal.textSecondaryFontSize};
      text-align: ${preferenceModal.textAlign};
    `}
  }
`;

export const NotificationPreferenceModalYesButton = styled.button`
  && {
    ${({ theme: { preferenceModal, colors } }) => css`
      color: ${preferenceModal.buttonPrimaryColor};
      font-weight: ${preferenceModal.primaryButtonFontWeight};
      background-color: ${preferenceModal.buttonPrimaryBackgroundColor};
      padding: ${preferenceModal.primaryButtonPadding};
      border-radius: ${preferenceModal.primaryButtonBorderRadius};
      margin: ${preferenceModal.primaryButtonMargin};
      transition: ${preferenceModal.primaryButtonTransition};

      &:hover {
        background-color: ${preferenceModal.buttonPrimaryHoverBackgroundColor};
      }
    `}
  }
`;

export const NotificationPreferenceModalNoButton = styled.button`
  && {
    ${({ theme: { preferenceModal } }) =>
      css`
        transition: ${preferenceModal.primaryButtonTransition};
        color: ${preferenceModal.buttonSecondaryColor};
        background-color: ${preferenceModal.buttonSecondaryBackgroundColor};

        &:hover {
          background-color: ${preferenceModal.buttonSecondaryHoverBackgroundColor};
        }
      `}
  }
`;
