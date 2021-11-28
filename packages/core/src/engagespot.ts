import { App } from './app';
import { EventListenerStore } from './interfaces/EventListenerStore';
import { Options } from './options';
import Defaults from './defaults';
import { utils } from './utils';
import sendRequest, { apiRequestOptions } from './apiRequest';
import NotificationList from './NotificationList';
import { PermissionState } from './PermissionState';

export default class Engagespot {
  /*  STATIC VARIABLES */
  static isReady = false;
  SERVICE_WORKER_URL = '/service-worker.js?sdkVersion=3.0.0';

  /* INSTANCE PROPERTIES */
  apiKey: string;
  userId: string;
  userSignature: string | null = null;
  instanceState: 'none' | 'connecting' | 'connected' | 'errored' = 'none';
  endPoint: string | null = null;

  socket: WebSocket | null = null;
  _ready: Promise<unknown>;
  enableNonHttpsWebPush = false;

  /* VARIABLES */
  unreadCount = 0;
  deviceId: string | null = null;
  hideBranding = false;
  serviceWorkerRegistration: ServiceWorkerRegistration | null = null;
  publicKey = '';

  /* CONSTANTS */
  subscribableEvents = [
    'REALTIME_NOTIFICATION_RECEIVED',
    'NOTIFICATION_CLICKED',
  ];

  /* STORAGE VARIABLES */
  eventListenerStore: EventListenerStore | null = null;

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

  async init() {
    if (this.deviceId !== null) {
      return;
    }

    //Read from localstorage to know if this device already has an id. If yes, then save it.
    this.deviceId = this.getDeviceId();

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

    await this.connect();
  }

  //Connect to Realtime Server
  async connect() {
    this.instanceState = 'connecting';

    //If this is a new device, then generate a device id.
    if (!this.deviceId) this.deviceId = this.createNewDevice();

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

    // return fetch(this.baseURL+'/sdk/connect',{
    //     method:'POST',
    //     cache: 'no-cache',
    //     body:JSON.stringify(),
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-ENGAGESPOT-API-KEY': this.apiKey,
    //         'X-ENGAGESPOT-USER-ID': this.userId,
    //         'X-ENGAGESPOT-USER-SIGNATURE': this.userSignature,
    //         'X-ENGAGESPOT-DEVICE-ID': this.deviceId
    //       } as any
    // }).then((response) => {
    //     if(!response.ok){
    //         if(response.status === 401)
    //             throw new Error('Engagespot connection failed. Invalid API Key')
    //         else
    //             throw new Error('Some error occured while trying to connect to Engagespot')
    //     }else{
    //         return response.json()
    //     }
    // }).then((response) => {

    //Save Values
    this.unreadCount = response.unreadCount;
    this.hideBranding = response.app.hideBranding;
    this.publicKey = response.app.publicKey;

    //Connect to RTM Server for realtime notifications
    try {
      this.realtimeConnect();
    } catch (error) {
      Promise.reject(new Error(error));
    }

    //If all fine, then resolve
    this.instanceState = 'connected';
    Promise.resolve(this.instanceState);

    // }).catch(error => {
    //     Promise.reject(error);
    // });
  }

  /**
   * Connect to Engagespot RTM Server
   */
  realtimeConnect() {
    this.socket = new WebSocket(Defaults.wssHost);

    this.socket.onopen = event => {
      this.instanceState = 'connected';
      //Send the device Id to identify to this websocket

      if (!this.socket)
        throw new Error('Something wrong happened with websocket connection');

      this.socket.send(JSON.stringify(this.deviceId));
    };

    //Attach a global listener to handle incoming realtime messages
    // this.socket.onmessage = (event => {
    // this.handleIncomingRealtimeMessage(event.data)
    // })
  }

  //Handle incoming realtime message
  handleIncomingRealtimeMessage(message: string) {
    if (!this.socket) throw new Error('A socket connection is not active');

    const parsedMessage = JSON.parse(message);
    if (parsedMessage == '__ping__') {
      this.socket.send(
        JSON.stringify({ uuid: this.deviceId, msg: '__pong__' })
      );
    } else {
      // This is a realtime push notification.
      // We should send this to any event listeners attached to REALTIME_NOTIFICATION_RECEIVED
      // if(this.eventListenerStore.REALTIME_NOTIFICATION_RECEIVED){
      //     this.eventListenerStore.REALTIME_NOTIFICATION_RECEIVED(parsedMessage);
      // }
    }
  }

  // //Binding Functions
  // bind(eventName: string, callback){
  //     if(this.subscribableEvents.indexOf(eventName) === -1){
  //         throw new Error('Invalid event - '+eventName);
  //     }

  //     this.eventListenerStore[eventName] = callback;
  // }

  //Get all notifications
  getNotificationList() {
    //await this._resolveInstanceState();

    return new NotificationList(this);

    // const options: apiRequestOptions = {
    //     url:this.baseURL+'/notifications?pageNo='+startPage+'&limit='+itemsPerPage,
    //     method:'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-ENGAGESPOT-API-KEY': this.apiKey,
    //         'X-ENGAGESPOT-USER-ID': this.userId,
    //         ...this.userSignature && {'X-ENGAGESPOT-USER-SIGNATURE': this.userSignature}
    //       }
    // }

    // const response = await sendRequest(options);

    // return response;
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
   *
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
   *
   */
  async clearWebPushSubscription() {
    return navigator.serviceWorker.ready
      .then(reg => reg.pushManager.getSubscription())
      .then(sub => {
        if (sub) sub.unsubscribe();
      });
  }

  /**
   *
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
   * Mark a notification as clicked
   */
  async markNotificationAsClicked(id: number) {
    await this._resolveInstanceState();

    //Publish to all event subscribers.
    this.eventListenerStore?.NOTIFICATION_CLICKED.forEach(handler => {
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

    // return fetch(this.baseURL+'/notifications/'+id+'/click',{
    //     method:'POST',
    //     cache: 'no-cache',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-ENGAGESPOT-API-KEY': this.apiKey,
    //         'X-ENGAGESPOT-USER-ID': this.userId,
    //         'X-ENGAGESPOT-USER-SIGNATURE': this.userSignature
    //       } as any
    // }).then((response) => {
    //     return response.json()
    // }).then((response) => {

    //     return true;

    // }).catch(error => {
    //     const errorMessage = new Error('Failed to mark notification as clicked - '+error);
    //     Promise.reject(errorMessage);
    // });
  }

  /**
   * Delete Notification
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
  onNotificationReceived(handler: Function) {
    this.eventListenerStore?.REALTIME_NOTIFICATION_RECEIVED.push(handler);
    return true;
  }

  /**
   * Subscriber function for NOTIFICATION_CLICKED
   * @param handler
   */
  onNotificationClicked(handler: Function) {
    this.eventListenerStore?.NOTIFICATION_CLICKED.push(handler);
    return true;
  }
}

function checkApiKey(key: string) {
  if (key === null || key === undefined) {
    throw 'You must pass your API key when you instantiate Engagespot.';
  }
}
