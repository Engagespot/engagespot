/**
 * Check if the current browser supports WebPush
 */
export const isWebPushSupported = () =>
  'Notification' in window &&
  'serviceWorker' in navigator &&
  'PushManager' in window;

/**
 * Registers the service worker to the browser
 */
export const registerServiceWorker = async (workerUrl: string) => {
  // Check if the service-worker.js file exists
  const serviceWorkerExists = await fetch(workerUrl);
  if (serviceWorkerExists.status !== 200) {
    throw new Error('Worker file not found');
  }

  window.navigator.serviceWorker.register(workerUrl, {
    updateViaCache: 'none',
  });
  return window.navigator.serviceWorker.ready;
};

/**
 * Clear WebPush Subscription
 */
export const clearWebPushSubscription = async () => {
  return navigator.serviceWorker.ready
    .then(reg => reg.pushManager.getSubscription())
    .then(sub => {
      if (sub) sub.unsubscribe();
    });
};

/**
 * Get WebPush Subscription
 * @param serverKey
 */
export const getWebPushSubscription = async (
  serviceWorkerRegistration: ServiceWorkerRegistration,
  serverKey: string
) => {
  try {
    return await serviceWorkerRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: serverKey,
    });
  } catch (error) {
    throw new Error('Failed to subscribe to push notifications');
  }
};

/**
 * Trigger browser permission prompt for Notification Subscription
 * @returns {Promise<string>}
 * */
export const askWebPushPermission = async (): Promise<string> => {
  return new Promise(function (resolve, reject) {
    const permissionResult = Notification.requestPermission(function (result) {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  });
};

/**
 * Get Web Push Registration State
 */
export const getWebPushRegistrationState = () => {
  //TODO: return values are different in v1 (required instead of default)
  return Notification.permission;
};
