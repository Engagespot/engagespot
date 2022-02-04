export interface Category {
  id: number;
  identifier: string;
}

export type EngagespotChannel = 'inApp' | 'webPush' | 'email' | 'sms';

export interface UserPreferenceForChannel {
  channel: EngagespotChannel;
  enabled: boolean;
}

export type UserPreference = {
  category: Category;
  channelPreferences: Array<UserPreferenceForChannel>;
};
