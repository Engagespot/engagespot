import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Bell from '../../../assets/images/pages/channels/bell.png';
import Email from '../../../assets/images/pages/channels/email.png';
import Sms from '../../../assets/images/pages/channels/sms.png';
import WebPush from '../../../assets/images/pages/channels/web-push.png';
import MobilePush from '../../../assets/images/pages/channels/mobile-push.png';
import { handlePromise } from '../../../helpers/helpers';
import { SetChannelsFetchSuccess } from '../../../redux/reducers/additional-fetch/additionalFetchActions';
import { ListChannels } from '../../../services/channels.service';
import ChannelsCard from '../../components/custom/channelsCard';

export default function Channels() {
  const dispatch = useDispatch();

  const { additionalFetch } = useSelector(
    ({ additionalFetch }) => ({
      additionalFetch: additionalFetch,
    }),
    shallowEqual
  );
  //console.log('inside effect', additionalFetch)

  useEffect(() => {
    const fetchChannels = async () => {
      const appId = additionalFetch.appId;
      const [result, error] = await handlePromise(() => ListChannels(appId));
      if (error) return;
      dispatch(SetChannelsFetchSuccess(result));
    };

    fetchChannels();
  }, [dispatch, additionalFetch.appId]);

  // by default, channels is an empty array
  // since filter it returns array, so we need to take first item in array
  // if no value, undefined is returned
  ////console.log('additional', additionalFetch)
  const channels = additionalFetch.channels || [];
  const inAppData = channels.filter(item => item.channel === 'inApp');
  const webPushData = channels.filter(item => item.channel === 'webPush');
  const emailData = channels.filter(item => item.channel === 'email');
  const mobilePushData = channels.filter(item => item.channel === 'mobilePush');
  const smsData = [{}];

  return (
    <Row gutter={[32, 0]}>
      <Col span={24}>
        <Row align="middle">
          <Col span={24}>
            <h4>Channels</h4>
            <p>
              You can configure multiple channels for delivering notification to
              your users. Channels are provided built-in or third party.
            </p>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="da-mt-32">
        <div className="csm-mb-32">
          {/* channelsCard type is important */}
          <ChannelsCard
            type="inApp"
            heading={'In-App'}
            text={'Deliver notification to your users In-App in realtime'}
            icon={Bell}
            data={inAppData[0]}
          />
          {/* channelsCard type is important */}
          <ChannelsCard
            type="webPush"
            heading={'Web Push'}
            text={'Deliver native browser push notifications to your users'}
            icon={WebPush}
            data={webPushData[0]}
          />
          {/* channelsCard type is important */}
          <ChannelsCard
            type="email"
            heading={'Email'}
            text={'Deliver notifications as emails to your users'}
            icon={Email}
            data={emailData[0]}
            hasMultipleProviders={true}
          />
          {/* channelsCard type is important */}
          <ChannelsCard
            type="mobilePush"
            heading={'MobilePush'}
            text={'Deliver native mobile push notifications to your users'}
            icon={MobilePush}
            data={mobilePushData[0]}
            hasMultipleProviders={true}
          />
          {/* channelsCard type is important */}
          <ChannelsCard
            type="sms"
            heading={'SMS'}
            text={'Deliver notifications via sms'}
            icon={Sms}
            data={smsData[0]}
          />
        </div>
      </Col>
    </Row>
  );
}
