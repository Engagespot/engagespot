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

const PERMISSION_QUERY_KEY = 'notifications';

type WebPushParams = {
  publicKey: string;
  deviceId: string;
} & Deps;

const SERVICE_WORKER_URL = '/service-worker.js?sdkVersion=3.0.0';

export async function WebPushFactory({
  log,
  sendRequest,
  deviceId,
  publicKey,
  eventManager,
  options: { allowNonHttpsWebPush, serviceWorkerRegistration },
}: WebPushParams) {
  const canRegisterServiceWorker = () => {
    return isWebPlatform() && isWebPushSupported() && !allowNonHttpsWebPush;
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

  if (!canRegisterServiceWorker()) {
    if (!allowNonHttpsWebPush) {
      handleError('nonHttpsWebPushDisabled');
      return;
    }
    handleError('webPushNotSupported');
    return;
  }
  listenForWebPushPermissionChanges();

  const newServiceWorkerRegistration = await getServiceWorkerRegistration();
  if (!newServiceWorkerRegistration) {
    handleError('serviceWorkerRegistrationFailure');
    return;
  }

  const returnValues = {
    isSupported: isWebPushSupported,
    getRegistrationState: getWebPushRegistrationState,
    /**
     * Attach the push subscription for this device
     */

    async subscribe() {
      if (isWebPushSupported()) {
        log('Web push is not supported in this browser');
        return;
      }

      //Check permission state
      const permissionState = getWebPushRegistrationState();

      if (permissionState != 'denied') {
        const permissionResult = await askWebPushPermission();
        if (permissionResult !== 'granted') {
          log('Web push permission was not granted.');
          return;
        }

        const swRegistration =
          serviceWorkerRegistration || newServiceWorkerRegistration;
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

/**
 * HTTPS Web Push Subscription
 */
// const subscribeToWebPush = async () => {
//   if (isWebPushSupported()) {
//     log('Web push is not supported in this browser');
//     return;
//   }

//   //Check permission state
//   const permissionState = await this.getWebPushRegistrationState();

//   if (permissionState != PermissionState.PERMISSION_DENIED) {
//     const permissionResult = await this.askWebPushPermission();
//     if (permissionResult !== 'granted') {
//       this._log('Web push permission was not granted.');
//       return;
//     }

//     const subscription = await this.getWebPushSubscription(this.publicKey);
//     await this.attachPushSubscription(subscription);
//   }
// };

// if (!this.serviceWorkerRegistration)
// throw new Error(
//   'ES1005 - A service worker must be registered before push can be subscribed'
// );
