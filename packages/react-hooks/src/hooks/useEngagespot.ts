import { useState, useEffect, useRef } from 'react';
import merge from 'lodash.merge';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

import EngagespotCore, {
  Options,
  PermissionState,
  NotificationItem,
} from '@engagespot/core';

import { useJumpToTop } from './useJumpToTop';
import {
  PlacementOptions,
  defaultPlacementOptions,
  useFloatingNotification,
} from './useFloatingNotification';
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
  placementOptions?: PlacementOptions;
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
    return formatDistance(new Date(dateString), new Date(), {
      addSuffix: true,
    });
  },
  placementOptions = defaultPlacementOptions,
  ...options
}: UseEngagespotOptions) {
  const engagespotRef = useRef<EngagespotCore | null>(null);
  if (engagespotRef.current == null) {
    engagespotRef.current = getEngagespotClient(apiKey, userId, options);
  }
  const engagespotInstance = engagespotRef.current;
  const [notifications, setNotifications] = useState(initializeNotifications);
  const [hasMore, setHasMore] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [panelVisibility, togglePanelVisibility] = useState(false);
  const [notificationPermissionState, setNotificationPermissionState] =
    useState(PermissionState.PERMISSION_REQUIRED);
  const { buttonRef, panelRef, arrowRef, styles, attributes, update } =
    useFloatingNotification(
      togglePanelVisibility,
      merge(defaultPlacementOptions, placementOptions)
    );
  console.log('update popper', update);
  const { page, loaderRef, containerRef } = useInfiniteScroll({ hasMore });

  useEffect(() => {
    engagespotInstance.onNotificationReceive(
      (notificationItem: NotificationItem) => {
        console.log('Notification received', notificationItem);
        setNotifications(({ data: previousData, ...oldNotifications }) => {
          return {
            ...oldNotifications,
            data: [notificationItem, ...previousData],
          };
        });
      }
    );
  }, [engagespotInstance]);

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
        // console.log('notification item is ', notificationItem);
        return {
          ...notificationItem,
          createdAt: formatDate(
            notificationItem?.createdAt ?? '',
            dateFunctions
          ),
        };
      });
      if (page < totalPages) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
      //console.log('current page', currentPage, 'Page ', page);
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
      },
    };
  };

  return {
    isValid,
    page,
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
  };
}
