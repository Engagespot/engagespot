import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import {
  NotificationPreferenceStyled,
  NotificationPreferenceLabelStyled,
} from './NotificationPreference.styled';

export interface NotificationPreferenceProps {
  empty?: boolean;
  placeholderText?: string;
  enableWebPush: () => void;
}

export function NotificationPreference({
  enableWebPush,
}: NotificationPreferenceProps) {
  const handleToggleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    console.log('Changed', e.target.checked);
    enableWebPush();
  };

  return (
    <NotificationPreferenceStyled>
      <NotificationPreferenceLabelStyled>
        <span>Desktop Notifications</span>
        <Toggle
          defaultChecked={false}
          icons={false}
          onChange={handleToggleChange}
        />
      </NotificationPreferenceLabelStyled>
    </NotificationPreferenceStyled>
  );
}
