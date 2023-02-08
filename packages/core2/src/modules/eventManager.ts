type NotificationReceiveEvent = { notification: Notification };
type NotificationDeleteEvent = { id: string };
type NotificationClickEvent = { id: string };
type NotificationSeenEvent = { id: string };
type WebPushPermissionChange = { permission: PermissionState };

type NotificationEventParams = {
  notificationReceive: NotificationReceiveEvent;
  notificationDelete: NotificationDeleteEvent;
  notificationClick: NotificationClickEvent;
  notificationSeen: NotificationSeenEvent;
  webpushPermissionChange: WebPushPermissionChange;
};

export type Events = keyof NotificationEventParams;

type getNotificationParamsType<T extends Events> = NotificationEventParams[T];

export type EventCallback<T extends Events> = (
  params: getNotificationParamsType<T>
) => void;

type EventStore = {
  [key in Events]: EventCallback<key>[];
};

export function EventManager() {
  let eventStore: EventStore = {
    notificationReceive: [],
    notificationDelete: [],
    notificationClick: [],
    notificationSeen: [],
    webpushPermissionChange: [],
  };

  const returnValues = {
    /**
     * Subscribe to an event
     */
    on<T extends Events>(eventName: T, callback: EventCallback<T>) {
      if (!eventStore[eventName]) return;

      eventStore[eventName].push(callback);
    },

    /**
     * Unsubscribe from an event
     */
    remove<T extends Events>(eventName: T, callback: EventCallback<T>) {
      if (!eventStore[eventName]) {
        return;
      }
      const events = eventStore[eventName].filter(cb => cb !== callback);
      eventStore[eventName] = events as any;
    },
    /**
     * Trigger an event
     */
    trigger: function <T extends Events>(
      eventName: T,
      params: getNotificationParamsType<T>
    ) {
      if (!eventStore[eventName]) {
        return;
      }

      eventStore[eventName].forEach(cb => cb(params));
    },
  };

  return {
    ...returnValues,
    publicApi: {
      on: returnValues.on,
      remove: returnValues.remove,
    },
  };
}
