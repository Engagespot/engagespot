import {
  EngagespotChannel,
  UserPreference,
} from '../interfaces/user-preference.interface';

interface UserPreferenceForChannel {
  channel: EngagespotChannel;
  enabled: boolean;
}

export interface Preference {
  categoryId: number;
  channels: UserPreferenceForChannel[];
}
