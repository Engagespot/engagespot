# Using Javascript Core

Javascript Core [package](https://www.npmjs.com/package/@engagespot/core) wraps the REST API calls into easy to use functions for any Javascript app. With this package, you can build Notification Inbox, Subscribe users to web push, build preference manager etc.

:::tip
Javascript core library doesn't provide any UI components. If you're looking for UI-Kit for Javascript, you should use our React component or Browser Javascript UI Kit.
:::

## Quick Setup

Before we start, make sure you have Engagespot API Key from your dashboard.
Now, let's install the core package, and initialize.

```bash
npm i @engagespot/core --save

#or

yarn add @engagespot/core
```

Now let's add this library to a project with basic configurations.

```js
import Engagespot from '@engagespot/core';

const engagespot = new Engagespot('YOUR_ENGAGESPOT_API_KEY', {
  userId: 'youruser@example.com',
});

const notificationList = engagespot.getNotificationList();
await notificationList.fetch();
notificationList.data.forEach(notification => {
  console.log(notification.title, notification.message);
});
```

## Engagespot Class

This class is used to create a new Engagespot instance.

### Constructor

The constructor accepts the following arguments.

| Property                          | Type                                                                                                    | Description                                                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| apiKey                            | string                                                                                                  | Engagespot API Key                                                                                                 |
| options                           | Object                                                                                                  | `Options` Object. (Properties explained below)                                                                     |
| options.userId                    | string                                                                                                  | Any unique identifier to identify your app user                                                                    |
| options.userSignature             | string                                                                                                  | Required if your app has [HMAC Authentication](../user/enabling-HMAC-authentication.mdx) turned on. |
| options.serviceWorkerRegistration | [ServiceWorkerRegistration](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration) | Use this if your app has an existing Service Worker Registration                                                   |

### Fetching Notifications

To fetch notification list, you should use the `getNotificationList()` method, which returns the `NotificationList` object. Note that, the `NotificationList` object will be empty, and you need to call the `fetch()` method to pull the latest notification data from server.

We've seen this in the example above. After calling `fetch()` which returns `Promise<this>`, you can access the notifications from `data[]`

Let's learn more about `NotificationList` class below.

## NotificationList Class

Notification list is a collection of Notifications. It implements the `NotificationItem` interface.

```js
export interface NotificationList {
  unreadCount: number;
  totalCount: number;

  data: NotificationItem[];

  fetch: (page: number, itemsPerPage: number) => Promise<this>;
  markAllAsSeen: () => Promise<this>;
}
```

### Properties

The `NotificationList` interface has the following properties.

#### unreadCount

Number of unseen notifications in the list.

#### totalCount

Total number of notifications in the list

### Methods

#### fetch

Fetches the notifications from the server and add them to the `data[]` property.

## NotificationItem Interface

`NotificationItem` interface represents a single notification entity. It has several properties and methods to do actions on that particular notification.

```javascript
interface NotificationItem {
  id: string;
  title: string;
  message?: string | null;
  icon?: string | null;
  url?: string | null;
  seenAt?: string | null;
  clickedAt?: string | null;
  createdAt?: string | null;
  data?: T | null;

  fetch?:  () => Promise<this> // This will mark the notification as seen.
  markAsClicked?:  () => Promise<this> //@deprecated. Use markAsRead() instead.
  markAsRead?:  () => Promise<this>
  markAsUnSeen?: () => Promise<this>
  markAsUnRead? () => Promise<this>
  delete? () => Promise<this>
}
```

### Properties

The `NotificationItem` interface has the following properties.

#### id

Id of the notification

#### title

Title of the notification

#### message

Body of notification. This can be null.

#### icon

URL of the notification icon. This can be null.

#### seenAt

Timestamp of seen event of this notification. This can be null.

#### clickedAt

Timestamp of click event of this notification. This can be null.

#### createdAt

Timestamp of created event of this notification.

#### data

The data object passed to the send notifications API.

### Methods

The `NotificationItem` interface has the following methods.

#### fetch()

Calls **GET** `/notifications/:notificationId` API and sets the properties of this class.

#### markAsClicked()

:::caution
markAsClicked() method is deprecated. Use `markAsRead()` instead
:::

#### markAsRead()

Calls **POST** `/notifications/:notificationId/click` API and marks this notification as read.

#### markAsUnSeen()

Calls **DELETE** `/notifications/:notificationId/views` API and marks this notification as unseen.

#### markAsUnRead()

Calls **DELETE** `/notifications/:notificationId/reads` API and marks this notification as unread.

#### delete()

Calls **DELETE** `/notifications/:notificationId` API and deletes this notification.

## Events

Engagespot Core emits several events which you can susbcribe to do custom actions.

### onNotificationReceive

```js
import Engagespot from '@engagespot/core';

const engagespot = new Engagespot('YOUR_ENGAGESPOT_API_KEY', {
  userId: 'youruser@example.com',
});

engagespot.onNotificationReceive(notification => {
  //You'll get the notification object.
});
```

### onNotificationClick
:::caution
onNotificationClick() is deprecated. Use `onNotificationRead` instead.
:::

### onNotificationRead

```js
import Engagespot from '@engagespot/core';

const engagespot = new Engagespot('YOUR_ENGAGESPOT_API_KEY', {
  userId: 'youruser@example.com',
});

engagespot.onNotificationRead(notification => {
  //You'll get the notification object.
});
```

### onNotificationDelete

```js
import Engagespot from '@engagespot/core';

const engagespot = new Engagespot('YOUR_ENGAGESPOT_API_KEY', {
  userId: 'youruser@example.com',
});

engagespot.onNotificationDelete(notification => {
  //You'll get the notification object.
});
```

### onNotificationSee

```js
import Engagespot from '@engagespot/core';

const engagespot = new Engagespot('YOUR_ENGAGESPOT_API_KEY', {
  userId: 'youruser@example.com',
});

engagespot.onNotificationSee(notification => {
  //You'll get the notification object.
});
```