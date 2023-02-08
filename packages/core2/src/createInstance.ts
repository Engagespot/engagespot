import { connect } from './modules/connect';
import { defaults } from './helpers/defaults';
import { createApiExecutor } from './modules/apiCore';
import { validateIncomingArgs } from './helpers/errorHandler';
import { webPushFactory } from './modules/webPushFactory';
import { EventManager } from './modules/eventManager';
import { initiateRealtimeConnection } from './modules/realtimeClient';
import { getOrCreateDeviceId } from './utils/device';
import { createLogger } from './utils/logger';
import { findBrowser } from './utils/platform';
import { preferencesFactory } from './modules/preferences';
import { notificationFactory, Notification } from './modules/notificationFactory';
import {
  TransformNotificationFn,
  createTransformer,
} from './modules/transformer';

export type { Notification } from './modules/notificationFactory';

export type InstanceOptions<T = any, U = any> = {
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
  transformNotification?: TransformNotificationFn<T, U>;
};

export type Deps<T = any, U = any> = {
  log: ReturnType<typeof createLogger>;
  sendRequest: ReturnType<typeof createApiExecutor>;
  options: InstanceOptions<T, U>;
  browserType: string;
  eventManager: ReturnType<typeof EventManager>;
  transform: ReturnType<typeof createTransformer<T, U>>
};

/**
 *
 *
 * @export
 * @param {InstanceOptions} options
 * @return {*}
 */
export async function createInstance<TData, UType=Notification<TData>>(options: InstanceOptions<TData, UType>) {
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

  const transformNotification = options.transformNotification;

  const transform = createTransformer(transformNotification);
  const eventManager = EventManager();

  const deps: Deps<TData, UType> = {
    log,
    sendRequest,
    options,
    browserType,
    eventManager,
    transform,
  };

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
  const webpush = (await webPushFactory({ ...deps, publicKey, deviceId, enableWebPush }));

  const preference = preferencesFactory({...deps});

  const notification = notificationFactory<TData, UType>({...deps});

  //await initiateRealtimeConnection<TData, UType>({...deps, createNotification: notification.createNotification});

  return {
    notification: notification.publicApi,
    webpush: webpush.publicApi,
    events: eventManager.publicApi,
    preference: preference.publicApi,
  };
}