import EngagespotCore, { Options, PermissionState } from '@engagespot/core';
import { useEffect } from 'react';

export default function CoreExample() {
  useEffect(() => {
    const engagespotClient = new EngagespotCore('shiynklpz18l3ktqyy6d9a', {
      userId: 'anand',
      endPointOverride: 'http://api.staging.engagespot.co/v3/',
      enableNonHttpsWebPush: true,
      debug: true,
    });

    //window.engagespot =engagespotClient;

    engagespotClient.onNotificationReceive(notification => {
      console.log('New notification received');
      console.log(notification);
    });
  }, []);

  return <></>;
}
