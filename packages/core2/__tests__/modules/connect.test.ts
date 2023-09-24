import { connectFactory, ConnectResponse } from '../../src/modules/connect';
import { describe, it, beforeEach, expect, vi } from 'vitest';
// Mocking the dependencies
const sendRequest = vi.fn();
const log = vi.fn();
const browserType = 'someBrowser';

const mockDeps = {
  sendRequest,
  browserType,
  log,
} as any;

const mockResponse: ConnectResponse = {
  unreadCount: 10,
  app: {
    hideBranding: false,
    publicKey: 'testPublicKey',
    enableWebPush: true,
    channels: ['channel1', 'channel2'],
  },
};

describe('connectFactory', () => {
  beforeEach(() => {
    sendRequest.mockReset();
    log.mockReset();
  });

  it('should handle initial connection to api', async () => {
    sendRequest.mockResolvedValue(mockResponse);

    const { connectPromise } = connectFactory(mockDeps);
    const response = await connectPromise;

    expect(response).toEqual(mockResponse);
    expect(sendRequest).toHaveBeenCalledWith({
      method: 'post',
      path: '/sdk/connect',
      data: {
        deviceType: 'browser',
        browserType: browserType,
      },
    });
  });

  it('should return app information', async () => {
    sendRequest.mockResolvedValue(mockResponse);

    const { getAppInfo } = connectFactory(mockDeps);
    const response = await getAppInfo();

    expect(response).toEqual(mockResponse.app);
  });
});
