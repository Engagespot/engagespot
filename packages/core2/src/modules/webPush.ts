import { log } from 'console';
import { Deps } from 'src/createInstance';
import { handleError } from 'src/helpers/errorHandler';
import { isWebPlatform } from 'src/utils/platform';
import { registerServiceWorker, isWebPushSupported } from 'src/utils/webPush';

const SERVICE_WORKER_URL = '/service-worker.js?sdkVersion=3.0.0';

export async function WebpushService({
  options: { allowNonHttpsWebPush, serviceWorkerRegistration },
}: Deps) {
  const canRegisterServiceWorker = () => {
    return isWebPlatform() && isWebPushSupported() && !allowNonHttpsWebPush;
  };

  const getServiceWorkerRegistration = async () => {
    log('getServiceWorkerRegistration called');

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

  if (!canRegisterServiceWorker()) {
    if (!allowNonHttpsWebPush) {
      handleError('nonHttpsWebPushDisabled');
      return;
    }
    handleError('webPushNotSupported');
    return;
  }

  const ready = await getServiceWorkerRegistration();
  if (!ready) {
    handleError('serviceWorkerRegistrationFailure');
    return;
  }

  return {
    canRegisterServiceWorker,
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
