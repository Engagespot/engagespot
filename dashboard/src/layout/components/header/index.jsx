import { PlusOutlined } from '@ant-design/icons';
import { Engagespot } from '@engagespot/react-component';
import { Col, Divider, Form, Input, Layout, Row, Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  SetAppId,
  SetAppsFetchSuccess,
  SetGlobalLoader,
} from '../../../redux/reducers/additional-fetch/additionalFetchActions';
import { FeedChangePage } from '../../../redux/reducers/feed/feedActions';
import { AddApps } from '../../../services/feed.service';
import { ParseError } from '../../../services/parse-api-error.service';
import { ListAllApps } from '../../../services/feed.service';
import HeaderText from './HeaderText';
import HeaderUser from './HeaderUser';
import { handlePromise } from '../../../helpers/helpers';

const { Header } = Layout;

export default function MenuHeader(props) {
  const { setVisible } = props;
  const componentState = {
    selectedItem: null,
    drawerStatus: false,
    app_id: null,
    appName: '',
    showAddAppInput: false,
  };

  const dispatch = useDispatch();
  const [state, setState] = useState({ ...componentState });
  const { users, additionalFetch, feed } = useSelector(
    ({ users, additionalFetch, feed }) => ({
      users: users,
      additionalFetch: additionalFetch,
      feed: feed,
    }),
    shallowEqual
  );
  const [form] = Form.useForm();

  const [searchHeader, setSearchHeader] = useState(false);

  // Redux
  const customise = useSelector(state => state.customise);

  const handleSelect = id => {
    // start loader
    dispatch(SetGlobalLoader(true));

    const _state = {
      ...state,
      app_id: id,
    };
    setState({ ..._state });
    dispatch(SetAppId(id));
    dispatch(FeedChangePage(id));

    // close loader after 0.8 seconds
    setTimeout(() => {
      dispatch(SetGlobalLoader(false));
    }, 700);
  };

  const showInput = () => {
    setState({ ...state, showAddAppInput: true });
  };

  const hideInput = () => {
    setState({ ...state, showAddAppInput: false, appName: '' });
  };

  const inputChange = e => {
    setState({ ...state, appName: e.target.value });
  };

  const inputSubmit = async e => {
    if (e.code !== 'Enter') return;

    const clientId = additionalFetch.clientId;
    if (!clientId) return;

    const appName = {
      name: state.appName,
    };

    let [selectedAppDetails, error] = await handlePromise(() =>
      AddApps(clientId, appName)
    );
    let [allUserApps, error2] = await handlePromise(() =>
      ListAllApps(clientId)
    );
    if (error || error2) return;

    const selectedAppId = selectedAppDetails.id;
    dispatch(SetAppsFetchSuccess(allUserApps));
    dispatch(SetAppId(selectedAppId));
    form.resetFields();
    form.setFieldsValue({ newAppId: selectedAppId });
  };

  useEffect(() => {
    const FetchUserAppsOnInitialRender = async () => {
      const authToken = localStorage.getItem('access_token');
      const clientId = additionalFetch.clientId;

      if (!authToken) return;
      if (!clientId) return;

      if (additionalFetch.appId === null) {
        let [result, error] = await handlePromise(() => ListAllApps(clientId));
        if (error) return;

        const firstAppId = result[0].id;
        dispatch(SetAppsFetchSuccess(result));
        dispatch(SetAppId(firstAppId));
      }
    };

    FetchUserAppsOnInitialRender();
  }, [dispatch, additionalFetch.appId, additionalFetch.clientId]);

  useEffect(() => {
    if (additionalFetch.appId !== null) {
      form.resetFields();
      form.setFieldsValue({ newAppId: additionalFetch.appId });
    }
  }, [form, additionalFetch.appId]);

  // Children
  const headerChildren = () => {
    return (
      <Row
        className="da-w-100 da-position-relative"
        align="middle"
        justify="space-between"
      >
        {!searchHeader && <HeaderText />}

        <Col md={6} span={6}>
          <Form form={form}>
            <Form.Item style={{ marginBottom: '0px' }} name="newAppId">
              <Select
                onBlur={hideInput}
                style={{ width: '100%' }}
                id="user-type-select"
                onSelect={value => handleSelect(value)}
                dropdownRender={menu => (
                  <div>
                    {menu}
                    <Divider style={{ margin: '4px 0' }} />
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        padding: 8,
                      }}
                    >
                      {state.showAddAppInput ? (
                        <Input
                          style={{ flex: 'auto' }}
                          value={state.appName}
                          autoFocus
                          placeholder="App Name"
                          onKeyDown={e => inputSubmit(e)}
                          onChange={e => inputChange(e)}
                        />
                      ) : (
                        <a
                          href="##"
                          style={{
                            flex: 'none',
                            padding: '8px',
                            display: 'block',
                            cursor: 'pointer',
                            width: '100%',
                          }}
                          onClick={showInput}
                        >
                          <PlusOutlined /> Add App
                        </a>
                      )}
                    </div>
                  </div>
                )}
              >
                {additionalFetch.user_apps &&
                  additionalFetch.user_apps.length !== 0 &&
                  additionalFetch.user_apps.map((app, index) => (
                    <Select.Option value={app.id} key={'user-app' + index}>
                      {app.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Form>
        </Col>

        <Col>
          <Row align="middle">
            {Object.keys(users.items).length !== 0 &&
              users?.items?.clientUser?.email && (
                <Engagespot
                  apiKey={import.meta.env.VITE_REACT_APP_ENGAGESPOT_API_KEY}
                  userId={users.items.clientUser.email}
                  endPointOverride={
                    import.meta.env.VITE_REACT_APP_ENGAGESPOT_ENDPOINT_OVERRIDE
                  }
                  theme={{
                    notificationButton: {
                      iconFill: '#5350f6',
                    },
                    colors: {
                      brandingPrimary: '#5350f6',
                      colorSecondary: '#ecebfa',
                    },
                    feedItem: {
                      hoverBackground: '#ecebfa',
                    },
                    dropdown: {
                      hoverBackground: '#ecebfa',
                      menuItemHoverBackground: '#ecebfa',
                    },
                  }}
                ></Engagespot>
              )}

            <HeaderUser />
          </Row>
        </Col>
      </Row>
    );
  };

  return (
    <Header>
      <Row justify="center" className="da-w-100">
        {customise.contentWidth == 'full' && (
          <Col span={24}>{headerChildren()}</Col>
        )}

        {customise.contentWidth == 'boxed' && (
          <Col xxl={20} xl={22} span={24}>
            {headerChildren()}
          </Col>
        )}
      </Row>
    </Header>
  );
}
