import { EngagespotChannel } from '@engagespot/core';
import React, { Fragment } from 'react';
import { useEngagespotContext } from '../engagespotProvider';

import { Close } from '../icons/Close';
import { Toggle } from '../toggle/Toggle';

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
  NotificationProviderHeading,
  NotificationCategories,
  NotificationProviderLabel,
} from './NotificationPreference.styled';

export interface NotificationPreferenceProps {
  empty?: boolean;
  placeholderText?: string;
  enableWebPush: () => void;
  webPushState: globalThis.PermissionState;
}

export interface ChangedPreference {
  categoryId: string;
  channel: EngagespotChannel;
}

export function NotificationPreference({
  enableWebPush,
  webPushState,
}: NotificationPreferenceProps) {
  const engagespotContext = useEngagespotContext();
  const { preferences, setPreferences } = engagespotContext;
  const handleToggleChange = (
    changedPreference: ChangedPreference,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let enabled = e.target.checked;
    if (changedPreference.channel === 'webPush' && webPushState !== 'granted') {
      enableWebPush();
    }
    setPreferences?.([
      {
        categoryId: changedPreference.categoryId,
        channels: [{ enabled, channel: changedPreference.channel }],
      },
    ]);
  };

  const channels = preferences?.channels.filter(
    channel => channel.id !== 'sms'
  );
  const userPreferences = preferences?.userPreferences;

  return (
    <NotificationPreferenceStyled>
      {channels?.map(channel => (
        <Fragment key={channel?.id}>
          <NotificationProviderHeading>
            {channel?.name}
          </NotificationProviderHeading>
          {channel?.id === 'webPush' && webPushState === 'denied' ? (
            <NotificationProviderLabel>
              Web Push is currently disabled on the browser. Enable it manually
              by going into the browser settings
            </NotificationProviderLabel>
          ) : null}
          <NotificationCategories>
            {userPreferences?.map(preference => (
              <NotificationPreferenceLabelStyled key={preference.category.id}>
                <label htmlFor={`${channel.id}-${preference.category.id}`}>
                  {preference.category.name}
                </label>
                <Toggle
                  type="checkbox"
                  id={`${channel.id}-${preference.category.id}`}
                  checked={preference.channels[channel.id].enabled}
                  disabled={
                    channel.id === 'webPush' &&
                    ['denied'].includes(webPushState)
                  }
                  onChange={evt =>
                    handleToggleChange(
                      {
                        categoryId: preference.category.id,
                        channel: channel.id,
                      },
                      evt
                    )
                  }
                />
              </NotificationPreferenceLabelStyled>
            ))}
          </NotificationCategories>
        </Fragment>
      ))}
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
    <NotificationPreferenceModalStyled>
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
