import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { createLogger } from '../../src/utils/logger';

import { connect } from '../../src/modules/connect';

describe('connect', () => {
  const log = createLogger(false);
  const options = {} as any;
  const deps = { log, options } as any;
  test('should send a POST request to the correct path with the correct data', async () => {
    const sendRequest = vi.fn().mockResolvedValue({});

    await connect({ sendRequest, log, options });

    expect(sendRequest).toHaveBeenCalledWith({
      method: 'post',
      path: '/sdk/connect',
      data: {
        deviceType: 'browser',
        browserType: 'other',
      },
    });
  });

  test.skip('should return the response from the API', async () => {
    const sendRequest = vi.fn().mockResolvedValue({ foo: 'bar' });

    const response = await connect({ sendRequest, ...deps });

    expect(response).toEqual({ foo: 'bar' });
  });
});
