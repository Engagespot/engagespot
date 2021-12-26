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
  unreadCount: number;
  panelOpen: boolean;
}

export function NotificationButton({
  type = 'normal',
  buttonProps,
  unreadCount,
  panelOpen,
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
      <NotificationBellIcon />
    </NotificationButtonStyled>
  );
}
