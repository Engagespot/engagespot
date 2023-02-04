import { Deps } from '../createInstance';

export type Category = {
  id: number;
  identifier: string;
};

export type EngagespotChannel =
  | 'inApp'
  | 'webPush'
  | 'email'
  | 'mobilePush'
  | 'sms';

export interface UserPreferenceForChannel {
  channel: EngagespotChannel;
  enabled: boolean;
}

export type UserPreference = {
  category: Category;
  channelPreferences: Array<UserPreferenceForChannel>;
};
export type SetPreference = {
  categoryId: string;
  channels: UserPreference['channelPreferences'];
};

export type SetUserAttributes = Record<string, any>;

export function preferencesFactory({ log, sendRequest }: Deps) {
  /**
   * Returns the preferences of this user
   */
  const getPreferences = async () => {
    const response = await sendRequest<UserPreference[]>({
      method: 'get',
      path: '/preferences',
    });
    if (!response) {
    }
    return response;
  };

  /**
   * Sets preferences of this user
   */
  const setPreferences = async (preferences: SetPreference[]) => {
    const response = await sendRequest<UserPreference[]>({
      method: 'patch',
      path: '/preferences',
      data: { preference: preferences },
    });
    if (!response) {
      return false;
    }
    log(response);
    return true;
  };

  /**
   * Sets attributes to user's profile
   */
  const setProfileAttributes = async (attributes: SetUserAttributes) => {
    const response = await sendRequest<UserPreference[]>({
      method: 'patch',
      path: '/preferences',
      data: { ...attributes },
    });
    if (!response) {
      return false;
    }
    log(response);
    return true;
  };

  /**
   * Gets notification categories of this app.
   */
  const getCategories = async () => {
    const response = await sendRequest<Category[]>({
      method: 'get',
      path: '/categories',
    });
    if (!response) {
      return false;
    }
    return response;
  };

  const returnValues = {
    getPreferences,
    setPreferences,
    setProfileAttributes,
    getCategories,
  };
  return {
    ...returnValues,
    publicApi: { ...returnValues },
  };
}
