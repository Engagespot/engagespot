import axios from 'axios';

const ListChannels = appId => {
  return axios.get(`/api/v1/apps/${appId}/channels`);
};

const AddNewProviderToChannel = ({
  appId,
  channel,
  providerIdentifier,
  data,
}) => {
  return axios.post(
    `/api/v1/apps/${appId}/channels/${channel}/providers/${providerIdentifier}`,
    data
  );
};

const EditProviderConfigurationInChannel = ({
  appId,
  channel,
  providerIdentifier,
  data,
}) => {
  return axios.patch(
    `/api/v1/apps/${appId}/channels/${channel}/providers/${providerIdentifier}`,
    data
  );
};

const EnableProvider = ({ appId, channel, providerIdentifier }) => {
  return axios.post(
    `/api/v1/apps/${appId}/channels/${channel}/providers/${providerIdentifier}/enable`
  );
};

const DisableProvider = ({ appId, channel, providerIdentifier }) => {
  return axios.post(
    `/api/v1/apps/${appId}/channels/${channel}/providers/${providerIdentifier}/disable`
  );
};

const ListAllProviders = () => {
  return axios.get(`/api/v1/providers`);
};

const ListInstalledProvidersInChannel = ({ appId, channel }) => {
  return axios.get(`/api/v1/apps/${appId}/channels/${channel}/providers`);
};

export {
  ListChannels,
  AddNewProviderToChannel,
  EnableProvider,
  DisableProvider,
  ListAllProviders,
  ListInstalledProvidersInChannel,
  EditProviderConfigurationInChannel,
};
