import { useStore } from '@nanostores/react';

import { InstanceOptions, createStore } from '@engagespot/core2';
import { useEffect, useState } from 'react';

export function useEngagespot(options: InstanceOptions<any, any>) {
  const [storeInstance, setStoreInstance] = useState(() => ({
    store: createStore(options as any),
  }));

  const notifications = useStore(storeInstance.store.notifications);
  const isLoading = useStore(storeInstance.store.isLoading);
  const loadMore = storeInstance.store.loadMore;
  const setNotificationState = storeInstance.store.setNotificationState;
  const removeNotification = storeInstance.store.removeNotification;
  const currentPage = useStore(storeInstance.store.currentPage);
  return {
    currentPage,
    notifications,
    isLoading,
    loadMore,
    setNotificationState,
    removeNotification,
  };
}
