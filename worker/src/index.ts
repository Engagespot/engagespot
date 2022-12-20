import sendRequest, { apiRequestOptions } from './apiRequest';
declare const self: ServiceWorkerGlobalScope;
export {};

(<any>self).Engagespot = {
  apiOverride: null,

  _apiUrl: () =>
    (<any>self).Engagespot.apiOverride
      ? (<any>self).Engagespot.apiOverride
      : 'https://api.engagespot.co/v3/',

  markAsClicked: async (notification: any) => {
    const options: apiRequestOptions = {
      url:
        (<any>self).Engagespot._apiUrl() +
        '/notifications/' +
        notification.notificationPayload.id +
        '/click',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': notification.metaData.apiKey,
        'X-ENGAGESPOT-USER-ID': notification.metaData.userIdentifier,
        'X-ENGAGESPOT-USER-SIGNATURE': notification.metaData.userSignature,
        // 'X-ENGAGESPOT-DEVICE-ID': notification.metaData.userSignature  - Better to include this too
      },
    };

    return sendRequest(options);
  },

  _getFocusedClient: function _getFocusedClient() {
    return self.clients
      .matchAll({
        type: 'window',
        includeUncontrolled: true,
      })
      .then(function (clients) {
        return clients.find(function (c) {
          return c.focused === true;
        });
      });
  },

  _hasFocusedClient: function _hasFocusedClient() {
    return (<any>self).Engagespot._getFocusedClient().then(function (
      client: WindowClient
    ) {
      return client !== undefined;
    });
  },
};

self.addEventListener('push', (event: PushEvent) => {
  let payload: any;
  console.log('Inside push event listener', event.data);
  try {
    payload = event.data?.json();
  } catch (_) {
    return;
  }

  //console.log(payload);

  if (!payload.data || !payload.data.engagespot) {
    console.log('Not an engagespot notification');
    return;
  }

  //If tab is opened, don't show notification!
  (<any>self).Engagespot._hasFocusedClient().then(
    (hasFocussedClient: boolean) => {
      if (hasFocussedClient) {
        return;
      }

      const notificationPayload = { ...payload };
      const engagespotMetaData = payload.data.engagespot;

      const title = notificationPayload.data.customerData.title || '';
      const body = notificationPayload.data.customerData.body || '';
      const icon = notificationPayload.data.customerData.icon;

      const options = {
        body,
        icon,
        data: {
          engagespot: {
            notificationPayload: notificationPayload.data.customerData,
            metaData: notificationPayload.data.engagespot,
          },
        },
      };

      const promiseChain = self.registration.showNotification(title, options);
      event.waitUntil(promiseChain);
    }
  );
});

self.addEventListener('notificationclick', e => {
  const notification = e.notification.data;

  //console.log(e.notification);
  const isEngagespotNotification = notification.engagespot !== undefined;

  if (isEngagespotNotification) {
    (<any>self).Engagespot.markAsClicked(notification.engagespot);

    if (notification.engagespot.notificationPayload.url) {
      e.waitUntil(
        self.clients.openWindow(notification.engagespot.notificationPayload.url)
      );
    }
    e.notification.close();
  }
});
