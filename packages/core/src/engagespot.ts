import { App } from './app';
import { EventListenerStore } from './interfaces/EventListenerStore';
import { Options } from './options';
import Defaults from './defaults';
import { utils } from './utils';
import sendRequest, { apiRequestOptions } from './apiRequest';
import NotificationList from './NotificationList';
import { PermissionState } from './PermissionState';
import { Realtime, Types } from 'ably';
import { AblyTokenRequest } from './interfaces/AblyTokenRequest';
import EngagespotNotification from './Notification';

export default class Engagespot {
  /**
   * Toggle Debug Mode
   */
  debug: boolean = false;

  /*  STATIC VARIABLES */
  static isReady = false;
  SERVICE_WORKER_URL = '/service-worker.js?sdkVersion=3.0.0';

  /**
   * API Key for this app. (Please don't confuse with API_SECRET, which is never used in front-end apps)
   */
  apiKey: string;

  /**
   * This is the unique identifier for the user, as set by the developer
   */
  userId: string;

  /**
   * HMAC Signature for this user, for added security
   */
  userSignature: string | null = null;

  instanceState: 'none' | 'connecting' | 'connected' | 'errored' = 'none';
  endPoint: string | null = null;

  /**
   * @deprecated Realtime Websocket
   *
   */
  socket: WebSocket | null = null; //@deprecated. Instead use realtimeClient

  /**
   * Ably Realtime Client
   */
  realtimeClient!: Realtime;

  _ready: Promise<unknown>;
  enableNonHttpsWebPush = false;

  /**
   * Whether web push needs to be enabled.
   */
  enableWebPush = false;

  /**
   * Unread notifications count.
   */
  unreadCount = 0;

  /**
   * Unique identifier for this device.
   */
  deviceId!: string;
  hideBranding = false;
  serviceWorkerRegistration: ServiceWorkerRegistration | null = null;
  publicKey = '';

  /* CONSTANTS */
  subscribableEvents = [
    'REALTIME_NOTIFICATION_RECEIVED',
    'NOTIFICATION_CLICKED',
    'NOTIFICATION_DELETED',
  ];

  /**
   * EventListenerStore Object
   * This is where the developer's custom eventListeners are stored for different allowed events.
   */
  eventListenerStore: EventListenerStore = {
    REALTIME_NOTIFICATION_RECEIVED: [],
    NOTIFICATION_CLICKED: [],
    NOTIFICATION_DELETED: [],
    NOTIFICATION_SEEN: [],
    WEBPUSH_PERMISSION_CHANGED: [],
  };

  /**
   * Constructor
   * Initializes Engagespot and sets all required class variables.
   * @param apiKey
   * @param options
   */

  constructor(apiKey: string, options: Options) {
    checkApiKey(apiKey);

    this.apiKey = apiKey;

    if (!options)
      throw 'ES1000 - You must pass an options object when you instantiate Engagespot.';

    if (!options.userId)
      throw 'ES1001 - You must pass userId when you instantiate Engagespot.';

    this.userId = options.userId;

    if (options.userSignature) this.userSignature = options.userSignature;

    if (options.enableNonHttpsWebPush)
      this.enableNonHttpsWebPush = options.enableNonHttpsWebPush;

    if (options.serviceWorkerRegistration)
      this.serviceWorkerRegistration = options.serviceWorkerRegistration;

    if (options.endPointOverride) this.endPoint = options.endPointOverride;

    if (options.debug) this.debug = options.debug;

    this._ready = this.init();
  }

  /**
   *
   */
  async _resolveInstanceState() {
    await this._ready;
  }

