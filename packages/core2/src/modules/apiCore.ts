import axios, { Method, AxiosError } from 'axios';

type ApiInstanceOptions = {
  apiKey: string;
  userId: string;
  baseUrl: string;
  deviceId: string;
  userSignature?: string;
  headers?: Record<string, string>;
};

type ApiExecutorParams<T> = Omit<ApiRequestOptions<T>, 'instance'>;

export type SendRequest = ReturnType<typeof createApiExecutor>;

const defaultCacheHeaders = {
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
};

const STATUS_200 = 200;

const statusOk = (status: number) => status === 200;

function createApiInstance(options: ApiInstanceOptions) {
  const {
    apiKey,
    userId,
    deviceId,
    userSignature,
    baseUrl,
    headers = {},
  } = options;

  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'X-ENGAGESPOT-API-KEY': apiKey,
      'X-ENGAGESPOT-USER-ID': userId,
      'X-ENGAGESPOT-DEVICE-ID': deviceId,
      ...(userSignature && {
        'X-ENGAGESPOT-USER-SIGNATURE': userSignature,
      }),
      ...defaultCacheHeaders,
      ...headers,
    },
  });

  return instance;
}

export type ApiRequestOptions<T = any> = {
  instance: ReturnType<typeof createApiInstance>;
  method: Method;
  path: string;
  headers?: Record<string, string>;
  data?: T;
};

export async function executeRequest<TResponse, TData>(
  options: ApiRequestOptions<TData>
) {
  const { instance, method, path, headers, data } = options;

  try {
    const response = await instance.request<TResponse>({
      method,
      url: path,
      data,
      headers,
    });

    if (statusOk(response.status)) return response.data;
  } catch (err) {
    return handleError(err as AxiosError);
  }
}

async function handleError(error: AxiosError) {
  const errorMessage = `Unexpected status code ${error.response?.status}: ${error}, ${error.message}`;
  console.error(errorMessage);
}

export const createApiExecutor = (options: ApiInstanceOptions) => {
  const instance = createApiInstance(options);
  return async <TResponse, TData = any>(options: ApiExecutorParams<TData>) =>
    await executeRequest<TResponse, TData>({ ...options, instance });
};
