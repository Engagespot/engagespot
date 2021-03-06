export interface EventListenerStore {
  REALTIME_NOTIFICATION_RECEIVED: Array<Function>;
  NOTIFICATION_CLICKED: Array<Function>;
  NOTIFICATION_DELETED: Array<Function>;
  NOTIFICATION_SEEN: Array<Function>;
  WEBPUSH_PERMISSION_CHANGED: Array<Function>;
}
