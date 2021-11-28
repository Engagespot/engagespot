import {
  NotificationButtonStyled,
  buttonTypes,
} from './NotificationButton.styled';
import { UnreadBadgeCount } from '../unreadBadgeCount';
import { useEngagespotReturnType } from '../engagespot/Engagespot';
// import { ReactComponent as NotificationBellIcon } from '../../assets/icons/bellIcon.svg';

export interface NotificationButtonProps {
  /**
   * Type of button
   */
  type?: buttonTypes;
  buttonProps: useEngagespotReturnType['getButtonProps'];
}

import React from 'react';

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
      {/* <NotificationBellIcon /> */}
    </NotificationButtonStyled>
  );
}
