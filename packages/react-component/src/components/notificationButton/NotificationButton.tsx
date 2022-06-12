import React from 'react';

import {
  NotificationButtonStyled,
  buttonTypes,
} from './NotificationButton.styled';
import { UnreadBadgeCount } from '../unreadBadgeCount';
import { useEngagespotReturnType } from '../engagespot/Engagespot';
import { Bell as NotificationBellIcon } from '../icons/Bell';
import { renderCustom } from '../../utils/renderCustom';

export type customNotificationIcon = (() => React.ReactNode) | undefined;

export interface NotificationButtonProps {
  /**
   * Type of button
   */
  type?: buttonTypes;
  buttonProps: useEngagespotReturnType['floatingPanel']['getButtonProps'];
  unreadCount: number;
  panelOpen: boolean;
  renderNotificationIcon?: customNotificationIcon;
}

export function NotificationButton({
  type = 'normal',
  buttonProps,
  unreadCount,
  panelOpen,
  renderNotificationIcon,
}: NotificationButtonProps) {
  return (
    <NotificationButtonStyled
      buttonType={type}
      aria-label="Notifications"
      {...buttonProps?.()}
    >
      {unreadCount && !panelOpen ? (
        <UnreadBadgeCount count={unreadCount} />
      ) : null}
      {renderNotificationIcon ? (
        renderCustom(renderNotificationIcon)
      ) : (
        <NotificationBellIcon />
      )}
    </NotificationButtonStyled>
  );
}
