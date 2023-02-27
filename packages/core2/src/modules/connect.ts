import { Deps, Slice } from '../createInstance';

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

export type ConnectSlice = {
  connect: () => Promise<void>;
  app: {
    hideBranding: boolean;
    publicKey: string;
    enableWebPush: boolean;
    channels: string[];
  };
};

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

  const connectSlice: Slice<ConnectSlice> = set => ({
    app: {} as ConnectSlice['app'],
    connect: async () => {
      const response = await connectPromise;
      if (!response) {
        log('No response');
        return;
      }
      const { unreadCount, app } = response;
      set({
        app,
      });
    },
  });

  const returnValues = { connectPromise, connectSlice, getAppInfo };

  return {
    ...returnValues,
    publicApi: {
      getAppInfo,
    },
  };
}
