import { AdditionalFetchActionTypes } from './additionalFetchTypes';

export const SetAppsFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetChangeApps,
    payload: values,
  };
};

export const SetAppId = value => {
  return {
    type: AdditionalFetchActionTypes.SetChangeAppId,
    payload: value,
  };
};

export const SetClientsFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetChangeClients,
    payload: values,
  };
};

export const SetInvitationsFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetChangeInvitations,
    payload: values,
  };
};

export const SetShownInvitationsOnce = values => {
  return {
    type: AdditionalFetchActionTypes.SetChangeShownInvitationsOnce,
    payload: values,
  };
};

export const SetClientId = value => {
  return {
    type: AdditionalFetchActionTypes.SetChangeCilentId,
    payload: value,
  };
};

export const SetClientUserFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetChangeCilentUsers,
    payload: values,
  };
};

export const SetLogsFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetChangeLogs,
    payload: values,
  };
};

export const SetChannelsFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetChangeChannels,
    payload: values,
  };
};
export const SetProvidersFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetChangeProvider,
    payload: values,
  };
};

export const SetChannelForProviderConfigFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetChannelForProvderConfig,
    payload: values,
  };
};

export const SetGlobalLoader = values => {
  return {
    type: AdditionalFetchActionTypes.SetGlobalLoader,
    payload: values,
  };
};

export const UniversityLanguagesFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetUniversityLanguages,
    payload: values,
  };
};

export const OrderStatusFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetOrderStatus,
    payload: values,
  };
};

export const UniversityServicesFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetUniversityServices,
    payload: values,
  };
};

export const ServicesDocumentsFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetServicesDocuments,
    payload: values,
  };
};
