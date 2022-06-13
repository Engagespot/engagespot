import { Button, Col, Popover, Row, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { RiFileCopyLine } from 'react-icons/ri';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { FeedChangePage } from '../../../redux/reducers/feed/feedActions';
import { ParseError } from '../../../services/parse-api-error.service';
import { Tabs } from 'antd';
import {
  ListAllClients,
  TokenAuthentication,
} from '../../../services/feed.service';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import php from 'react-syntax-highlighter/dist/esm/languages/hljs/php';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
import { UsersChangePage } from '../../../redux/reducers/users/usersActions';
import {
  SetClientsFetchSuccess,
  SetClientId,
} from './../../../redux/reducers/additional-fetch/additionalFetchActions';
import { handlePromise } from '../../../helpers/helpers';
import useDebounce from '../../../hooks/useDebounce';
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('php', php);

export default function Feed() {
  const componentState = {
    selectedItem: null,
    drawerStatus: false,
    app_id: null,
    appName: '',
    showAddAppInput: false,
    curl: `curl --location --request POST 'https://api.engagespot.co/v3/notifications' 
--header 'X-ENGAGESPOT-API-KEY: od9t6x45udt1m3g0nznag' 
--header 'X-ENGAGESPOT-API-SECRET: fjtjb5kjsig21at4h1ijdphd1f31726e48372b0deddb29db5' 
--header 'Content-Type: application/json' 
--data-raw '{ "notification": { "title": "Rose accepted your friend request" }, "recipients": ["jack@example.com"] }'`,

    node: `var axios = require('axios');

axios.post('https://api.engagespot.co/v3/notifications',{
   "notification": {"title": "Rose accepted your friend request"},
   "recipients": ["jack@example.com"]},{
headers:{
   'X-ENGAGESPOT-API-KEY':'YOUR_ENGAGESPOT_API_KEY',
   'X-ENGAGESPOT-API-SECRET':'YOUR_ENGAGESPOT_API_SECRET',
}})`,

    php: `use Illuminate\\Support\\Facades\\Http;

$notifcationSpec = ['notification' => [
   "title" => "Amy assigned task #3456 to you",
   "url" => "https://app.yourdomain.com",
   "icon" => "https://assets.yourdomain.com/images/profile_icon.png"
],
   "recipients" => [
      ["recipient@yourapp.com"]
   ]
];

$response = Http::withHeaders([
   'X-ENGAGESPOT-API-KEY' => 'YOUR_ENGAGESPOT_API_KEY',
   'X-ENGAGESPOT-API-SECRET' => 'YOUR_ENGAGESPOT_API_SECRET'
])->post('https://api.engagespot.co/v3/notifications',$notifcationSpec);
`,

    javascript: `<script type="text/javascript" src="https://cdn.engagespot.co/engagespot-client.min.js"></script>
      <script>
      Engagespot.render('#HTML_Element_ID', {
         apiKey: 'ENGAGESPOT_API_KEY',
         userId: 'youruser@example.com', //Your user's unique identifier/email
      })
      </script>`,

    react: `import React from "react";
import ReactDOM from "react-dom";
import {Engagespot} from "@engagespot/react-component";

const theme = {
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
};

ReactDOM.render(
<Engagespot apiKey="ENGAGESPOT_API_KEY" userId="youruser@example.com" theme = {theme} />,
document.body)
`,

    javascriptSampleCode: `<script type="text/javascript" src="https://cdn.engagespot.co/engagespot-client.min.js"></script>
<script>
Engagespot.render('#HTML_Element_ID', {
   apiKey: 'ENGAGESPOT_API_KEY',
   userId: 'youruser@example.com', //Your user's unique identifier/email
})
</script>`,
  };

  const { TabPane } = Tabs;

  const dispatch = useDispatch();
  const [state, setState] = useState({ ...componentState });
  const [tokenTimer, setTokenTimer] = useState(null);
  const { additionalFetch, feed, users } = useSelector(
    ({ additionalFetch, feed, users }) => ({
      additionalFetch: additionalFetch,
      feed: feed,
      users: users,
    }),
    shallowEqual
  );

  useEffect(() => {
    const getAllClients = async () => {
      let [result, error] = await handlePromise(() => ListAllClients());
      if (error) return;

      const firstClientId = result[0].client.id;
      dispatch(SetClientsFetchSuccess(result));

      if (additionalFetch.clientId === null) {
        dispatch(SetClientId(firstClientId));
      }
    };

    getAllClients();
  }, [dispatch, additionalFetch.clientId]);

  useEffect(() => {
    const getAllUserDetails = () => {
      dispatch(UsersChangePage());
    };

    getAllUserDetails();
  }, [dispatch]);

  useEffect(() => {
    if (additionalFetch.appId !== null) {
      const id = additionalFetch.appId;
      dispatch(FeedChangePage(id));
    }
  }, [dispatch, additionalFetch.appId]);

  useEffect(() => {
    if (feed.error !== null) {
      let err = new ParseError(feed.error);
      err.show();
    }
  }, [feed]);

  function copyToClipboard(text) {
    if (navigator.clipboard) {
      return navigator.clipboard.writeText(text);
    } else if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      return window.clipboardData.setData('Text', text);
    } else if (
      document.queryCommandSupported &&
      document.queryCommandSupported('copy')
    ) {
      var textarea = document.createElement('textarea');
      textarea.textContent = text;
      textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand('copy'); // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn('Copy to clipboard failed.', ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }

  const handleTokenAuth = async value => {
    const appId = feed.data.id;
    const data = {
      enableUserSignatureVerification: value,
    };

    await handlePromise(() => TokenAuthentication(appId, data));

    const id = additionalFetch.appId;
    dispatch(FeedChangePage(id));
  };

  const optimisedHandleTokenAuth = useDebounce(handleTokenAuth);

  const customCodeStyle = {
    fontFamily: 'Source Code Pro',
    fontSize: '13px',
    padding: '18px',
    borderRadius: '7px',
  };

  return (
    <Row gutter={[32, 0]}>
      <Col span={24}>
        <Row align="middle">
          <Col md={12} span={12}>
            <h4>Feed Setup</h4>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="da-mt-32">
        <div className="csm-mb-32">
          <h4 className="csm-mb-15">Api Key</h4>
          <div className="custom_card">
            <div>
              You need this API key in your Javascript SDK and as the value of
              X-ENGAGESPOT-API-KEY header of API Requests
            </div>

            <div className="da-mt-16">
              {feed.data.apiKey ? (
                <>
                  <span className="da-mt-16 copyable-text da-bg-color-primary-4 da-text-color-primary-1 da-mr-12">
                    {feed.data.apiKey}
                  </span>

                  <Popover content={'copied'} placement="right" trigger="click">
                    <Button
                      onClick={() => copyToClipboard(feed.data.apiKey)}
                      type="default"
                      icon={<RiFileCopyLine className="remix-icon" />}
                      size={'middle'}
                    />
                  </Popover>
                </>
              ) : (
                <div className="csm-df csm-aic">
                  <div className="csm-skeleton__active csm-w-300 da-mr-12"></div>
                  <div className="csm-skeleton csm-w-40"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="csm-mb-32">
          <h4 className="csm-mb-15">Api Secret</h4>
          <div className="custom_card">
            <div>
              This is your API Secret Key that you need to use to communicate
              with EngageSpot APIs,via X-ENGAGESPOT-API-SECRET header
            </div>
            <div className="da-mt-16">
              {feed.data.apiSecret ? (
                <>
                  <span className="copyable-text da-bg-color-primary-4 da-text-color-primary-1 da-statistic-icon-bg da-mr-12">
                    {feed.data.apiSecret}
                  </span>

                  <Popover content={'copied'} placement="right" trigger="click">
                    <Button
                      onClick={() => copyToClipboard(feed.data.apiSecret)}
                      type="default"
                      icon={<RiFileCopyLine className="remix-icon" />}
                      size={'middle'}
                    />
                  </Popover>
                </>
              ) : (
                <div className="csm-df csm-aic">
                  <div className="csm-skeleton__active csm-w-300 da-mr-12"></div>
                  <div className="csm-skeleton csm-w-40"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="csm-mb-32">
          <h4 className="csm-mb-15">HMAC Authentication</h4>
          <div className="custom_card">
            <div>
              It is highly recommended to enable HMAC Authentication to ensure
              your users' notifications can be see only by themselves. Please
              note that, enabling this setting without configuring it properly
              in your code will break the integration. Read
              <a
                href="https://documentation.engagespot.co/docs/HMAC-authentication/enabling-HMAC-authentication"
                target="_blank"
                rel="noreferrer"
              >
                {' How to turn on HMAC Authentication '}
              </a>
              before enabling this.
            </div>
            <div className="da-mt-16">
              <Switch
                onChange={value => optimisedHandleTokenAuth(value)}
                checked={feed.data.enableUserSignatureVerification}
              />
            </div>
          </div>
        </div>

        <div className="csm-mb-32">
          <h4 className="csm-mb-15">Notification Feed UI Kit for Your App</h4>
          <div className="custom_card">
            <div>
              Engagespot provides a ready-to-use notification feed UI Kit for
              your app. UIKit is available for Javascript and React.js apps.{' '}
              <a
                target="_blank"
                href="https://documentation.engagespot.co/docs/introduction/quick-setup"
                rel="noreferrer"
              >
                Learn More
              </a>
            </div>
            <div className="da-mt-16">
              <Tabs type="card">
                <TabPane tab="Javascript" key="1">
                  <div className="custom_code_board">
                    <Popover
                      className="custom_code_board-copy"
                      content={'copied'}
                      placement="right"
                      trigger="click"
                    >
                      <Button
                        onClick={() =>
                          copyToClipboard(state.javascriptSampleCode)
                        }
                        type="default"
                        icon={<RiFileCopyLine className="remix-icon" />}
                        size={'middle'}
                      />
                    </Popover>
                    <SyntaxHighlighter
                      customStyle={customCodeStyle}
                      language="javascript"
                      style={atomOneDark}
                      showLineNumbers={true}
                    >
                      {state.javascriptSampleCode}
                    </SyntaxHighlighter>
                  </div>
                </TabPane>

                <TabPane tab="React" key="2">
                  <div className="custom_code_board">
                    <Popover
                      className="custom_code_board-copy"
                      content={'copied'}
                      placement="right"
                      trigger="click"
                    >
                      <Button
                        onClick={() => copyToClipboard(state.react)}
                        type="default"
                        icon={<RiFileCopyLine className="remix-icon" />}
                        size={'middle'}
                      />
                    </Popover>
                    <SyntaxHighlighter
                      customStyle={customCodeStyle}
                      language="javascript"
                      style={atomOneDark}
                      showLineNumbers={true}
                    >
                      {state.react}
                    </SyntaxHighlighter>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="csm-mb-32">
          <h4 className="csm-mb-15">Sending a Notification</h4>
          <div className="custom_card">
            <div>
              You can use Engagespot{' '}
              <a
                target="_blank"
                href="https://documentation.engagespot.co/docs/rest-api"
                rel="noreferrer"
              >
                REST API
              </a>{' '}
              or an SDK of your preferred language to send notifications
              programatically from your application code.
            </div>
            <div className="da-mt-16">
              <Tabs type="card">
                <TabPane tab="curl" key="1">
                  <div className="custom_code_board">
                    <Popover
                      className="custom_code_board-copy"
                      content={'copied'}
                      placement="right"
                      trigger="click"
                    >
                      <Button
                        onClick={() => copyToClipboard(state.curl)}
                        type="default"
                        icon={<RiFileCopyLine className="remix-icon" />}
                        size={'middle'}
                      />
                    </Popover>
                    <SyntaxHighlighter
                      customStyle={customCodeStyle}
                      language="bash"
                      style={atomOneDark}
                      showLineNumbers={true}
                    >
                      {state.curl}
                    </SyntaxHighlighter>
                  </div>
                </TabPane>

                <TabPane tab="Node" key="2">
                  <div className="custom_code_board">
                    <Popover
                      className="custom_code_board-copy"
                      content={'copied'}
                      placement="right"
                      trigger="click"
                    >
                      <Button
                        onClick={() => copyToClipboard(state.node)}
                        type="default"
                        icon={<RiFileCopyLine className="remix-icon" />}
                        size={'middle'}
                      />
                    </Popover>
                    <SyntaxHighlighter
                      customStyle={customCodeStyle}
                      language="javascript"
                      style={atomOneDark}
                      showLineNumbers={true}
                    >
                      {state.node}
                    </SyntaxHighlighter>
                  </div>
                </TabPane>

                <TabPane tab="PHP Laravel" key="3">
                  <div className="custom_code_board">
                    <Popover
                      className="custom_code_board-copy"
                      content={'copied'}
                      placement="right"
                      trigger="click"
                    >
                      <Button
                        onClick={() => copyToClipboard(state.php)}
                        type="default"
                        icon={<RiFileCopyLine className="remix-icon" />}
                        size={'middle'}
                      />
                    </Popover>
                    <SyntaxHighlighter
                      customStyle={customCodeStyle}
                      language="php"
                      style={atomOneDark}
                      showLineNumbers={true}
                    >
                      {state.php}
                    </SyntaxHighlighter>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
