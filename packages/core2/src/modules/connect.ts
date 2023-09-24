import { Deps } from '../createInstance';

type ConnectParams = {} & Deps;

type ConnectBody = {
  deviceType: string;
  browserType: string;
};

export type ConnectResponse = {
  unreadCount: number;
  app: {
    hideBranding: boolean;
    publicKey: string;
    enableWebPush: boolean;
    channels: string[];
  };
};

/**
 *
 *
 * Handles the initial connection to engagespot api
 * @param {ConnectParams} {
 *   sendRequest,
 *   browserType,
 *   log,
 * }
 * @return {*}
 */
export function connectFactory({
  sendRequest,
  browserType,
  log,
}: ConnectParams) {
  const connect = async () => {
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

  const connectPromise = connect().then(res => {
    if (!res) return false;
    log('Connected: ', res);
    return res;
  });

  const getAppInfo = async () => {
    const response = await connectPromise;
    if (!response) return;
    const { app } = response;
    return app;
  };

  const returnValues = { connectPromise, getAppInfo };

  return {
    ...returnValues,
    publicApi: {
      getAppInfo,
    },
  };
}
