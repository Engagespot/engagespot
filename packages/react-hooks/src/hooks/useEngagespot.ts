import { useState, useEffect, useRef } from 'react';
import merge from 'lodash.merge';

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
import {
  dateFunctions,
  defaultDateFormatter,
  dateTransformer,
} from '../utils/dateUtils';

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
    enableNonHttpsWebPush: true,
  });
  return engagespotClient;
}

export function useEngagespot({
  apiKey,
  userId,
  formatDate = defaultDateFormatter,
  placementOptions = defaultPlacementOptions,
  endPointOverride = 'https://api.staging.engagespot.co/v3/',
  ...options
}: UseEngagespotOptions) {
  const engagespotRef = useRef<EngagespotCore | null>(null);
  if (engagespotRef.current == null) {
    engagespotRef.current = getEngagespotClient(apiKey, userId, {
      endPointOverride,
      ...options,
    });
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
  const { page, loaderRef, containerRef } = useInfiniteScroll({ hasMore });
  console.log('current page', page);
  const transformDate = dateTransformer(formatDate);

  useEffect(() => {
    engagespotInstance.onNotificationReceive(
      (notificationItem: NotificationItem) => {
        console.log('Notification received', notificationItem);
        setNotifications(({ data: previousData, ...oldNotifications }) => {
          return {
            ...oldNotifications,
            data: [transformDate(notificationItem), ...previousData],
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
      console.log('Inside fetch');
      const {
        data,
        unreadCount,
        totalCount,
        totalPages,
        currentPage,
        itemsPerPage,
      } = await engagespotInstance.getNotificationList().fetch(page);
      console.log(
        'Notifications...',
        data,
        totalCount,
        totalPages,
        currentPage
      );
      const transformedData = data.map(transformDate);
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
          data: previousData.concat(transformedData),
        };
      });
    }

    getNotifications();
  }, [page]);

  const onButtonClick = () => {
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
