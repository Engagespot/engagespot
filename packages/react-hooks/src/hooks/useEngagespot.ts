import { useState, useEffect, useRef } from 'react';
import merge from 'lodash.merge';
import { useMedia } from 'react-use';

import EngagespotCore, {
  Options,
  PermissionState,
  NotificationItem,
  Notification,
} from '@engagespot/core';

import { useJumpToTop } from './useJumpToTop';
import {
  PlacementOptions,
  defaultPlacementOptions,
  useFloatingNotification,
} from './useFloatingNotification';
import { useInfiniteScroll } from './useInfiniteScroll';
import { useSystemDarkTheme } from './useSystemDarkTheme';
import {
  dateFunctions,
  defaultDateFormatter,
  dateTransformer,
} from '../utils/dateUtils';
import { breakpointMobile } from '../utils/mediaQuery';
import {
  updateDocumentTitle,
  defaultTitleUpdateText,
} from '../utils/documentTitle';
import { playSound, defaultChimeSrc } from '../utils/chime';

export interface UseEngagespotOptions extends Options {
  apiKey: string;
  formatDate?: (dateString: string, dateFns: typeof dateFunctions) => string;
  placementOptions?: PlacementOptions;
  disableNotificationChime?: boolean;
  notificationChimeSrc?: string;
  disableTitleUpdate?: boolean;
  titleUpdateText?: string;
  panelOpenByDefault?: boolean;
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

export function useEngagespot({
  apiKey,
  userId,
  formatDate = defaultDateFormatter,
  placementOptions = defaultPlacementOptions,
  disableNotificationChime = false,
  notificationChimeSrc = defaultChimeSrc,
  disableTitleUpdate = false,
  titleUpdateText = defaultTitleUpdateText,
  panelOpenByDefault = false,
  ...options
}: UseEngagespotOptions) {
  const engagespotRef = useRef<EngagespotCore | null>(null);
  if (engagespotRef.current == null) {
    engagespotRef.current = getEngagespotClient(apiKey, userId, {
      ...options,
    });
  }
  const isMobile = useMedia(breakpointMobile);
  const engagespotInstance = engagespotRef.current;
  const transformDate = dateTransformer(formatDate);
  const [notifications, setNotifications] = useState(initializeNotifications);
  const [webPushState, setWebPushState] =
    useState<globalThis.PermissionState>('prompt');
  const hideBranding = engagespotInstance.hideBranding;
  const allowWebPush =
    engagespotInstance.enableWebPush && engagespotInstance.isWebPushSupported();
  const [hasMore, setHasMore] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [panelVisibility, toggleNotificationPanelVisibility] =
    useState(panelOpenByDefault);
  const panelVisibilityRef = useRef<boolean>(false);
  panelVisibilityRef.current = panelVisibility;
  const togglePanelVisibility = (
    panelUpdateFn = (visibility: boolean) => !visibility
  ) => {
    if (!panelVisibilityRef.current) {
      engagespotInstance.getNotificationList().markAllAsSeen();
      setNotifications(oldNotifications => {
        return {
          ...oldNotifications,
          data: oldNotifications.data.map(transformDate),
          unreadCount: 0,
        };
      });
    }
    toggleNotificationPanelVisibility(panelUpdateFn);
  };
  const [notificationPermissionState, setNotificationPermissionState] =
    useState(PermissionState.PERMISSION_REQUIRED);
  const { buttonRef, panelRef, arrowRef, styles, attributes, update } =
    useFloatingNotification(
      merge(defaultPlacementOptions, placementOptions),
      isMobile
    );
  const { page, loaderRef, containerRef } = useInfiniteScroll({ hasMore });
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

  function handleDocumentClick(event: MouseEvent) {
    if (
      panelRef.current?.contains(event.target as Node) ||
      buttonRef.current?.contains(event.target as Node)
    ) {
      return;
    }
    if (panelVisibilityRef.current) {
      togglePanelVisibility();
    }
  }

  useEffect(() => {
    // listen for clicks and close dropdown on body
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

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
        setNotifications(({ data: previousData, ...oldNotifications }) => {
          return {
            ...oldNotifications,
            data: [transformNotification(notificationItem), ...previousData],
            unreadCount: panelVisibilityRef.current
              ? oldNotifications.unreadCount
              : oldNotifications.unreadCount + 1,
          };
        });
        if (!disableNotificationChime) {
          playSound(notificationChimeSrc);
        }
        if (!disableTitleUpdate) {
          updateDocumentTitle(titleUpdateText);
        }
      }
    );

    engagespotInstance.onNotificationDelete((notificationId: string) => {
      deleteNotificationFromState(notificationId);
    });

    engagespotInstance.onNotificationClick((notificationId: string) => {
      markNotificationStateAsClicked(notificationId);
    });

    engagespotInstance.onNotificationSee((notificationId: string) => {});

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
      } = await engagespotInstance.getNotificationList().fetch(page);
      const notifications = data.map(transformNotification);

      if (page < totalPages) {
        setHasMore(true);
      } else {
        setHasMore(false);
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
  }, [page, apiKey, userId]);

  const onButtonClick = () => {
    togglePanelVisibility();
    update?.();
  };

  const getButtonProps = () => {
    return { onClick: onButtonClick, ref: buttonRef };
  };

  const getPanelProps = () => {
    return { ref: panelRef, style: styles.popper, ...attributes.popper };
  };

  const getPanelOffsetProps = () => {
    return {
      style: styles.offset,
    };
  };

  const getArrowProps = () => {
    return {
      ref: arrowRef,
      style: {
        ...styles.arrow,
        display:
          panelVisibility && placementOptions.enableArrow ? 'block' : 'none',
      } as React.CSSProperties,
    };
  };

  const enableWebPush = () => {
    engagespotInstance.httpsWebPushSubscribe();
  };

  return {
    isValid,
    page,
    isMobile,
    useSystemDarkTheme,
    togglePanelVisibility,
    panelVisibility,
    getButtonProps,
    getPanelProps,
    getArrowProps,
    getPanelOffsetProps,
    useJumpToTop,
    notifications,
    notificationPermissionState,
    scroll: {
      loaderRef,
      containerRef,
      hasMore,
    },
    hideBranding,
    enableWebPush,
    allowWebPush,
    webPushState,
  };
}
