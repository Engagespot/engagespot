export interface Category {
  id: number;
  identifier: string;
}

export type EngagespotChannel =
  | 'inApp'
  | 'webPush'
  | 'email'
  | 'mobilePush'
  | 'sms'
  | 'chat' | 'whatsapp' | 'slack';

export interface UserPreferenceForChannel {
  channel: EngagespotChannel;
  enabled: boolean;
}

export type UserPreference = {
  category: Category;
  channelPreferences: Array<UserPreferenceForChannel>;
};
export interface SetPreference {
  categoryId: string;
  channels: UserPreference['channelPreferences'];
}
