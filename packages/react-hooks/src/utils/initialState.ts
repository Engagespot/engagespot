import { Category, EngagespotChannel } from '@engagespot/core';

export const initialState = {
  page: 1,
  data: [],
  rawData: [] as RawData,
  hasMore: false,
  unreadCount: 0,
  webPushData: {},
  preferences: {
    channels: [
      { name: 'In-App', id: 'inApp' },
      { name: 'Web Push', id: 'webPush' },
      { name: 'Email', id: 'email' },
      { name: 'Mobile Push', id: 'mobilePush' },
      { name: 'SMS', id: 'sms' },
    ] as const,
    userPreferences: {} as UserPreferences[],
  },
};

type Channels = EngagespotChannel;

export type UserPreferences = {
  category: {
    id: string;
    name: string;
  };
  channels: {
    [key in Channels]: {
      enabled: boolean;
    };
  };
};

export type Preferences = {
  channels: typeof initialState.preferences.channels;
  userPreferences: UserPreferences[];
};

export type RawNotification = {
  clickedAt: string;
  created: string;
  createdAt: string;
  icon: string;
  id: string;
  message: string;
  seenAt: string;
  title: string;
  url: string;
  data: object;
};

export type RawDataObject = {
  currentPage: number;
  itemsPerPage: number;
  totalCount: number;
  unreadCount: number;
  notifications: RawNotification[];
};

export type RawData = RawDataObject[];

export type InitialState = typeof initialState & { [key: string]: any };

export type DefaultPayload = {
  [key: string]: any;
};

export type Action<T = DefaultPayload> = {
  type: string;
  payload?: T;
};
