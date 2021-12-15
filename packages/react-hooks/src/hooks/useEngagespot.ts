import { useState, useEffect, useRef, useCallback } from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

import EngagespotCore, {
  Options,
  PermissionState,
  NotificationItem,
} from '@engagespot/core';

import { useJumpToTop } from './useJumpToTop';
import { useFloatingNotification } from './useFloatingNotification';
import { useInfiniteScroll } from './useInfiniteScroll';

const dateFunctions = {
  format,
  formatDistance,
  formatRelative,
  subDays,
};

export interface UseEngagespotOptions extends Options {
  apiKey: string;
  formatDate?: (dateString: string, dateFns: typeof dateFunctions) => string;
}

function initializeNotifications() {
  return {
    data: [] as NotificationItem[],
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
    endPointOverride: 'http://api.staging.engagespot.co/v3/',
    enableNonHttpsWebPush: true,
  });
  return engagespotClient;
}

export function useEngagespot({
  apiKey,
  userId,
  formatDate = dateString => {
    return formatDistance(subDays(new Date(dateString), 3), new Date(), {
      addSuffix: true,
    });
  },
  ...options
}: UseEngagespotOptions) {
  const engagespotInstance = useRef(
    getEngagespotClient(apiKey, userId, options)
  ).current;
  const [notifications, setNotifications] = useState(initializeNotifications);
  const [hasMore, setHasMore] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [panelVisibility, togglePanelVisibility] = useState(false);
  const [notificationPermissionState, setNotificationPermissionState] =
    useState(PermissionState.PERMISSION_REQUIRED);
  const { buttonRef, panelRef, styles, attributes } = useFloatingNotification(
    togglePanelVisibility
  );
  const { page, loaderRef, containerRef } = useInfiniteScroll({ hasMore });

  useEffect(() => {
    async function checkIsValid() {
      //TODO:- check if validation is success
      const isValid = true;
      setIsValid(isValid);
    }

    async function getNotificationPermissionState() {
      const state = await engagespotInstance.getWebPushRegistrationState();
      setNotificationPermissionState(state);
    }

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
      let transformedData = data.map(notificationItem => {
        console.log('notification item is ', notificationItem);
        return {
          ...notificationItem,
          seenAt: formatDate(notificationItem?.seenAt ?? '', dateFunctions),
        };
      });
      if (page < totalPages) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
      console.log('current page', currentPage, 'Page ', page);
      setNotifications(({ data: previousData }) => {
        return {
          unreadCount,
          totalCount,
          totalPages,
          currentPage,
          itemsPerPage,
          data: previousData.concat(transformedData),
        };
      });
    }

    getNotifications();
  }, [page]);

  const onButtonClick = <T>(event: React.MouseEvent<T, MouseEvent>) => {
    togglePanelVisibility(visibility => !visibility);
  };

  const getButtonProps = useCallback(() => {
    return { onClick: onButtonClick, ref: buttonRef };
  }, [buttonRef]);

  const getPanelProps = useCallback(() => {
    return { ref: panelRef, style: styles.popper, ...attributes.popper };
  }, [panelRef]);

  const getPanelOffsetProps = useCallback(() => {
    return {
      style: styles.offset,
    };
  }, []);

  return {
    isValid,
    page,
    togglePanelVisibility,
    panelVisibility,
    getButtonProps,
    getPanelProps,
    getPanelOffsetProps,
    useJumpToTop,
    notifications,
    notificationPermissionState,
    scroll: {
      loaderRef,
      containerRef,
      hasMore,
    },
  };
}
