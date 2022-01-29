import { Notification } from '@engagespot/core';

export interface NotificationEvents {
  onNotificationSee?: (notificationId: string) => void;
  onNotificationClick?: (notificationId: string) => void;
  onNotificationDelete?: (notificationId: string) => void;
  onNotificationReceive?: (notificationItem: Notification) => void;
}
