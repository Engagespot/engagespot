import { Deps } from '../createInstance';

export type NotificationStates = 'seen' | 'clicked' | 'delivered' | 'unread';

export type Notification<T = any> = {
  id: string;
  title: string;
  message: string;
  icon: string;
  data?: T;
  url: string;
  category: string | null;
  state?: NotificationStates;
  createdAt: string;
  seenAt: string;
  clickedAt: string;
};

export type Filters = {
  category?: string;
  markAsRead?: boolean;
};

type GetNotificationsParams = {
  page: number;
  limit?: number;
} & Filters;

type GetNotificationResponse<TData> = {
  unreadCount: number;
  data: Notification<TData>[];
  pagination: {
    totalCount: number;
  };
};

type StoreIds = Record<string, string[]>;
export type Stores = {
  page: number;
  notifications: StoreIds;
};

export type NotificationSlice = {
  unreadCount: number;
  page: number;
  limit: number;
  isLoading: boolean;
  setLoader: (isLoading: boolean) => void;
  notifications: Notification[];
  notif: () => any;
  stores: Stores;
  getNotifications: (params: GetNotificationsParams) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
  addNotification: (notification: Notification) => void;
};

export type CreateNotification<T, U> = ReturnType<
  typeof notificationFactory<T, U>
>['createNotification'];

export function notificationFactory<TData, UType>({
  sendRequest,
  log,
  transform,
  options,
}: Deps<TData, UType>) {
  const createNotification = (notification: Notification<TData>) => {
    const transformedNotification = transform(notification);
    return transformedNotification;
  };

  const filteredStores = options.filteredStores ?? [];

  /**
   * Returns all notifications from current page
   * @returns
   */
  const get = async ({
    page = 1,
    limit = 15,
    category,
  }: GetNotificationsParams) => {
    try {
      const filters = category ? `&category=${category}` : '';
      const path = `/notifications?pageNo=${page}&limit=${limit}${filters}`;
      log('path is ', path);
      const response = await sendRequest<GetNotificationResponse<TData>>({
        path,
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

  //
  /**

  storeConfig = [
    { id: 'default'},
    {id: 'billing', filters: {category: 'billing'}}
    {id: 'unread', filters: {markAsRead: false  }}
  }
  ]

   */

  // const createNotificationSlice: Slice<NotificationSlice> = (
  //   set,
  //   getState
  // ) => ({
  //   unreadCount: 0,
  //   isLoading: false,
  //   notifications: [] as Notification<UType>[],
  //   stores: {} as Stores,
  //   notif: (storeId: string = 'default') => {
  //     const state = getState();
  //     if (storeId === 'default') return [...state.notifications];
  //     const notificationIds = state.stores[storeId];
  //     return notificationIds.map(id =>  {
  //       return {
  //         ...state.notifications.find(notification => notification.id === id),
  //       }
  //     })
  //   },
  //   limit: 15,
  //   page: 1,
  //   setLoader: (isLoading: boolean) => {
  //     set(state => {
  //       state.isLoading = isLoading;
  //     });
  //   },
  //   getNotifications: async (
  //     { page = 1, limit = 15, category } = { page: 1, limit: 15 }
  //   ) => {
  //     getState().setLoader(true);
  //     const notifications = await get({ page, limit, category });
  //     getState().setLoader(false);
  //     set(state => {
  //       state.notifications.unshift(...(notifications as any));
  //     });
  //   },
  //   markAsRead: async id => {
  //     const success = await markAsRead(id);
  //     if (success) {
  //       set(state => ({
  //         ...state,
  //         notifications: state.notifications.map(notification => {
  //           if (notification.id === id) {
  //             return {
  //               ...notification,
  //               clickedAt: new Date().toISOString(),
  //             };
  //           }
  //           return notification;
  //         }),
  //       }));
  //     }
  //   },
  //   markAllAsRead: async () => {
  //     const success = await markAllAsSeen();
  //     if (success) {
  //       set(state => ({
  //         ...state,
  //         notifications: state.notifications.map(notification => ({
  //           ...notification,
  //           clickedAt: new Date().toISOString(),
  //         })),
  //       }));
  //     }
  //   },
  //   removeNotification: async id => {
  //     const success = await remove(id);
  //     if (success) {
  //       set(state => {
  //         state.notifications = state.notifications.filter(
  //           notification => notification.id !== id
  //         );
  //       });
  //     }
  //   },
  //   addNotification: notification => {
  //     set(state => ({
  //       ...state,
  //       notifications: [notification, ...state.notifications],
  //     }));
  //   },
  // });

  const returnValues = {
    get,
    markAsRead,
    remove,
    markAllAsSeen,
    createNotification,
  };
  return {
    ...returnValues,
    createNotificationSlice: {} as any,
    publicApi: { ...returnValues },
  };
}