  /**
   * Function that returns boolean based on SDK Initilization State
   * @returns
   */
  async isReady() {
    try {
      await this._resolveInstanceState();
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Initializes Engagespot Instance
   *
   * @returns
   */
  async init() {
    // This is to prevent init from being called multiple times in the same page
    if (this.deviceId) {
      this._log('Instance already have a deviceId. So skipping init()');
      return this;
    }

    //Read from localstorage to know if this device already has an id. If yes, then save it.
    //If not create a new device id and save.
    const locallySavedDeviceId = this.getDeviceId();

    if (locallySavedDeviceId) {
      this.deviceId = locallySavedDeviceId;
    } else {
      this.deviceId = this.createNewDevice();
    }

    return await this.connect();
  }

  /**
   * Connects to Engagespot Server
   */
  private async connect() {
    this.instanceState = 'connecting';

    //Call sdk connect API
    const options: apiRequestOptions = {
      url: this.baseURL + '/sdk/connect',
      method: 'POST',
      body: {
        deviceType: 'browser',
        browserType: utils.findBrowser(),
      },
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': this.apiKey,
        'X-ENGAGESPOT-USER-ID': this.userId,
        ...(this.userSignature && {
          'X-ENGAGESPOT-USER-SIGNATURE': this.userSignature,
        }),
        'X-ENGAGESPOT-DEVICE-ID': this.deviceId,
      },
    };

    const response = await sendRequest(options);

    //Save Values
    this.unreadCount = response.unreadCount;
    this.hideBranding = response.app.hideBranding;
    this.publicKey = response.app.publicKey;
    this.enableWebPush = response.app.enableWebPush;

    this._log('Response from connect API is given below ');
    this._log(response);

    //Register Service Worker
    if (this.enableWebPush && !this.enableNonHttpsWebPush) {
      this._log('enableNonHttpsWebPush is false');

      if (this.serviceWorkerRegistration) {
        //If they passed their own serviceWorker, then wait until it's ready.
        await window.navigator.serviceWorker.ready;
      } else {
        // Otherwise just register our own service worker
        try {
          this.serviceWorkerRegistration =
            await this.getServiceWorkerRegistration();
        } catch (error) {
          console.warn(
            '[Engagespot] ES1003 - Service worker registration failed. This error is probably due to missing service-worker file. Try turning off web-push channel in your Engagespot dashboard'
          );
          console.error(error);
        }
      }
    } else {
      //Just for debugging.
      this._log('enableNonHttpsWebPush is ' + this.enableNonHttpsWebPush);
      this._log('enableWebPush is ' + this.enableWebPush);
    }

    //Connect to RTM Server for realtime notifications
    try {
      this.realtimeConnect();
    } catch (error) {
      throw error;
    }

    //Listen for WebPushPermissionChange events
    this.listenForWebPushPermissionChanges();

    //If all fine, then return connected instance state
    this.instanceState = 'connected';
    return this;
  }

  /**
   * _createTokenRequest
   * Generates AblyTokenRequest by calling Engagespot API
   */

  async _createTokenRequest() {
    const options: apiRequestOptions = {
      url: this.baseURL + '/sdk/realtimeTokenRequests',
      method: 'POST',
      body: {
        deviceType: 'browser',
        browserType: utils.findBrowser(),
      },
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': this.apiKey,
        'X-ENGAGESPOT-USER-ID': this.userId,
        ...(this.userSignature && {
          'X-ENGAGESPOT-USER-SIGNATURE': this.userSignature,
        }),
        'X-ENGAGESPOT-DEVICE-ID': this.deviceId,
      },
    };

    const response = await sendRequest(options);

    return response;
  }

  /**
   * Connect to Ably Realtime.
   * It also subscribes to channel with name in the format - APIKEY_UserID
   */
  realtimeConnect() {
    this.realtimeClient = new Realtime({
      authCallback: async (tokenParams, callback) => {
        try {
          const tokenRequest = await this._createTokenRequest(); // Make a network request to your server
          callback('', tokenRequest);
        } catch (error) {
          this._log(error);
          callback(error as string, '');
        }
      },
    });

    //As soon as realtime client is connected, subscribe to this user's channel
    this.realtimeClient.connection.once('connected', () => {
      this._log('Subscribing to ' + this.apiKey + '_' + this.userId);
      var channel = this.realtimeClient.channels.get(
        this.apiKey + '_' + this.userId
      );
      channel.subscribe(message => {
        this.handleIncomingRealtimeMessage(message);
      });
    });
  }

