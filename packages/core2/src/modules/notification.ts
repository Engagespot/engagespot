export type Notification<T = any> = {
  id: string;
  title: string;
  message: string;
  icon: string;
  data: T;
  url: string;
  createdAt: string;
};

export function notificationFactory() {
  /**
   * Returns a new empty NotificationList object
   * @returns
   */
  const get = async () => {
    return new NotificationList<T>(this);
  };

  const markAsRead = async (id: string) => {
    const options = {
      id,
    } as NotificationItem;
    const notification = new EngagespotNotification(this, options);
    return notification.markAsClicked();
  };

  const remove = async (id: string) => {
    const options = {
      id,
    } as NotificationItem;
    const notification = new EngagespotNotification(this, options);
    return notification.delete();
  };

  /**
   * Marks all notifications as seen
   */
  const markAllAsSeen = async () => {
    const options: apiRequestOptions = {
      url: this.client.baseURL + '/notifications/markAllNotificationsAsSeen',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': this.client.apiKey,
        'X-ENGAGESPOT-USER-ID': this.client.userId,
        ...(this.client.userSignature && {
          'X-ENGAGESPOT-USER-SIGNATURE': this.client.userSignature,
        }),
      },
    };

    const response = await sendRequest(options);
  }
}
