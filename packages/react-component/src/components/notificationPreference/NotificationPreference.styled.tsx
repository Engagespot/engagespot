import styled, { css } from 'styled-components';

export const NotificationPreferenceStyled = styled.div`
  && {
    ${({ theme: { preference, colors } }) => css`
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

      .react-toggle {
        touch-action: pan-x;

        display: inline-block;
        position: relative;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        padding: 0;

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
      }

      .react-toggle-screenreader-only {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .react-toggle--disabled {
        cursor: not-allowed;
        opacity: 0.5;
        -webkit-transition: opacity 0.25s;
        transition: opacity 0.25s;
      }

      .react-toggle-track {
        width: 50px;
        height: 24px;
        padding: 0;
        border-radius: 30px;
        background-color: #4d4d4d;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }

      .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
        background-color: #000000;
      }

      .react-toggle--checked .react-toggle-track {
        background-color: #19ab27;
      }

      .react-toggle--checked:hover:not(.react-toggle--disabled)
        .react-toggle-track {
        background-color: #128d15;
      }

      .react-toggle-track-check {
        position: absolute;
        width: 14px;
        height: 10px;
        top: 0px;
        bottom: 0px;
        margin-top: auto;
        margin-bottom: auto;
        line-height: 0;
        left: 8px;
        opacity: 0;
        -webkit-transition: opacity 0.25s ease;
        -moz-transition: opacity 0.25s ease;
        transition: opacity 0.25s ease;
      }

      .react-toggle--checked .react-toggle-track-check {
        opacity: 1;
        -webkit-transition: opacity 0.25s ease;
        -moz-transition: opacity 0.25s ease;
        transition: opacity 0.25s ease;
      }

      .react-toggle-track-x {
        position: absolute;
        width: 10px;
        height: 10px;
        top: 0px;
        bottom: 0px;
        margin-top: auto;
        margin-bottom: auto;
        line-height: 0;
        right: 10px;
        opacity: 1;
        -webkit-transition: opacity 0.25s ease;
        -moz-transition: opacity 0.25s ease;
        transition: opacity 0.25s ease;
      }

      .react-toggle--checked .react-toggle-track-x {
        opacity: 0;
      }

      .react-toggle-thumb {
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
        position: absolute;
        top: 1px;
        left: 1px;
        width: 22px;
        height: 22px;
        border: 1px solid #4d4d4d;
        border-radius: 50%;
        background-color: #fafafa;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        -webkit-transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        transition: all 0.25s ease;
      }

      .react-toggle--checked .react-toggle-thumb {
        left: 27px;
        border-color: #19ab27;
      }

      .react-toggle--focus .react-toggle-thumb {
        -webkit-box-shadow: 0px 0px 3px 2px #0099e0;
        -moz-box-shadow: 0px 0px 3px 2px #0099e0;
        box-shadow: 0px 0px 2px 3px #0099e0;
      }

      .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
        -webkit-box-shadow: 0px 0px 5px 5px #0099e0;
        -moz-box-shadow: 0px 0px 5px 5px #0099e0;
        box-shadow: 0px 0px 5px 5px #0099e0;
      }
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
    ${({ theme: { preferenceModal, header } }) => css`
      background-color: ${preferenceModal.overlayBackground};
      opacity: ${preferenceModal.overlayOpacity};
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1000;
      margin: ${header.height} 0 0 0;
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