  /**
   * Incoming Realtime Message Handler. This function is used by realtimeConnect() function
   * @param message
   */
  handleIncomingRealtimeMessage(message: Types.Message) {
    this._log(message);
    if (message.name === 'NEW_NOTIFICATION') {
      //convert this into notification object
      const notification = new EngagespotNotification(this, {
        id: message.data.notification.id,
        title: message.data.notification.title,
        message: message.data.notification.description,
        icon: message.data.notification.icon,
        url: message.data.notification.url,
        createdAt: message.data.notification.created_at,
      });

      //Now let's publish this to all listeners who need
      let count = 0;
      this.eventListenerStore.REALTIME_NOTIFICATION_RECEIVED.forEach(
        listener => {
          listener(notification);
          count++;
        }
      );

      this._log('Published to ' + count + ' listeners');

      //Whenever a new notification is received, that means we should update the unreadCount
      //The best strategy to fetch the latest unread count is by getting the value from server!
    }

    if (message.name === 'NOTIFICATION_DELETED') {
      this.eventListenerStore.NOTIFICATION_DELETED.forEach(listener => {
        listener(message.data.notification.id);
      });
    }

    if (message.name === 'NOTIFICATION_CLICKED') {
      this.eventListenerStore.NOTIFICATION_CLICKED.forEach(listener => {
        listener(message.data.notification.id);
      });
    }

    if (message.name === 'NOTIFICATION_SEEN') {
      this.eventListenerStore.NOTIFICATION_SEEN.forEach(listener => {
        listener(message.data.notification.id);
      });
    }
  }

  /**
   * Initialize a listener for Web Push Permission Changes
   */
  listenForWebPushPermissionChanges() {
    if (!this.isWebPushSupported()) {
      this._log('Web push is not supported in this browser');
      return;
    }
    navigator.permissions.query({ name: 'notifications' }).then(permission => {
      // Initial status is available at permission.state
      permission.onchange = e => {
        const target = e.target as PermissionStatus;
        const state = target.state;

        //Publish to all listeners
        this.eventListenerStore.WEBPUSH_PERMISSION_CHANGED.forEach(listener => {
          listener(state);
        });
      };
    });
  }

  /**
   * Returns a new empty NotificationList object
   * @returns
   */
  getNotificationList() {
    return new NotificationList(this);
  }

  /**
   * HTTPS Web Push Subscription
   */
  async httpsWebPushSubscribe() {
    await this._resolveInstanceState();

    if (!this.isWebPushSupported()) {
      this._log('Web push is not supported in this browser');
      return;
    }

    //Check permission state
    const permissionState = await this.getWebPushRegistrationState();

    if (permissionState != PermissionState.PERMISSION_DENIED) {
      const permissionResult = await this.askWebPushPermission();
      if (permissionResult !== 'granted') {
        this._log('Web push permission was not granted.');
        return;
      }

      const subscription = await this.getWebPushSubscription(this.publicKey);
      await this.attachPushSubscription(subscription);
    }
  }

  /**
   * Registers the service worker to the browser
   */
  async getServiceWorkerRegistration() {
    this._log('getServiceWorkerRegistration called');

    if (!this.isWebPushSupported()) {
      this._log('Web push is not supported in this browser');
      return null;
    }
    // Check is the service-worker.js file exists
    const serviceWorkerExists = await fetch(this.SERVICE_WORKER_URL);
    if (serviceWorkerExists.status !== 200) {
      throw `ES1004 - Engagespot SDK initialization failed. Service worker missing: No file found at /service-worker.js`;
    }

    window.navigator.serviceWorker.register(this.SERVICE_WORKER_URL, {
      updateViaCache: 'none',
    });
    return window.navigator.serviceWorker.ready;
  }

  /**
   * Trigger browser permission prompt for Notification Subscription
   * @returns
   */
  async askWebPushPermission(): Promise<string> {
    return new Promise(function (resolve, reject) {
      const permissionResult = Notification.requestPermission(function (
        result
      ) {
        resolve(result);
      });

      if (permissionResult) {
        permissionResult.then(resolve, reject);
      }
    });
  }

