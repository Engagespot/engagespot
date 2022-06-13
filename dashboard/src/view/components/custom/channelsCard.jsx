import { Switch, Tag } from 'antd';
import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  handlePromise,
  handleSwitchChangeInChannelsPage,
  ifNotAdminShowErrorAndStopExecution,
  openToaster,
  updateChannelData,
} from '../../../helpers/helpers';
import useDebounce from '../../../hooks/useDebounce';
import { SetChannelForProviderConfigFetchSuccess } from '../../../redux/reducers/additional-fetch/additionalFetchActions';
import {
  AddNewProviderToChannel,
  ListAllProviders,
} from '../../../services/channels.service';

function ChannelsCard({
  heading,
  text,
  icon,
  type,
  data,
  hasMultipleProviders = false,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { additionalFetch } = useSelector(
    ({ additionalFetch }) => ({
      additionalFetch: additionalFetch,
    }),
    shallowEqual
  );

  const selectedClientId = additionalFetch.clientId;
  const selectedClient = additionalFetch.clients.filter(
    item => item.client.id === Number(selectedClientId)
  );

  const cardClassName = `custom_card csm-channels-card ${
    hasMultipleProviders ? 'csm-channels-card__active' : ''
  } csm-df csm-jcspb csm-aic`;

  const handleSwitchChangeCallbackInChannelsPage = async value => {
    const stopExecution = ifNotAdminShowErrorAndStopExecution({
      selectedClient,
    });
    if (stopExecution) return;

    const appId = additionalFetch.appId;

    // if no data, that means no providers in the channel
    // so we do the following,
    // 1. fetch providers
    // 2. add a new provider for this channel
    // 3. it is enabled by default as it added(so no need to worry about that)
    // 4. then simply update the channel data
    if (data === undefined) {
      const [results, error] = await handlePromise(() => ListAllProviders());
      if (error) {
        return openToaster({
          type: 'error',
          title: 'Error',
          message: 'something went wrong',
        });
      }

      // making sure it is a default provider
      const channelProviders = results.filter(result => {
        if (result.channel === type && result.identifier.includes('default')) {
          return true;
        }

        return false;
      });

      const newProviderData = channelProviders[0];

      // if no default Providers,then first element will return undefined
      if (newProviderData === undefined) {
        return openToaster({
          type: 'error',
          title: 'Error',
          message: 'Only Default Providers can be enabled in channels page',
        });
      }

      // if only no config,we can update in channels page
      if (newProviderData.configOptions.length !== 0) {
        return openToaster({
          type: 'error',
          title: 'Error',
          message: 'Provider needs configuration',
        });
      }

      // since this is just channels page, no need for config
      // only default providers can be turned on in channels page
      const data = {
        config: {},
      };

      // we add a provider to the channel
      const [result, error1] = await handlePromise(() =>
        AddNewProviderToChannel({
          appId,
          channel: newProviderData.channel,
          providerIdentifier: newProviderData.identifier,
          data,
        })
      );
      if (error1) return;

      return updateChannelData({ appId, dispatch });
    }

    // if there is data
    handleSwitchChangeInChannelsPage({ appId, data, value, dispatch });
  };

  const optimisedHandleSwitchChange = useDebounce(
    handleSwitchChangeCallbackInChannelsPage
  );

  // if no value, undefined is returned
  const ChannelCardButton = () => {
    return (
      <>
        {type === 'sms' ? (
          <Tag>Coming Soon</Tag>
        ) : type === 'email' || type === 'mobilePush' ? (
          <Tag
            color={
              data === undefined || data.enabled === false
                ? 'default'
                : 'purple'
            }
          >
            {data === undefined || data.enabled === false
              ? 'disabled'
              : data.provider.name}
          </Tag>
        ) : type === 'inApp' || type === 'webPush' ? (
          <Switch
            onChange={optimisedHandleSwitchChange}
            checked={data === undefined ? false : data.enabled}
          />
        ) : null}
      </>
    );
  };

  const handlePagination = () => {
    if (!hasMultipleProviders) return;

    const stopExecution = ifNotAdminShowErrorAndStopExecution({
      selectedClient,
    });
    if (stopExecution) return;

    history.push(`/providers/${type}`);
  };

  return (
    <div onClick={handlePagination} className={cardClassName}>
      <div>
        <div className="csm-df csm-mb-8 csm-aic">
          <img
            className={`csm-w20 ${type === 'mobilePush' ? 'csm-h36' : ''}`}
            src={icon}
            alt="bell icon"
          />
          <h4 className="csm-mb-0 csm-ml-12">{heading}</h4>
        </div>
        <p className="csm-m-0 csm-channels-text">
          {text}{' '}
          <span className="csm-a-link csm-channels-card__active-text">
            {hasMultipleProviders ? '.Click to change provider' : ''}
          </span>
        </p>
      </div>

      <ChannelCardButton />
    </div>
  );
}

export default ChannelsCard;
