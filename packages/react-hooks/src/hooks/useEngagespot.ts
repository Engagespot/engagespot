import { useState, useEffect, useRef } from 'react';
import merge from 'lodash.merge';

import EngagespotCore, {
  Options,
  PermissionState,
  NotificationItem,
  Notification,
} from '@engagespot/core';

import { useJumpToTop } from './useJumpToTop';
import {
  defaultPlacementOptions,
  useFloatingNotification,
  FloatingPanelOptions,
} from './useFloatingNotification';
import { useInfiniteScroll } from './useInfiniteScroll';
import {
  dateFunctions,
  defaultDateFormatter,
  dateTransformer,
} from '../utils/dateUtils';
import {
  updateDocumentTitle,
  defaultTitleUpdateText,
} from '../utils/documentTitle';
import { playSound, defaultChimeSrc } from '../utils/chime';
import { NotificationEvents } from './useEvents';

export interface UseEngagespotOptions extends Options {
  apiKey: string;
  formatDate?: (dateString: string, dateFns: typeof dateFunctions) => string;
  disableNotificationChime?: boolean;
  notificationChimeSrc?: string;
  disableTitleUpdate?: boolean;
  titleUpdateText?: string;
  floatingPanelOptions?: FloatingPanelOptions;
  page?: number;
  events?: NotificationEvents;
}

function initializeNotifications() {
  return {
    data: [] as NotificationItem[],
    unreadCount: 0,
  };
}

function getEngagespotClient(
  apiKey: string,
  userId: string,
  options: Omit<Options, 'userId'>
) {
  const engagespotClient = new EngagespotCore(apiKey, {
    ...options,
    userId,
  });
  return engagespotClient;
}

function useEngagespotInstance(
  apiKey: string,
  userId: string,
  options: Omit<Options, 'userId'>
) {
  const engagespotRef = useRef<EngagespotCore | null>(null);
  if (engagespotRef.current == null) {
    engagespotRef.current = getEngagespotClient(apiKey, userId, {
      ...options,
    });
  }
  const engagespotInstance = engagespotRef.current;
  return engagespotInstance;
}