  /**
   * Get WebPush Subscription
   * @param publicKey
   */
  async getWebPushSubscription(publicKey: string) {
    if (!this.serviceWorkerRegistration)
      throw new Error(
        'ES1005 - A service worker must be registered before push can be subscribed'
      );

    try {
      await this.clearWebPushSubscription();
      return await this.serviceWorkerRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        //applicationServerKey: utils.urlBase64ToUInt8Array(this.publicKey),
        applicationServerKey: this.publicKey,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * Clear WebPush Subscription
   */
  async clearWebPushSubscription() {
    return navigator.serviceWorker.ready
      .then(reg => reg.pushManager.getSubscription())
      .then(sub => {
        if (sub) sub.unsubscribe();
      });
  }

  /**
   * Check if the current browser supports WebPush
   */
  isWebPushSupported = () =>
    'Notification' in window &&
    'serviceWorker' in navigator &&
    'PushManager' in window;

  /**
   *
   */
  get baseURL() {
    if (this.endPoint !== null) {
      return this.endPoint;
    }
    return Defaults.apiHost;
  }

  /**
   * Get Web Push Registration State
   */
  async getWebPushRegistrationState() {
    await this._resolveInstanceState();

    if (Notification.permission === 'denied') {
      return PermissionState.PERMISSION_DENIED;
    }

    if (Notification.permission === 'granted') {
      return PermissionState.PERMISSION_GRANTED;
    }

    return PermissionState.PERMISSION_REQUIRED;
  }

  /**
   * Attach the push subscription for this device
   */
  async attachPushSubscription(subscription: PushSubscription) {
    await this._resolveInstanceState();

    return fetch(
      this.baseURL + '/devices/' + this.deviceId + '/webPushSubscription',
      {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'application/json',
          'X-ENGAGESPOT-API-KEY': this.apiKey,
          'X-ENGAGESPOT-USER-ID': this.userId,
          'X-ENGAGESPOT-USER-SIGNATURE': this.userSignature,
          'X-ENGAGESPOT-DEVICE-ID': this.deviceId,
        } as any,
      }
    )
      .then(response => {
        this._log('Push subscription attached');
        return response.json();
      })
      .then(response => {
        return true;
      })
      .catch(error => {
        const errorMessage = new Error(
          'ES1006 - Failed to register push notification with Engagespot server - ' +
            error
        );
        Promise.reject(errorMessage);
      });
  }

  /**
   * Creares a new random device id, sets it to local storage and returns it.
   */
  createNewDevice() {
    const deviceId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );

    localStorage.setItem('_engagespotDeviceId', deviceId);

    return deviceId;
  }

  /**
   *
   * @param id
   */
  getDeviceId() {
    return localStorage.getItem('_engagespotDeviceId');
  }

  /**
   * Subscriber function for REALTIME_NOTIFICATION_RECEIVED
   * @param handler
   */
  onNotificationReceive(handler: Function) {
    this.eventListenerStore.REALTIME_NOTIFICATION_RECEIVED.push(handler);
    //return this.eventListenerStore.REALTIME_NOTIFICATION_RECEIVED;
    return true;
  }

  /**
   * Subscriber function for NOTIFICATION_CLICKED
   * @param handler
   */
  onNotificationClick(handler: Function) {
    this.eventListenerStore.NOTIFICATION_CLICKED.push(handler);
    return true;
  }

  /**
   * Subscriber function for NOTIFICATION_DELETED
   * @param handler
   */
  onNotificationDelete(handler: Function) {
    this.eventListenerStore.NOTIFICATION_DELETED.push(handler);
    return true;
  }

  /**
   * Subscriber function for NOTIFICATION_SEEN
   * @param handler
   */
  onNotificationSee(handler: Function) {
    this.eventListenerStore.NOTIFICATION_SEEN.push(handler);
    return true;
  }

  /**
   *
   * @param message
   */
  onWebPushPermissionChange(
    handler: (state: globalThis.PermissionState) => void
  ) {
    this.eventListenerStore.WEBPUSH_PERMISSION_CHANGED.push(handler);
    return true;
  }

  /**
   * Wrapper for this._log which considers this.debug value
   * @param message
   */
  _log(message: string | any) {
    if (this.debug) {
      console.log('[Engagespot-Core] ' + message);
    }
  }
}

function checkApiKey(key: string) {
  if (key === null || key === undefined) {
    throw 'ES1007 - You must pass your API key when you instantiate Engagespot.';
  }
}
