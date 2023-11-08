import type { Dispatch as ReactDispatch } from 'react';

import EngagespotCore, { ChangeNotificationRequest, Options, SetPreference } from '@engagespot/core';
import { UseEngagespotOptions } from 'src/hooks/useEngagespot';
import { Scrolling, ScrollingFloatingWebPush } from './applyDefaults';
import { Hooks } from './hookUtils';
import { Preferences, RawDataObject, RawNotification } from './initialState';
import { Plugins } from './plugins';

export type GetHooks = () => Hooks;

export interface EngagespotCoreInstance {
  core: EngagespotCore;
}

export type Instance<T extends Plugins> = Partial<EngagespotCoreInstance> &
  Partial<UseEngagespotOptions<T>> & {
    [key: string]: any;
    hooks?: Hooks;
    getHooks?: GetHooks;
    dispatch?: ReactDispatch<any>;
    notifications: T extends ScrollingFloatingWebPush
      ? RawNotification[]
      : RawDataObject[];
    unreadCount?: number;
    deleteNotification?: (notificationId: string) => void;
    markAsRead?: (notificationId: string) => void;
    changeNotificationState?: (notificationId: string, data: ChangeNotificationRequest) => void;
    markAllAsSeen?: () => void;
  };

export type FinalInstance<T extends Plugins> = UseEngagespotOptions<T> &
  EngagespotCoreInstance & {
    hooks: Hooks;
    getHooks: GetHooks;
    dispatch: ReactDispatch<any>;
    notifications: T extends ScrollingFloatingWebPush | Scrolling
      ? RawNotification[]
      : RawDataObject[];
    preferences: Preferences;
    unreadCount: number;
    deleteNotification: (notificationId: string) => void;
    markAsRead: (notificationId: string) => void;
    changeNotificationState?: (notificationId: string, data: ChangeNotificationRequest) => void;
    markAllAsSeen: () => void;
    setPreferences: (preferences: SetPreference[]) => void;
  } & { [key: string]: any };

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

export function registerClient<T extends Plugins>(instance: Instance<T>) {
  const { userId, apiKey, ...options } = instance;
  const clientChanged =
    instance.core != undefined &&
    (instance.core.userId !== instance.userId ||
      instance.core.apiKey !== instance.apiKey);
  if ((!instance.core || clientChanged) && userId && apiKey) {
    instance.core = getEngagespotClient(apiKey, userId, {
      ...options,
    });
  }
  return clientChanged;
}
