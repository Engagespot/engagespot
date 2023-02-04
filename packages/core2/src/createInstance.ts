import { connect } from './modules/connect';
import { defaults } from './helpers/defaults';
import { createApiExecutor } from './helpers/apiCore';
import { validateIncomingArgs } from './helpers/errorHandler';
import { WebPushFactory } from './modules/webPushFactory';
import { EventManager } from './modules/eventManager';
import { initiateRealtimeConnection } from './modules/realtimeClient';
import { getOrCreateDeviceId } from './utils/device';
import { createLogger } from './utils/logger';
import { findBrowser } from './utils/platform';
import { preferencesFactory } from './modules/preferences';

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

  // function to transform the notification
  transformNotification?: (notification: any) => any;
};

export type Deps = {
  log: ReturnType<typeof createLogger>;
  sendRequest: ReturnType<typeof createApiExecutor>;
  options: InstanceOptions;
  browserType: string;
  eventManager: ReturnType<typeof EventManager>;
};

/**
 *
 *
 * @export
 * @param {InstanceOptions} options
 * @return {*}
 */
export async function createInstance<TData>(options: InstanceOptions) {
  validateIncomingArgs(options);

  const { apiKey, userId, userSignature, debug = false } = options;
  const baseUrl = options.endPointOverride ?? defaults.apiHost;
  const log = createLogger(debug);
  log('Creating Engagespot instance with options: ', options);

  const deviceId = getOrCreateDeviceId();
  const browserType = findBrowser();

  const sendRequest = createApiExecutor({
    apiKey,
    userId,
    userSignature,
    baseUrl,
    deviceId,
  });

  const eventManager = EventManager();

  const deps = { log, sendRequest, options, browserType, eventManager };

  const response = await connect({ ...deps });

  if (!response) {
    log('No response');
    return;
  }

  const {
    unreadCount,
    app: { hideBranding, publicKey, enableWebPush, channels = [] },
  } = response;

  log('Connected API Response: ', response);

  //Register Service Worker and subscribe to web push
  const webpush =
    enableWebPush && (await WebPushFactory({ ...deps, publicKey, deviceId }));

  const webPushApi = webpush && webpush.publicApi;

  await initiateRealtimeConnection({ ...deps });

  const preference = preferencesFactory({ ...deps });

  return {
    notification: {},
    webpush: webPushApi || {},
    events: eventManager.publicApi,
    preference: preference.publicApi,
  };
}
