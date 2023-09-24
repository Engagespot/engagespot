import { WritableAtom, atom } from 'nanostores';
import {
  createInstance,
  EngagespotNotification,
  EngagespotNotificationStates,
  InstanceOptions,
} from './createInstance';

export type subscribeFn = <T>(store: WritableAtom<T>) => any;

const defaultSubscribeFn = <T>(store: WritableAtom<T>) => {
  return store;
};

export function createStore(
  options: InstanceOptions<any, any>,
  subscribe: subscribeFn = defaultSubscribeFn
) {
  const engagespotInstance = createInstance(options);
  const $currentPage = atom(1);
  const $isLoading = atom(false);
  const $notifications = atom<EngagespotNotification[]>([]);

  const loadMore = async () => {
    $isLoading.set(true);
    const notifications = await engagespotInstance.notification.get({
      page: $currentPage.get(),
    });
    $isLoading.set(false);
    $notifications.set([...notifications, ...$notifications.get()] as any);
    $currentPage.set($currentPage.get() + 1);
  };

  const setNotificationState = async (
    notificationId: string,
    state: EngagespotNotificationStates
  ) => {
    engagespotInstance.notification.markAsRead(notificationId);
    $notifications.set(
      $notifications.get().map(notification => {
        if (notification.id === notificationId) {
          return {
            ...notification,
            state,
          };
        }
        return notification;
      })
    );
  };

  const removeNotification = async (notificationId: string) => {
    engagespotInstance.notification.remove(notificationId);
    $notifications.set(
      $notifications.get().filter(notification => {
        return notification.id !== notificationId;
      })
    );
  };

  return {
    currentPage: subscribe($currentPage),
    isLoading: subscribe($isLoading),
    notifications: subscribe($notifications),
    loadMore,
    removeNotification,
    setNotificationState,
  };
}
