import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  SetProvidersFetchSuccess,
  SetChannelForProviderConfigFetchSuccess,
} from '../../../redux/reducers/additional-fetch/additionalFetchActions';
import { useParams } from 'react-router';
import {
  AddNewProviderToChannel,
  EditProviderConfigurationInChannel,
  ListAllProviders,
  ListInstalledProvidersInChannel,
} from '../../../services/channels.service';
import ProviderCard from '../../components/custom/providerCard';
import { SetGlobalLoader } from '../../../redux/reducers/additional-fetch/additionalFetchActions';
import { Modal } from 'antd';
import { useState, useCallback } from 'react';
import {
  handleError,
  handlePromise,
  ifNotAdminShowErrorAndStopExecution,
  openToaster,
} from '../../../helpers/helpers';
import { Form } from 'antd';
import { RiCloseFill } from 'react-icons/ri';
import { Button } from 'antd';
import { Input } from 'antd';
import { Spin } from 'antd';
import { useHistory } from 'react-router-dom';

export default function Providers() {
  const { additionalFetch } = useSelector(
    ({ additionalFetch }) => ({
      additionalFetch: additionalFetch,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const [providerModalVisible, setProviderModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const appId = additionalFetch.appId;
  let { selectedChannel } = useParams();
  const selectedClientId = additionalFetch.clientId;
  const selectedClient = additionalFetch.clients.filter(
    item => item.client.id === Number(selectedClientId)
  );

  const history = useHistory();

  const fetchAllProviders = useCallback(async () => {
    const appId = additionalFetch.appId;

    const [results, error] = await handlePromise(() => ListAllProviders());
    if (error) return;

    const [allInstalledProvidersInChannel, error1] = await handlePromise(() =>
      ListInstalledProvidersInChannel({
        appId,
        channel: selectedChannel,
      })
    );
    if (error1) return;

    const providersForSelectedChannel = results.filter(
      result => result.channel === selectedChannel
    );

    // these are not installed yet
    const availableProviders = providersForSelectedChannel.filter(providers => {
      const isAlreadyInstalled = allInstalledProvidersInChannel.find(
        item => item.provider.identifier === providers.identifier
      );

      if (isAlreadyInstalled) return false;
      return true;
    });

    dispatch(
      SetProvidersFetchSuccess({
        installed: allInstalledProvidersInChannel,
        available: availableProviders,
      })
    );
  }, [dispatch, additionalFetch.appId, selectedChannel]);

  useEffect(() => {
    const stopExecution = ifNotAdminShowErrorAndStopExecution({
      selectedClient,
    });
    if (stopExecution) return history.push('/');
  }, [selectedClient, history]);

  useEffect(() => {
    const channelsHavingMultipleProviders = ['email', 'mobilePush'];

    if (!channelsHavingMultipleProviders.includes(selectedChannel)) {
      history.push('/channels');
      return openToaster({
        type: 'error',
        title: 'Error',
        message: 'This channel only has a default provider',
      });
    }
  }, [selectedChannel, history]);

  useEffect(() => {
    fetchAllProviders();
  }, [fetchAllProviders]);

  useEffect(() => {
    const showLoadingSpinnerIfNoDataOrChannelHasBeenChanged = () => {
      if (additionalFetch.channelForProviderConfig !== selectedChannel) {
        dispatch(SetGlobalLoader(true));

        // close loader after 0.8 seconds
        setTimeout(() => {
          dispatch(SetGlobalLoader(false));
        }, 800);
      }
    };

    showLoadingSpinnerIfNoDataOrChannelHasBeenChanged();
  }, [additionalFetch.channelForProviderConfig, selectedChannel, dispatch]);

  useEffect(() => {
    return () => {
      const setCurrentChannelForComparisonOnNextPageVisit = () => {
        dispatch(SetChannelForProviderConfigFetchSuccess(selectedChannel));
      };

      setCurrentChannelForComparisonOnNextPageVisit();
    };
  }, [dispatch, selectedChannel]);

  const providerModalShow = () => {
    setProviderModalVisible(true);
  };

  const providerModalCancel = () => {
    setProviderModalVisible(false);
    form.resetFields();
  };

  const handleSubmit = async values => {
    setLoading(true);
    const data = {
      config: {
        ...values,
      },
    };

    try {
      // if provider key, then coming from already installed provider
      if (selectedProviderDetails.provider) {
        await EditProviderConfigurationInChannel({
          appId,
          channel: selectedProviderDetails.channel,
          providerIdentifier: selectedProviderDetails.provider.identifier,
          data: values,
        });
      } else {
        await AddNewProviderToChannel({
          appId,
          channel: selectedProviderDetails.channel,
          providerIdentifier: selectedProviderDetails.identifier,
          data,
        });
      }

      fetchAllProviders();
    } catch (e) {
      handleError(e);
    }

    setLoading(false);
    providerModalCancel();
  };

  const [selectedProviderDetails, setSelectedProviderDetails] = useState({});

  return (
    <>
      {Object.keys(selectedProviderDetails).length !== 0 && (
        <Modal
          title={'Provider Configuration'}
          width={
            selectedProviderDetails.provider
              ? selectedProviderDetails.provider.configOptions.length > 4
                ? 650
                : 420
              : selectedProviderDetails.configOptions.length > 4
              ? 650
              : 420
          }
          centered
          visible={providerModalVisible}
          onCancel={providerModalCancel}
          footer={null}
          closeIcon={
            <RiCloseFill
              className="remix-icon text-color-black-100"
              size={24}
            />
          }
        >
          <Form
            onFinish={handleSubmit}
            form={form}
            layout="vertical"
            name="basic"
            initialValues={{}}
          >
            <>
              <div className="csm-provider-modal-info">
                Read
                <a
                  href="https://documentation.engagespot.co/docs/channels/what-are-providers"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' docs '}
                </a>
                to learn more about Providers and their configurations
              </div>

              <div
                className={
                  selectedProviderDetails.provider
                    ? selectedProviderDetails.provider.configOptions.length > 4
                      ? 'csm-gtc2'
                      : ''
                    : selectedProviderDetails.configOptions.length > 4
                    ? 'csm-gtc2'
                    : ''
                }
              >
                {selectedProviderDetails.provider
                  ? selectedProviderDetails.provider.configOptions.map(item => {
                      return (
                        <div key={item.id} className="da-pr-sm-0 da-pr-16">
                          <Form.Item
                            label={
                              <span className="da-input-label da-text-color-black-100 da-text-color-dark-0">
                                {item.config} :
                              </span>
                            }
                            name={item.config}
                            rules={[
                              {
                                required: item.required,
                                message: 'Required Field!',
                              },
                            ]}
                          >
                            <Input placeholder="enter values" />
                          </Form.Item>
                        </div>
                      );
                    })
                  : selectedProviderDetails.configOptions.map(item => {
                      return (
                        <div key={item.id} className="da-pr-sm-0 da-pr-16">
                          <Form.Item
                            label={
                              <span className="da-input-label da-text-color-black-100 da-text-color-dark-0">
                                {item.config} :
                              </span>
                            }
                            name={item.config}
                            rules={[
                              {
                                required: item.required,
                                message: 'Required Field!',
                              },
                            ]}
                          >
                            <Input placeholder="enter values" />
                          </Form.Item>
                        </div>
                      );
                    })}
              </div>
            </>

            <Row>
              <Col md={12} span={24} className="da-pr-sm-0 da-pr-12">
                <Button
                  disabled={loading}
                  block
                  type="primary"
                  htmlType="submit"
                >
                  {loading ? <Spin /> : 'Save'}
                </Button>
              </Col>

              <Col
                md={12}
                span={24}
                className="da-mt-sm-12 da-pl-sm-0 da-pl-12"
              >
                <Button block onClick={providerModalCancel}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal>
      )}

      <Row gutter={[32, 0]}>
        <Col span={24}>
          <Row align="middle">
            <Col span={24}>
              <h4 className="csm-capitalise">
                {selectedChannel} Channel Providers
              </h4>
            </Col>
          </Row>
        </Col>

        <Col span={24} className="da-mt-32">
          {additionalFetch.providers?.installed.length !== 0 && (
            <>
              <h4>Installed Providers</h4>
              <div className="csm-provider-card__container">
                {additionalFetch.providers?.installed.map(item => {
                  return (
                    <ProviderCard
                      providerModalShow={providerModalShow}
                      installed={true}
                      setSelectedProviderDetails={setSelectedProviderDetails}
                      fetchAllProviders={fetchAllProviders}
                      form={form}
                      data={item}
                      key={item.id}
                    />
                  );
                })}
              </div>
            </>
          )}
        </Col>

        <Col span={24} className="da-mt-32 da-mb-32">
          {additionalFetch.providers?.available.length !== 0 && (
            <>
              <h4>Available Providers</h4>
              <div className="csm-provider-card__container">
                {additionalFetch.providers?.available.map(item => {
                  return (
                    <ProviderCard
                      setSelectedProviderDetails={setSelectedProviderDetails}
                      providerModalShow={providerModalShow}
                      fetchAllProviders={fetchAllProviders}
                      data={item}
                      form={form}
                      key={item.id}
                    />
                  );
                })}
              </div>
            </>
          )}
        </Col>
      </Row>
    </>
  );
}
