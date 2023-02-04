import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import axios, { AxiosInstance, AxiosError } from 'axios';
import { executeRequest, ApiRequestOptions } from '../../src/helpers/apiCore';

describe('executeRequest', () => {
  let instance: AxiosInstance;
  beforeEach(() => {
    instance = axios.create({
      baseURL: 'https://api.example.com',
    });
  });

  it('should make a successful request and return data', async () => {
    instance.request = vi.fn().mockResolvedValue({
      statusText: 'OK',
      data: { message: 'Success' },
    });

    const options: ApiRequestOptions<any> = {
      instance,
      method: 'GET',
      path: '/path',
      headers: {},
      data: {},
    };

    const result = await executeRequest<any, any>(options);
    expect(result).toEqual({ message: 'Success' });
    expect(instance.request).toHaveBeenCalledWith({
      method: 'GET',
      url: '/path',
      headers: {},
      data: {},
    });
  });

  it('should handle an error that is not an AxiosError', async () => {
    let errorRes = {
      message: 'Some error',
      response: { status: 400 },
    };
    instance.request = vi.fn().mockRejectedValue(errorRes);

    const options: ApiRequestOptions<any> = {
      instance,
      method: 'GET',
      path: '/path',
      headers: {},
      data: {},
    };

    try {
      await executeRequest<any, any>(options);
    } catch (err) {
      expect(err.toString()).toEqual(
        'Error: Unexpected status code 400: [object Object], Some error'
      );
    }
  });
});