export function useEngagespot({
  apiKey,
  userId,
  formatDate = defaultDateFormatter,
  disableNotificationChime = true,
  notificationChimeSrc = defaultChimeSrc,
  disableTitleUpdate = false,
  titleUpdateText = defaultTitleUpdateText,
  page = 1,
  floatingPanelOptions: {
    panelOpenByDefault = false,
    placementOptions = defaultPlacementOptions,
    enableFloatingPanel = false,
  } = {
    panelOpenByDefault: false,
    placementOptions: defaultPlacementOptions,
    enableFloatingPanel: true,
  },
  events,
  ...options
}: UseEngagespotOptions) {
  const engagespotInstance = useEngagespotInstance(apiKey, userId, options);
  const transformDate = dateTransformer(formatDate);
  const [notifications, setNotifications] = useState(initializeNotifications);
  const [webPushState, setWebPushState] =
    useState<globalThis.PermissionState>('prompt');
  const hideBranding = engagespotInstance.hideBranding;
  const allowWebPush =
    engagespotInstance.enableWebPush && engagespotInstance.isWebPushSupported();
  const [isValid, setIsValid] = useState(false);
  const [notificationPermissionState, setNotificationPermissionState] =
    useState(PermissionState.PERMISSION_REQUIRED);

  function getFloatingPanelProps() {
    const {
      isMobile,
      panelVisibilityRef,
      togglePanelVisibility,
      getArrowProps,
      getButtonProps,
      getPanelOffsetProps,
      getPanelProps,
    } = useFloatingNotification({
      panelOpenByDefault,
      placementOptions: merge(defaultPlacementOptions, placementOptions),
      updateNotificationFn: () => {
        engagespotInstance.getNotificationList().markAllAsSeen();
        setNotifications(oldNotifications => {
          return {
            ...oldNotifications,
            data: oldNotifications.data.map(transformDate),
            unreadCount: 0,
          };
        });
      },
    });
    const { page, loaderRef, containerRef, hasMore, setHasMore } =
      useInfiniteScroll({});

    return {
      isMobile,
      panelVisibilityRef,
      togglePanelVisibility,
      getArrowProps,
      getButtonProps,
      getPanelOffsetProps,
      getPanelProps,
      scroll: { page, loaderRef, containerRef, hasMore, setHasMore },
    };
  }

  const floatingPanelProps = enableFloatingPanel
    ? getFloatingPanelProps()
    : ({} as ReturnType<typeof getFloatingPanelProps>);

  const actualPage = enableFloatingPanel
    ? floatingPanelProps?.scroll?.page
    : page;

  const markNotificationStateAsClicked = (notificationId: string) => {
    setNotifications(({ data: previousData, ...oldNotifications }) => {
      return {
        ...oldNotifications,
        data: previousData.map(notification => {
          if (notification.id === notificationId && !notification.clickedAt) {
            return {
              ...notification,
              clickedAt: new Date().toUTCString(),
            };
          }
          return notification;
        }),
      };
    });
  };

  const deleteNotificationFromState = (notificationId: string) => {
    setNotifications(({ data: previousData, ...oldNotifications }) => {
      return {
        ...oldNotifications,
        data: previousData.filter(data => data.id !== notificationId),
      };
    });
  };

  const transformNotification = (notification: Notification) => {
    return {
      ...transformDate(notification),
      markAsClicked: () => {
        notification.markAsClicked();
        markNotificationStateAsClicked(notification.id);
      },
      deleteNotification: () => {
        notification.delete();
        deleteNotificationFromState(notification.id);
      },
    };
  };

  useEffect(() => {
    async function checkIsValid() {
      //TODO:- check if validation is success
      const isValid = true;
      setIsValid(isValid);
    }

    async function getNotificationPermissionState() {
      const state = await engagespotInstance.getWebPushRegistrationState();
      let permissionState: globalThis.PermissionState = 'denied';
      if (state === PermissionState.PERMISSION_GRANTED) {
        permissionState = 'granted';
      } else if (state === PermissionState.PERMISSION_DENIED) {
        permissionState = 'denied';
      } else if (state === PermissionState.PERMISSION_REQUIRED) {
        permissionState = 'prompt';
      }
      setWebPushState(permissionState);
      setNotificationPermissionState(state);
    }

    engagespotInstance.onNotificationReceive(
      (notificationItem: Notification) => {
        if (enableFloatingPanel) {
          setNotifications(({ data: previousData, ...oldNotifications }) => {
            return {
              ...oldNotifications,
              data: [transformNotification(notificationItem), ...previousData],
              unreadCount: floatingPanelProps?.panelVisibilityRef?.current
                ? oldNotifications.unreadCount
                : oldNotifications.unreadCount + 1,
            };
          });
        }

        if (!disableNotificationChime) {
          playSound(notificationChimeSrc);
        }
        if (!disableTitleUpdate) {
          updateDocumentTitle(titleUpdateText);
        }
        events?.onNotificationReceive?.(notificationItem);
      }
    );

    engagespotInstance.onNotificationDelete((notificationId: string) => {
      deleteNotificationFromState(notificationId);
      events?.onNotificationDelete?.(notificationId);
    });

    engagespotInstance.onNotificationClick((notificationId: string) => {
      markNotificationStateAsClicked(notificationId);
      events?.onNotificationClick?.(notificationId);
    });

    engagespotInstance.onNotificationSee((notificationId: string) => {
      events?.onNotificationSee?.(notificationId);
    });

    engagespotInstance.onWebPushPermissionChange(state => {
      setWebPushState(state);
    });

    checkIsValid();
    getNotificationPermissionState();
  }, [apiKey, userId]);

  useEffect(() => {
    async function getNotifications() {
      const {
        data,
        unreadCount,
        totalCount,
        totalPages,
        currentPage,
        itemsPerPage,
      } = await engagespotInstance.getNotificationList().fetch(actualPage);
      const notifications = data.map(transformNotification);

      if (actualPage < totalPages) {
        floatingPanelProps?.scroll?.setHasMore(true);
      } else {
        floatingPanelProps?.scroll?.setHasMore(false);
      }
      setNotifications(({ data: previousData }) => {
        return {
          unreadCount,
          totalCount,
          totalPages,
          currentPage,
          itemsPerPage,
          data: previousData.concat(notifications),
        };
      });
    }

    getNotifications();
  }, [actualPage, apiKey, userId]);

  const enableWebPush = () => {
    engagespotInstance.httpsWebPushSubscribe();
  };

  return {
    isValid,
    floatingPanel: {
      ...floatingPanelProps,
      panelVisibility: floatingPanelProps?.panelVisibilityRef?.current,
    },
    useJumpToTop,
    notifications,
    notificationPermissionState,
    hideBranding,
    enableWebPush,
    allowWebPush,
    webPushState,
  };
}
