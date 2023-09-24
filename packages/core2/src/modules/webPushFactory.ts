import { Deps } from '../createInstance';
import { handleError } from '../helpers/errorHandler';
import { isWebPlatform } from '../utils/platform';
import {
  registerServiceWorker,
  isWebPushSupported,
  getWebPushRegistrationState,
  askWebPushPermission,
  getWebPushSubscription,
} from '../utils/webPush';
import { ConnectResponse } from './connect';

const PERMISSION_QUERY_KEY = 'notifications';

type WebPushParams = {
  deviceId: string;
  connectPromise: Promise<false | ConnectResponse>;
} & Deps;

const SERVICE_WORKER_URL = '/service-worker.js?sdkVersion=3.0.0';

type WebPushFactoryPublicReturn = {
  isSupported: () => boolean;
  getRegistrationState: () => NotificationPermission;
  subscribe(): Promise<void>;
};

type WebPushFactoryReturn = WebPushFactoryPublicReturn & {
  publicApi: WebPushFactoryPublicReturn;
};

export type WebPushSlice = {
  subscribe: () => Promise<void>;
};

/**
 * Handles the web push subscription
 *
 * @param {WebPushParams} {
 *   log,
 *   sendRequest,
 *   deviceId,
 *   eventManager,
 *   connectPromise,
 *   options: { allowNonHttpsWebPush, serviceWorkerRegistration },
 * }
 * @return {*}
 */
export function webPushFactory({
  log,
  sendRequest,
  deviceId,
  eventManager,
  connectPromise,
  options: { allowNonHttpsWebPush, serviceWorkerRegistration },
}: WebPushParams) {
  let workerRegistrationPromise: Promise<
    ServiceWorkerRegistration | undefined
  > | null = null;

  const isWebPushEnabled = async () => {
    const connectRes = await connectPromise;
    if (!connectRes) return;
    const { app } = connectRes;
    return app.enableWebPush;
  };

  const canRegisterServiceWorker = () => {
    return isWebPlatform() && isWebPushSupported() && allowNonHttpsWebPush;
  };

  /**
   * Attach the push subscription for this device
   */
  const attachPushSubscription = async (subscription: PushSubscription) => {
    try {
      const success = await sendRequest({
        path: `/devices/${deviceId}/webPushSubscription`,
        method: 'POST',
        data: subscription,
      });
      if (success) return true;
    } catch (err) {
      handleError('pushNotificationRegistrationFailed');
    }
  };

  const getServiceWorkerRegistration = async () => {
    log('getServiceWorkerRegistration invoked');

    try {
      if (serviceWorkerRegistration) {
        //If they passed their own serviceWorker, then wait until it's ready.
        return await window.navigator.serviceWorker.ready;
      }
      const ready = await registerServiceWorker(SERVICE_WORKER_URL);
      return ready;
    } catch (err) {
      handleError('serviceWorkerFileMissing');
    }
  };

  /**
   * Initialize a listener for Web Push Permission Changes
   */
  const listenForWebPushPermissionChanges = () => {
    navigator.permissions
      .query({ name: PERMISSION_QUERY_KEY })
      .then(permission => {
        // Initial status is available at permission.state
        permission.onchange = e => {
          const target = e.target as PermissionStatus;
          const state = target.state;

          eventManager.trigger('webpushPermissionChange', {
            permission: state,
          });
        };
      });
  };

  const initiateRegistration = () => {
    if (!canRegisterServiceWorker()) {
      if (!allowNonHttpsWebPush) {
        handleError('nonHttpsWebPushDisabled');
        return;
      }
      handleError('webPushNotSupported');
      return;
    }

    // TODO: Need some refactoring here.
    (async () => {
      const enabled = await isWebPushEnabled();
      console.log('enabled???', enabled);
      if (!enabled) {
        log('Web push is not enabled for this app');
        return;
      }
      workerRegistrationPromise = getServiceWorkerRegistration();
      listenForWebPushPermissionChanges();
    })();
  };

  const returnValues = {
    isSupported: isWebPushSupported,
    getRegistrationState: getWebPushRegistrationState,
    initiateRegistration,
    /**
     * Attach the push subscription for this device
     */

    async subscribe() {
      if (!isWebPushSupported()) {
        log('Web push is not supported in this browser');
        return;
      }
      const webpushEnabled = await isWebPushEnabled();
      if (!webpushEnabled) {
        log('Web push is not enabled for this app');
        return;
      }

      //Check permission state
      const permissionState = getWebPushRegistrationState();
      const res = await connectPromise;
      if (!res) return;

      const publicKey = res.app.publicKey;

      if (permissionState != 'denied') {
        const permissionResult = await askWebPushPermission();
        if (permissionResult !== 'granted') {
          log('Web push permission was not granted.');
          return;
        }

        if (!workerRegistrationPromise) {
          log('Service worker registration not found.');
          return;
        }
        const swRegistration = await workerRegistrationPromise;
        if (!swRegistration) {
          log('Service worker registration not found.');
          return;
        }

        const subscription = await getWebPushSubscription(
          swRegistration,
          publicKey
        );
        await attachPushSubscription(subscription);
      }
    },
  };

  return {
    publicApi: {
      isSupported: returnValues.isSupported,
      subscribe: returnValues.subscribe,
    },
    ...returnValues,
  };
}
