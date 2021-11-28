import NotificationItem from './NotificationItem';

export interface NotificationList {
  unreadCount: number;
  pagination: {
    totalCount: number;
  };
  data: Array<NotificationItem>;
}
