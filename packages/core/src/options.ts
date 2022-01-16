export interface Options {
  userId: string;
  userSignature?: string;

  enableNonHttpsWebPush?: boolean;
  serviceWorkerRegistration?: ServiceWorkerRegistration;
  endPointOverride?: string;
  debug?: boolean;
}
