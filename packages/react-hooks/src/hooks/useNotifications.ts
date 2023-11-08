import {
  Notification,
  SetPreference,
  EngagespotChannel,
  ChangeNotificationRequest,
} from '@engagespot/core';
import { useCallback, useEffect } from 'react';
import { Actions, createAction } from 'src/utils/actions';
import { dateTransformer, defaultDateFormatter } from 'src/utils/dateUtils';
import { DataTransformer, Hooks, StateReducer } from 'src/utils/hookUtils';
import { initialState, RawData } from 'src/utils/initialState';
import { Plugins } from 'src/utils/plugins';
import { Instance } from '../utils/getInstance';

export interface FetchOptions {
  page: number;
}

Actions.SetData = 'SetData';
Actions.DeleteNotification = 'DeleteNotification';
Actions.SetUnreadCount = 'SetUnreadCount';
Actions.IncrementUnreadCount = 'IncrementUnreadCount';
Actions.DecrementUnreadCount = 'DecrementUnreadCount';
Actions.AddNotification = 'AddNotification';
Actions.MarkAsRead = 'MarkAsRead';
Actions.MarkAllAsSeen = 'MarkAllAsSeen';
Actions.SetPreferences = 'SetPreferences';
Actions.SetCategories = 'SetCategories';
Actions.SetInitialPreferences = 'SetInitialPreferences';
Actions.ChangeNotificationState = 'ChangeNotificationState';

const channels = ['inApp', 'webPush', 'email', 'sms', 'mobilePush'] as const;

const reducer: StateReducer = function (state, action, _, instance) {
  const formatDate = instance.formatDate || defaultDateFormatter;
  const transformDate = dateTransformer(formatDate);
  const transformNotification = (notification: any) => {
    return {
      ...transformDate(notification),
    };
  };
  if (action.type === Actions.Init) {
    return initialState as any;
  }

  if (action.type === Actions.SetData) {
    const result = action.payload?.result;
    const notifications = result.data.map(transformNotification);
    const notificationMetadata =
      result.currentPage == 1
        ? {
            itemsPerPage: result.itemsPerPage,
            totalCount: result.totalCount,
            totalPages: result.totalPages,
            unreadCount: result.unreadCount,
          }
        : {};

    const rawData = state.rawData.concat([{ ...result, notifications }]) as any;
    delete rawData.data;

    return {
      ...state,
      currentPage: result.currentPage,
      ...notificationMetadata,
      rawData,
    };
  } else if (action.type === Actions.DeleteNotification) {
    const rawData = state.rawData;
    const notificationId = action.payload?.notificationId;
    const newRawData = rawData.map((pagedData: any, page: any) => {
      const notificationIndex = pagedData.notifications.findIndex(
        (notification: any) => notification.id === notificationId
      );
      if (notificationIndex < 0) return pagedData;
      const notifications = [...pagedData.notifications];
      notifications.splice(notificationIndex, 1);
      return { ...pagedData, notifications };
    });

    return {
      ...state,
      rawData: newRawData,
    };
  } else if (action.type === Actions.SetUnreadCount) {
    return {
      ...state,
      unreadCount: action.payload?.unreadCount,
    };
  } else if (action.type === Actions.IncrementUnreadCount) {
    return {
      ...state,
      unreadCount: state.unreadCount + 1,
    };
  } else if (action.type === Actions.DecrementUnreadCount) {
    return {
      ...state,
      unreadCount: state.unreadCount - 1,
    };
  } else if (action.type === Actions.AddNotification) {
    const rawData = state.rawData;
    const newNotification = action.payload?.notification;
    const newRawData = [
      { notifications: [transformNotification(newNotification)] },
    ].concat(rawData);
    return {
      ...state,
      rawData: newRawData,
    };
  } else if (action.type === Actions.MarkAsRead) {
    console.log({ markUseNotificationAction: action, state });
    const rawData = state.rawData;
    const notificationId = action.payload?.notificationId;
    const newRawData = rawData.map((pagedData: any, page: any) => {
      const notifications = pagedData.notifications.map((notification: any) => {
        if (notification.id !== notificationId || notification.clickedAt)
          return notification;
        return { ...notification, clickedAt: new Date().toUTCString() };
      });
      return { ...pagedData, notifications };
    });
    console.log({
      markRawData: {
        newRawData,
      },
    });
    return {
      ...state,
      rawData: newRawData,
    };
  } else if (action.type === Actions.ChangeNotificationState) {
    console.log({ changeNotificationStateAction: action, state });
    const rawData = state.rawData;
    const notificationId = action.payload?.notificationId;
    const newRawData = rawData.map((pagedData: any, page: any) => {
      const notifications = pagedData.notifications.map((notification: any) => {
        if (notification.id !== notificationId) return notification;
        return { ...notification, ...action.payload?.result };
      });
      return { ...pagedData, notifications };
    });
    console.log({
      changeNotificationRawData: {
        newRawData,
      },
    });
    return {
      ...state,
      rawData: newRawData,
    };
  } else if (action.type === Actions.SetInitialPreferences) {
    const userPreferences = action.payload?.preferences;
    return {
      ...state,
      preferences: { ...userPreferences },
    };
  } else if (action.type === Actions.SetPreferences) {
    const preferences = action.payload?.preferences;

    const currentUserPreferences = state.preferences.userPreferences;

    const newUserPreferences = currentUserPreferences.map(preference => {
      const pref = preferences.find(
        (pref: any) => preference.category.id === pref.categoryId
      );
      if (!pref) return preference;
      const newPreference = { ...preference };
      pref?.channels?.forEach((channelPreference: any) => {
        var channel = channelPreference.channel as typeof channels[number];
        newPreference.channels[channel].enabled = Boolean(
          channelPreference.enabled
        );
      });
      return newPreference;
    });

    return {
      ...state,
      preferences: {
        ...state.preferences,
        userPreferences: newUserPreferences,
      },
    };
  }

  return state;
};

