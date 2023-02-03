import { connect } from './connect';
import Defaults from './defaults';
import { createApiExecutor } from './helpers/apiCore';
import { handleError, validateIncomingArgs } from './helpers/errorHandler';
import {
  WebpushService,
  getServiceWorkerRegistration,
} from './modules/webPush';
import notification from './notification';
import { getOrCreateDeviceId } from './utils/device';
import { createLogger } from './utils/logger';

export type InstanceOptions = {
  // unique identifier for the user
  userId: string;

  // API key for accessing the services
  apiKey: string;

  // signature for the user
  userSignature?: string;

  // flag to allow non-HTTPS web push
  allowNonHttpsWebPush?: boolean;

  // service worker registration object
  serviceWorkerRegistration?: ServiceWorkerRegistration;

  // endpoint URL to override default
  endPointOverride?: string;

  // flag to enable debug mode
  debug?: boolean;
};

export type Deps = {
  log: ReturnType<typeof createLogger>;
  sendRequest: ReturnType<typeof createApiExecutor>;
  options: InstanceOptions;
};

/**
 *
 *
 * @export
 * @param {InstanceOptions} options
 * @return {*}
 */
export async function createInstance(options: InstanceOptions) {
  validateIncomingArgs(options);

  const { apiKey, userId, userSignature, debug = false } = options;
  const baseUrl = options.endPointOverride || Defaults.apiHost;
  const log = createLogger(debug);
  log('Creating Engagespot instance with options: ', options);

  const sendRequest = createApiExecutor({
    apiKey,
    userId,
    userSignature,
    baseUrl,
  });

  const deps = { log, sendRequest, options };

  const deviceId = getOrCreateDeviceId();
  const response = await connect({ ...deps, deviceId });

  if (!response) {
    return;
  }

  const {
    unreadCount,
    app: { hideBranding, publicKey, enableWebPush, channels = [] },
  } = response;

  log('Connected API Response: ', response);

  //Register Service Worker
  if (enableWebPush) {
    const webpushService = await WebpushService({ ...deps });
  }

  return {
    notification: {},
  };
}
