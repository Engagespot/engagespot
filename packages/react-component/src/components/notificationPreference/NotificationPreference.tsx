import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import { Close } from '../icons/Close';

import {
  NotificationPreferenceStyled,
  NotificationPreferenceLabelStyled,
  NotificationPreferenceModalStyled,
  NotificationPreferenceModalCloseButton,
  NotificationPreferenceModalContent,
  NotificationPreferenceModalHeader,
  NotificationPreferenceModalHeading,
  NotificationPreferenceModalNoButton,
  NotificationPreferenceModalPrimaryTextContent,
  NotificationPreferenceModalSecondaryTextContent,
  NotificationPreferenceModalYesButton,
} from './NotificationPreference.styled';

export interface NotificationPreferenceProps {
  empty?: boolean;
  placeholderText?: string;
  enableWebPush: () => void;
  webPushState: globalThis.PermissionState;
}

export function NotificationPreference({
  enableWebPush,
  webPushState,
}: NotificationPreferenceProps) {
  const handleToggleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    if (e.target.checked) {
      enableWebPush();
    }
  };

  return (
    <NotificationPreferenceStyled>
      <NotificationPreferenceLabelStyled>
        <span>Desktop Notifications</span>
        <Toggle
          checked={webPushState === 'granted'}
          disabled={['granted', 'denied'].includes(webPushState)}
          icons={false}
          onChange={handleToggleChange}
        />
      </NotificationPreferenceLabelStyled>
    </NotificationPreferenceStyled>
  );
}

export interface NotificationPreferenceModalProps {
  closeModal: () => void;
  allowNotifications: () => void;
}

export function NotificationPreferenceModal({
  closeModal,
  allowNotifications,
}: NotificationPreferenceModalProps) {
  return (
    <NotificationPreferenceModalStyled className="modal">
      <NotificationPreferenceModalContent>
        <NotificationPreferenceModalHeader>
          <NotificationPreferenceModalHeading>
            Enable Desktop Notifications
          </NotificationPreferenceModalHeading>
          <NotificationPreferenceModalCloseButton onClick={closeModal}>
            <Close />
          </NotificationPreferenceModalCloseButton>
        </NotificationPreferenceModalHeader>
        <NotificationPreferenceModalPrimaryTextContent>
          Allow Engagespot to send you push notification when you have new
          messages and offers
        </NotificationPreferenceModalPrimaryTextContent>
        <NotificationPreferenceModalYesButton onClick={allowNotifications}>
          Yes
        </NotificationPreferenceModalYesButton>
        <NotificationPreferenceModalNoButton onClick={closeModal}>
          Maybe later
        </NotificationPreferenceModalNoButton>
        <NotificationPreferenceModalSecondaryTextContent>
          You can change your preferences in Settings later, if needed
        </NotificationPreferenceModalSecondaryTextContent>
      </NotificationPreferenceModalContent>
    </NotificationPreferenceModalStyled>
  );
}
