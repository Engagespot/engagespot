export interface NotificationItem<T = any> {
  id: string;
  title: string;
  message?: string | null;
  icon?: string | null;
  url?: string | null;
  seenAt?: string | null;
  clickedAt?: string | null;
  createdAt?: string | null;
  data?: T | null;
}
