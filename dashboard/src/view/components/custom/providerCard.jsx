import { Button, Switch, Tooltip } from 'antd';
import React from 'react';
import { EditSquare } from 'react-iconly';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { handleError, openToaster } from '../../../helpers/helpers';
import useDebounce from '../../../hooks/useDebounce';
import {
  SetGlobalLoader,
  SetProvidersFetchSuccess,
} from '../../../redux/reducers/additional-fetch/additionalFetchActions';
import {
  AddNewProviderToChannel,
  DisableProvider,
  EnableProvider,
  ListInstalledProvidersInChannel,
} from '../../../services/channels.service';

function ProviderCard({
  data,
  installed = false,
  providerModalShow,
  setSelectedProviderDetails,
  form,
  fetchAllProviders,
}) {
  // ******* for future reference ********
  // installed data has provider key,most of the values are inside it
  // available data has no provider key and can we directly use values

  const { additionalFetch } = useSelector(
    ({ additionalFetch }) => ({
      additionalFetch: additionalFetch,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const appId = additionalFetch.appId;
  const channel = data.channel;
  const availableProviders = additionalFetch.providers.available;

  const updateProviderData = async () => {
    try {
      const allInstalledProvidersInChannel =
        await ListInstalledProvidersInChannel({
          appId,
          channel,
        });

      dispatch(
        SetProvidersFetchSuccess({
          installed: allInstalledProvidersInChannel,
          available: availableProviders || [],
        })
      );
    } catch (e) {
      handleError(e);
    }
  };

  const handleSwitchChangeCallbackInProviderPage = async value => {
    const providerIdentifier = data.provider.identifier;

    try {
      if (value === true) {
        await EnableProvider({ appId, channel, providerIdentifier });
        updateProviderData();
        return openToaster({
          type: 'success',
          title: 'Success',
          message: `${data.provider.name} enabled successfully`,
        });
      } else {
        await DisableProvider({ appId, channel, providerIdentifier });
        updateProviderData();
        return openToaster({
          type: 'success',
          title: 'Success',
          message: `${data.provider.name} disabled successfully`,
        });
      }
    } catch (e) {
      handleError(e);
    }
  };

  const optimisedHandleSwitchChange = useDebounce(
    handleSwitchChangeCallbackInProviderPage
  );

  const showProviderModalAndAddProviderIfNoConfigForAvailabeProviders =
    async () => {
      if (installed) return;

      const providerIdentifier = data.identifier;

      // no config required, we can directly add provider
      if (data.configOptions.length === 0) {
        dispatch(SetGlobalLoader(true));

        // since no config
        const configData = {
          config: {},
        };

        try {
          await AddNewProviderToChannel({
            appId,
            channel,
            providerIdentifier,
            data: configData,
          });

          fetchAllProviders();
        } catch (e) {
          handleError(e);
        }

        // close loader after 0.8 seconds
        return setTimeout(() => {
          dispatch(SetGlobalLoader(false));
        }, 800);
      }

      // if there is config options

      // data to show in emailProvider Page
      setSelectedProviderDetails(data);
      providerModalShow();
    };

  const showProviderModalForInstalledProviders = () => {
    // double checking to make sure no config
    if (data.provider.configOptions.length === 0) return;

    // data to show in emailProvider Page
    setSelectedProviderDetails(data);

    // repoppulating values
    data.configs.forEach(item => {
      return form.setFields([
        {
          name: item.config,
          value: item.value,
        },
      ]);
    });

    providerModalShow();
  };

  return (
    <>
      {data && (
        <div
          onClick={
            showProviderModalAndAddProviderIfNoConfigForAvailabeProviders
          }
          className={`csm-provider-card ${
            installed ? '' : 'csm-hover-blue-shadow'
          }`}
        >
          <img
            className="csm-70wh"
            src={installed ? data.provider.icon : data.icon}
            alt=""
          />
          <h3 className="csm-provider-card__heading">
            {installed ? data.provider.name : data.name}
          </h3>
          <p className="csm-provider-card__text">
            {installed ? data.provider.description : data.description}
          </p>
          {installed && (
            <Switch
              onChange={optimisedHandleSwitchChange}
              checked={data.enabled}
            />
          )}

          {installed && data.provider.configOptions.length !== 0 && (
            <Tooltip
              className="csm-provider-card__edit"
              placement="bottom"
              title={'configure provider'}
            >
              <Button
                onClick={showProviderModalForInstalledProviders}
                shape="circle"
                icon={<EditSquare set="curved" />}
              />
            </Tooltip>
          )}
        </div>
      )}
    </>
  );
}

export default ProviderCard;