const dataTransformer = function (
  rawData: RawData,
  _: any,
  instance: Instance<Plugins>
) {
  const formatDate = instance.formatDate || defaultDateFormatter;
  const transformDate = dateTransformer(formatDate);
  const transformNotification = (notification: any) => {
    return {
      ...transformDate(notification),
    };
  };
  return rawData.map(rawItem => {
    const item = {
      ...rawItem,
      notifications: rawItem.notifications.map(transformNotification),
    };
    return item;
  });
};

export function useNotifications(hooks: Hooks) {
  hooks.stateReducers.push(reducer);
  hooks.dataTransformer.push(dataTransformer as DataTransformer);
  hooks.useInstance.push(useInstance);
}

useNotifications.pluginName = 'useNotifications';

function useInstance(instance: Required<Instance<Plugins>>) {
  const events = instance.events;
  const setNotificationData = (result: any) => {
    instance.dispatch({
      type: Actions.SetData,
      payload: {
        result,
      },
    });
  };
  const deleteNotification = useCallback((notificationId: any) => {
    instance.core.deleteNotification(notificationId);
    instance.dispatch(
      createAction(Actions.DeleteNotification, { notificationId })
    );
  }, []);
  const markAsRead = useCallback((notificationId: string) => {
    console.log({ markUseNotificationUseInstance: notificationId });
    instance.core.markAsRead(notificationId);
    instance.dispatch(createAction(Actions.MarkAsRead, { notificationId }));
  }, []);
  const changeNotificationState = useCallback(
    async (notificationId: string, data: ChangeNotificationRequest) => {
      console.log({ changeNotificationStateUseInstance: notificationId });

      const result = await instance.core.changeNotificationState(
        notificationId,
        data
      );

      console.log({
        changeNotificationStateApiResult: result,
      });

      instance.dispatch(
        createAction(Actions.ChangeNotificationState, {
          notificationId,
          result,
        })
      );
    },
    []
  );

  const markAllAsSeen = useCallback(() => {
    instance.core.getNotificationList().markAllAsSeen();
    instance.dispatch(createAction(Actions.MarkAllAsSeen));
  }, []);

  useEffect(() => {
    async function getNotifications() {
      const result = await instance.core
        .getNotificationList()
        .fetch(instance.reducerState.page || 1);
      setNotificationData(result);
    }

    getNotifications();
  }, [instance.reducerState.page, instance.apiKey, instance.userId]);

  useEffect(() => {
    instance.core.onNotificationReceive(
      (notificationItem: Notification<any>) => {
        instance.dispatch(
          createAction(Actions.AddNotification, {
            notification: notificationItem,
          })
        );
        events?.onNotificationReceive?.(notificationItem);
      }
    );

    instance.core.onNotificationDelete((notificationId: string) => {
      instance.dispatch(
        createAction(Actions.DeleteNotification, { notificationId })
      );
      events?.onNotificationDelete?.(notificationId);
    });

    instance.core.onNotificationClick((notificationId: string) => {
      instance.dispatch(createAction(Actions.MarkAsRead, { notificationId }));
      events?.onNotificationClick?.(notificationId);
    });

    instance.core.onNotificationSee((notificationId: string) => {
      events?.onNotificationSee?.(notificationId);
    });

    async function getPreferences() {
      if (!instance.apiKey || !instance.userId) return;
      const isReady = await instance.core.isReady();
      if (!isReady) return;
      const enabledChannelsIds = instance.core.enabledChannels;
      const enabledChannels = enabledChannelsIds.map(channelId => {
        return instance.core.supportedChannels[channelId];
      });
      const preferences = await instance.core.getPreferences();
      const categories = await instance.core.getCategories();

      var preferenceArr = categories.map(category => {
        const preference = { category, channels: {} } as any;
        const userPreference = preferences.find(
          pref => preference.category.id === pref.category.id
        );
        Object.assign(preference, userPreference || {});
        enabledChannelsIds.forEach(channel => {
          let enabled = false;
          const preferenceExist = preferences.find((channelObj: any) => {
            return channelObj.channel === channel;
          });
          if (!userPreference || !preferenceExist) {
            enabled = true;
          }

          preference.channels[channel] = {
            enabled,
          };
        });
        preference?.channelPreferences?.forEach((channelPreference: any) => {
          var channel = channelPreference.channel;
          if (!enabledChannelsIds.includes(channel)) return;
          preference.channels[channel].enabled = Boolean(
            channelPreference.enabled
          );
        });
        delete preference?.channelPreferences;
        return preference;
      });

      instance.dispatch(
        createAction(Actions.SetInitialPreferences, {
          preferences: {
            userPreferences: preferenceArr,
            channels: enabledChannels,
          },
        })
      );
    }

    getPreferences();
  }, [instance.apiKey, instance.userId]);

  const setPreferences = (preferences: SetPreference[]) => {
    instance.core.setPreferences(preferences);
    instance.dispatch(
      createAction(Actions.SetPreferences, {
        preferences,
      })
    );
  };

  Object.assign(instance, {
    notifications: instance.reducerState.data,
    unreadCount: instance.reducerState.unreadCount,
    preferences: instance.reducerState.preferences,
    setPreferences,
    getCategories: instance.core.getCategories,
    deleteNotification,
    markAsRead,
    markAllAsSeen,
    changeNotificationState,
  });
}
