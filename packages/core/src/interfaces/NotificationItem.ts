export default interface NotificationItem {
  id: string;
  title: string;
  message?: string | null;
  icon?: string | null;
  url?: string | null;
  seenAt?: string | null;
  clickedAt?: string | null;
  createdAt?: string | null;
}
