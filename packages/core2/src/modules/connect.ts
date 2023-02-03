import { Deps } from '../createInstance';
import { findBrowser } from '../utils/platform';

type ConnectParams = {} & Deps;

type ConnectBody = {
  deviceType: string;
  browserType: string;
};

type ConnectResponse = {
  unreadCount: number;
  app: {
    hideBranding: boolean;
    publicKey: string;
    enableWebPush: boolean;
    channels: string[];
  };
};

export const connect = async ({ ...deps }: ConnectParams) => {
  const { sendRequest } = deps;

  const response = await sendRequest<ConnectResponse, ConnectBody>({
    method: 'post',
    path: '/sdk/connect',
    data: {
      deviceType: 'browser',
      browserType: findBrowser(),
    },
  });

  return response;
};

//   //Connect to RTM Server for realtime notifications
//   try {
//     realtimeConnect();
//   } catch (error) {
//     throw error;
//   }

//   if (!isNative) {
//     //Listen for WebPushPermissionChange events
//     listenForWebPushPermissionChanges();
//   }

//   //If all fine, then return connected instance state
//   instanceState = 'connected';
//   return this;
// };
