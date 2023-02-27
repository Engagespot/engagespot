import create from 'zustand/vanilla';

const notificationStore = {
  unreadCount: 0,
  notifications: [],
};

type NotificationStore = {
  unreadCount: number;
  notifications: Notification[];
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  setUnreadCount: (count: number) => void;
  removeNotification: (id: string) => void;
  addNotification: (notification: Notification) => void;
};

// grouping types - unread, read
// by category
// today, this week
// current, upcoming, past
// inbox, following, archived
// groupBy, sortBy, filterBy

// notifications.groupBy('category | page | attribute | day').sortBy('date').filterBy('read')
