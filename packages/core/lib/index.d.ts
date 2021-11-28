interface EventListenerStore {
    REALTIME_NOTIFICATION_RECEIVED: Array<Function>;
    NOTIFICATION_CLICKED: Array<Function>;
}

interface Options {
    userId: string;
    userSignature?: string;
    enableNonHttpsWebPush?: boolean;
    serviceWorkerRegistration?: ServiceWorkerRegistration;
    endPointOverride?: string;
}

interface NotificationItem {
    id: string;
    title: string;
    message?: string | null;
    icon?: string | null;
    url?: string | null;
    seenAt?: string | null;
    clickedAt?: string | null;
    createdAt?: string | null;
}

declare class NotificationList implements NotificationList {
    client: Engagespot;
    unreadCount: number;
    totalCount: number;
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    data: NotificationItem[];
    constructor(client: Engagespot);
    fetch(page?: number, itemsPerPage?: number): Promise<this>;
}

declare enum PermissionState {
    PERMISSION_REQUIRED = 0,
    PERMISSION_GRANTED = 1,
    PERMISSION_DENIED = 2
}

declare class Engagespot {
    static isReady: boolean;
    SERVICE_WORKER_URL: string;
    apiKey: string;
    userId: string;
    userSignature: string | null;
    instanceState: 'none' | 'connecting' | 'connected' | 'errored';
    endPoint: string | null;
    socket: WebSocket | null;
    _ready: Promise<unknown>;
    enableNonHttpsWebPush: boolean;
    unreadCount: number;
    deviceId: string | null;
    hideBranding: boolean;
    serviceWorkerRegistration: ServiceWorkerRegistration | null;
    publicKey: string;
    subscribableEvents: string[];
    eventListenerStore: EventListenerStore | null;
    constructor(apiKey: string, options: Options);
    /**
     *
     */
    _resolveInstanceState(): Promise<void>;
    /**
     * Function that returns boolean based on SDK Initilization State
     * @returns
     */
    isReady(): Promise<boolean>;
    init(): Promise<void>;
    connect(): Promise<void>;
    /**
     * Connect to Engagespot RTM Server
     */
    realtimeConnect(): void;
    handleIncomingRealtimeMessage(message: string): void;
    getNotificationList(): NotificationList;
    /**
     * HTTPS Web Push Subscription
     */
    httpsWebPushSubscribe(): Promise<void>;
    /**
     * Registers the service worker to the browser
     */
    getServiceWorkerRegistration(): Promise<ServiceWorkerRegistration>;
    askWebPushPermission(): Promise<string>;
    /**
     *
     * @param publicKey
     */
    getWebPushSubscription(publicKey: string): Promise<PushSubscription>;
    /**
     *
     */
    clearWebPushSubscription(): Promise<void>;
    /**
     *
     */
    checkWebPushSupport(): void;
    /**
     *
     */
    get baseURL(): string;
    /**
     * Get Web Push Registration State
     */
    getWebPushRegistrationState(): Promise<PermissionState>;
    /**
     * Attach the push subscription for this device
     */
    attachPushSubscription(subscription: PushSubscription): Promise<boolean | void>;
    /**
     * Creares a new random device id, sets it to local storage and returns it.
     */
    createNewDevice(): string;
    /**
     *
     * @param id
     */
    getDeviceId(): string | null;
    /**
     * Mark a notification as clicked
     */
    markNotificationAsClicked(id: number): Promise<NotificationList>;
    /**
     * Delete Notification
     * @id
     */
    deleteNotification(id: string): Promise<boolean | void>;
    /**
     * Subscriber function for REALTIME_NOTIFICATION_RECEIVED
     * @param handler
     */
    onNotificationReceived(handler: Function): boolean;
    /**
     * Subscriber function for NOTIFICATION_CLICKED
     * @param handler
     */
    onNotificationClicked(handler: Function): boolean;
}

export { Options, PermissionState, Engagespot as default };
