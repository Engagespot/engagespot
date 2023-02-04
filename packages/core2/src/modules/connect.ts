import { Deps } from '../createInstance';

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
  const { sendRequest, browserType } = deps;

  const response = await sendRequest<ConnectResponse, ConnectBody>({
    method: 'post',
    path: '/sdk/connect',
    data: {
      deviceType: 'browser',
      browserType: browserType,
    },
  });

  return response;
};
