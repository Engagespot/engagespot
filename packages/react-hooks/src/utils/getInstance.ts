import EngagespotCore, { Options, SetPreference } from '@engagespot/core';
import { UseEngagespotOptions } from 'src/hooks/useEngagespot';
import { Hooks } from './hookUtils';
import { Preferences, RawDataObject } from './initialState';

export type GetHooks = () => Hooks;

export interface EngagespotCoreInstance {
  core: EngagespotCore;
}

export type Instance<T = RawDataObject> = Partial<EngagespotCoreInstance> &
  Partial<UseEngagespotOptions> & {
    [key: string]: any;
    hooks?: Hooks;
    getHooks?: GetHooks;
    dispatch?: React.Dispatch<any>;
    notifications?: T[];
    unreadCount?: number;
    deleteNotification?: (notificationId: string) => void;
    markAsRead?: (notificationId: string) => void;
    markAllAsSeen?: () => void;
  };

export type FinalInstance<
  T = RawDataObject,
  U = void,
  V = void,
  W = void,
  X = void
> = UseEngagespotOptions &
  EngagespotCoreInstance & {
    hooks: Hooks;
    getHooks: GetHooks;
    dispatch: React.Dispatch<any>;
    notifications: T[];
    preferences: Preferences;
    unreadCount: number;
    deleteNotification: (notificationId: string) => void;
    markAsRead: (notificationId: string) => void;
    markAllAsSeen: () => void;
    setPreferences: (preferences: SetPreference[]) => void;
  } & U &
  V &
  W &
  X & { [key: string]: any };

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

export function registerClient<T>(instance: Instance<T>) {
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
