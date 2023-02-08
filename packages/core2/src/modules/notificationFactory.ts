import { Deps } from '../createInstance';

export type Notification<T = any> = {
  id: string;
  title: string;
  message: string;
  icon: string;
  data?: T;
  url: string;
  createdAt: string;
  seenAt: string;
  clickedAt: string;
};

type GetNotificationsParams = {
  page: number;
  limit?: number;
};

type GetNotificationResponse<TData> = {
  unreadCount: number;
  data: Notification<TData>[];
  pagination: {
    totalCount: number;
  };
};

export type CreateNotification<T, U> = ReturnType<
  typeof notificationFactory<T,U>
>['createNotification'];

export function notificationFactory<TData, UType>({
  sendRequest,
  log,
  transform,
}: Deps<TData, UType>) {
  const createNotification = (notification: Notification<TData>) => {
    const transformedNotification = transform(notification);
    return transformedNotification;
  };

  /**
   * Returns all notifications from current page
   * @returns
   */
  const get = async ({ page, limit = 15 }: GetNotificationsParams) => {
    try {
      const response = await sendRequest<GetNotificationResponse<TData>>({
        path: `/notifications?pageNo=${page}&limit=${limit}`,
        method: 'get',
      });

      if (!response) return [] as UType[];

      const {
        unreadCount,
        pagination: { totalCount },
      } = response;
      const totalPages = Math.ceil(totalCount / limit);

      const notifications = response.data.map(transform);

      return notifications;
    } catch (error) {
      log(error);
      return [] as UType[];
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const response = await sendRequest({
        path: `/notifications/${id}/click`,
        method: 'post',
      });

      if (response) return true;
    } catch (error) {
      log(error);
      return false;
    }
  };

  /**
   * Remove notification by id
   * @param id
   * @returns
   */
  const remove = async (id: string) => {
    try {
      const response = await sendRequest({
        path: `/notifications/${id}`,
        method: 'delete',
      });

      if (response) return true;
    } catch (error) {
      log(error);
      return false;
    }
  };

  /**
   * Marks all notifications as seen
   */
  const markAllAsSeen = async () => {
    try {
      const response = await sendRequest({
        path: '/notifications/markAllNotificationsAsSeen',
        method: 'POST',
      });

      if (response) return true;
    } catch (error) {
      log(error);
      return false;
    }
  };

  const returnValues = {
    get,
    markAsRead,
    remove,
    markAllAsSeen,
    createNotification,
  };
  return { ...returnValues, publicApi: { ...returnValues } };
}
