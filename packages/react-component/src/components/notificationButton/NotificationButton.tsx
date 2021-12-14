import React from 'react';
import {
  NotificationButtonStyled,
  buttonTypes,
} from './NotificationButton.styled';
import { UnreadBadgeCount } from '../unreadBadgeCount';
import { useEngagespotReturnType } from '../engagespot/Engagespot';
import { Bell as NotificationBellIcon } from '../icons/Bell';

export interface NotificationButtonProps {
  /**
   * Type of button
   */
  type?: buttonTypes;
  buttonProps: useEngagespotReturnType['getButtonProps'];
}

export function NotificationButton({
  type = 'normal',
  buttonProps,
}: NotificationButtonProps) {
  return (
    <NotificationButtonStyled
      buttonType={type}
      aria-label="Notifications"
      {...buttonProps?.()}
    >
      <UnreadBadgeCount count={2} />
      <NotificationBellIcon />
    </NotificationButtonStyled>
  );
}
