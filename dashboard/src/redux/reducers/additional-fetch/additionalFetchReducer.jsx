import { AdditionalFetchActionTypes } from './additionalFetchTypes';

const INITIAL_STATE = {
  user_apps: [],
  appId: null,
  clients: [],
  clientId: null,
  clientUsers: [],
  invitations: [],
  logs: [],
  channels: [],
  providers: { installed: [], available: [] },
  shownInvitationsOnce: false,
  channelForProviderConfig: '',
  globalLoader: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdditionalFetchActionTypes.SetChangeAppId: {
      return { ...state, appId: action.payload };
    }
    case AdditionalFetchActionTypes.SetChangeApps: {
      return { ...state, user_apps: action.payload };
    }
    case AdditionalFetchActionTypes.SetChangeClients: {
      return { ...state, clients: action.payload };
    }
    case AdditionalFetchActionTypes.SetChangeCilentId: {
      return { ...state, clientId: action.payload };
    }
    case AdditionalFetchActionTypes.SetChangeCilentUsers: {
      return { ...state, clientUsers: action.payload };
    }
    case AdditionalFetchActionTypes.SetChangeInvitations: {
      return { ...state, invitations: action.payload };
    }
    case AdditionalFetchActionTypes.SetChangeShownInvitationsOnce: {
      return { ...state, shownInvitationsOnce: action.payload };
    }
    case AdditionalFetchActionTypes.SetChangeLogs: {
      return { ...state, logs: action.payload };
    }
    case AdditionalFetchActionTypes.SetChangeChannels: {
      return { ...state, channels: action.payload };
    }
    case AdditionalFetchActionTypes.SetChangeProvider: {
      return { ...state, providers: action.payload };
    }
    case AdditionalFetchActionTypes.SetChannelForProvderConfig: {
      return { ...state, channelForProviderConfig: action.payload };
    }
    case AdditionalFetchActionTypes.SetGlobalLoader: {
      return { ...state, globalLoader: action.payload };
    }
    case AdditionalFetchActionTypes.Update: {
      return action.payload;
    }
    case AdditionalFetchActionTypes.Clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
