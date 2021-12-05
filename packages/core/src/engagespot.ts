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
    'NOTIFICATION_DELETED'
  ];

  /**
   * EventListenerStore Object
   * This is where the developer's custom eventListeners are stored for different allowed events.
   */
  eventListenerStore: EventListenerStore = {
    REALTIME_NOTIFICATION_RECEIVED: [],
    NOTIFICATION_CLICKED: [],
    NOTIFICATION_DELETED: []
  }

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
      throw 'You must pass an options object when you instantiate Engagespot.';

    if (!options.userId)
      throw 'You must pass userId when you instantiate Engagespot.';

    this.userId = options.userId;

    if (options.userSignature) this.userSignature = options.userSignature;

    if (options.enableNonHttpsWebPush)
      this.enableNonHttpsWebPush = options.enableNonHttpsWebPush;

    if (options.serviceWorkerRegistration)
      this.serviceWorkerRegistration = options.serviceWorkerRegistration;

    if (options.endPointOverride) this.endPoint = options.endPointOverride;

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
      return this;
    }

    //Read from localstorage to know if this device already has an id. If yes, then save it.
    //If not create a new device id and save.
    const locallySavedDeviceId = this.getDeviceId();

    if(locallySavedDeviceId){
      this.deviceId = locallySavedDeviceId;
    }else{
      this.deviceId = this.createNewDevice();
    }

    if (!this.enableNonHttpsWebPush) {
      if (this.serviceWorkerRegistration) {
        //If they passed their own serviceWorker, then wait until it's ready.
        await window.navigator.serviceWorker.ready;
      } else {
        // Otherwise just register our own service worker
        this.serviceWorkerRegistration =
          await this.getServiceWorkerRegistration();
      }
    }

    return await this.connect();
  }

  
  /**
   * Connects to Engagespot Server
   */
  async connect() {

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

    //Connect to RTM Server for realtime notifications
    try {
      this.realtimeConnect();
    } catch (error) {
      throw error;
    }

    //If all fine, then return connected instance state
    this.instanceState = 'connected';
    return this;

  }


  /**
   * _createTokenRequest
   * Generates AblyTokenRequest by calling Engagespot API
   */

  async _createTokenRequest(){
    
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
              const tokenRequest = await this._createTokenRequest() // Make a network request to your server
              callback('', tokenRequest)
          } catch (error) {
              callback(error as string, '')
          }
      }
    });

    //As soon as realtime client is connected, subscribe to this user's channel
    this.realtimeClient.connection.on('connected', () => {
      console.log("Subscribing to "+this.apiKey+'_'+this.userId);
      var channel = this.realtimeClient.channels.get(this.apiKey+'_'+this.userId);
      channel.subscribe((message) => {
        this.handleIncomingRealtimeMessage(message)
      });
    })
  
  }

  /**
   * Incoming Realtime Message Handler. This function is used by realtimeConnect() function
   * @param message 
   */
  handleIncomingRealtimeMessage(message: Types.Message) {

    console.log(message);
    if(message.name === 'NEW_NOTIFICATION'){
      
      //convert this into notification object
      const notification = new EngagespotNotification(this, {
        id:message.data.notification.id,
        title:message.data.notification.title,
        message: message.data.notification.description,
        icon: message.data.notification.icon,
        url: message.data.notification.url,
      });

      //Now let's publish this to all listeners who need
      let count = 0;
      this.eventListenerStore.REALTIME_NOTIFICATION_RECEIVED.forEach( (listener) => {
        listener(notification);
        count++
      });

      console.log("Published to "+count+" listeners");

    }
  
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

    this.checkWebPushSupport();

    //Check permission state
    const permissionState = await this.getWebPushRegistrationState();

    if (permissionState != PermissionState.PERMISSION_DENIED) {
      const permissionResult = await this.askWebPushPermission();
      if (permissionResult !== 'granted') {
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
    // Check is the service-worker.js file exists
    const serviceWorkerExists = await fetch(this.SERVICE_WORKER_URL);
    if (serviceWorkerExists.status !== 200) {
      throw `Engagespot SDK initialization failed. Service worker missing: No file found at /service-worker.js.
          If you prefer to use non-https web push subscription, enable enableNonHttpsWebPush in options`;
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
        'A service worker must be registered before push can be subscribed'
      );

    try {
      await this.clearWebPushSubscription();
      return await this.serviceWorkerRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: utils.urlBase64ToUInt8Array(this.publicKey),
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
  checkWebPushSupport() {
    if (!('serviceWorker' in navigator)) {
      throw new Error(
        'Engagespot Web Push is not support in this browser (Service Workers not supported)'
      );
    }

    if (!('PushManager' in window)) {
      throw new Error(
        'Engagespot Web Push is not support in this browser (Service Workers not supported)'
      );
    }
  }

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
        return response.json();
      })
      .then(response => {
        return true;
      })
      .catch(error => {
        const errorMessage = new Error(
          'Failed to register push notification with Engagespot server - ' +
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
   * @deprecated use Notification.markAsClicked() instead
   */
  async markNotificationAsClicked(id: number) {
    await this._resolveInstanceState();

    //Publish to all event subscribers.
    this.eventListenerStore.NOTIFICATION_CLICKED.forEach(handler => {
      handler(id);
    });

    if (!id) {
      throw new Error('Expecting id of the notification to be deleted');
    }

    const options: apiRequestOptions = {
      url: this.baseURL + '/notifications/' + id + '/click',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': this.apiKey,
        'X-ENGAGESPOT-USER-ID': this.userId,
        ...(this.userSignature && {
          'X-ENGAGESPOT-USER-SIGNATURE': this.userSignature,
        }),
      },
    };

    const response: NotificationList = await sendRequest(options);

    return response;

  }

  /**
   * @deprecated use Notification.delete() instead
   * @id
   */
  async deleteNotification(id: string) {
    await this._resolveInstanceState();
    return fetch(this.baseURL + '/notifications/' + id, {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': this.apiKey,
        'X-ENGAGESPOT-USER-ID': this.userId,
        'X-ENGAGESPOT-USER-SIGNATURE': this.userSignature,
      } as any,
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        return true;
      })
      .catch(error => {
        const errorMessage = new Error(
          'Failed to delete notification - ' + error
        );
        Promise.reject(errorMessage);
      });
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


}

function checkApiKey(key: string) {
  if (key === null || key === undefined) {
    throw 'You must pass your API key when you instantiate Engagespot.';
  }
}
