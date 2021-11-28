import { useState, useEffect, useRef, useCallback } from 'react';
import EngagespotCore, { Options, PermissionState } from '@engagespot/core';

import { useFloatingNotification } from './useFloatingNotification';
import { useInfiniteScroll } from './useInfiniteScroll';

export interface UseEngagespotOptions extends Options {
  apiKey: string;
}

function initializeNotifications() {
  return {
    data: [],
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
  ...options
}: UseEngagespotOptions) {
  let engagespotInstance = useRef(
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
      if (page < totalPages) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
      console.log('current page', currentPage, 'Page ', page);
      setNotifications(({ data: previousData }: any) => {
        return {
          unreadCount,
          totalCount,
          totalPages,
          currentPage,
          itemsPerPage,
          data: previousData.concat(data),
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
    useJumpToTop: {},
    notifications,
    notificationPermissionState,
    scroll: {
      loaderRef,
      containerRef,
      hasMore,
    },
  };
}
