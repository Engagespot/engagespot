---
tags: [js-core]
---

# Engagespot JS Core SDK Spec

Engagespot JS Core is the core library for front-end operations (excluding any UI components), and is the primary dependency for every front-end SDKs such as React, Browser etc.

This document helps you understand how to use JSCore.

## Initialize the SDK

Get your Engagespot API Key from the App Settings tab on the dashboard and use the following snippet to initialize the SDK.
Please note that API_KEY and API_SECRET are different. API_SECRET should never be used on the front-end.

```javascript
const apiKey = 'ENGAGESPOT-API-KEY';
const options = {
  userId:
    "Unique Id used to identify the logged in user. This can be the user's email, username, numerical id or anything!",
  userSignature:
    'Signature that is generated from backend. (Required only for apps that has signature verification turned on)',
};
const engagespot = new Engagespot(apiKey, options);
```

I will try to add a few more information about each of the parameters mentioned in the above example.

### userID

As you know, Engagespot is built for building user-specific notifications in your app. So, every user in your app must uniquely identify themselves to the Engagespot CoreJS Client. Also, keep in mind that, this same identifier is needed when you want to send a notification to this user later. So, you can either use the user's email id, or a unique username, or a numerical user id or whatever it is.

If you're smart, you might have already understood a potential security risk in this approach. What if your app user somehow tries to fake their identity with a different value (For example, if they try to identify using another user's email id?). Yes, it's possible. We'll never be able to authenticate securely from any client-side interface. This is why it is recommended to use the `userSignature` parameter.

### userSignature

userSignature is an additional signed Signature generated using your app's API_SECRET from your secure backend. This signed value should be passed to your front-end (via an API call or something), and then you should pass this value to the Engagespot JSCore client.

This ensures none of your users can fake their identity!

### Full List of Available Options

| Option                    | Type                      | Required?                                | Description                                                                      | Example                  |
| ------------------------- | ------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------- | ------------------------ |
| userId                    | String                    | Yes                                      | Unique id to identify your app user                                              | abcd@example.com         |
| userSignature             | String                    | Yes if HMAC Auth is Enabled in Dashboard | Added Security Signature                                                         | 4bJshlAop96gbrlGq2Cxlp=  |
| enableNonHttpsWebPush     | Boolean                   | No                                       | Enable WebPush Notification for non HTTPS browsers                               |                          |
| serviceWorkerRegistration | ServiceWorkerRegistration | No                                       | If your website already have a serviceWorker registered, just pass that variable |                          |
| endPointOverride          | String                    | No                                       | Can be used for internal testing, to ovveride API Base URL                       | https://localhost/api/v2 |

## Events

Engagespot server sends several events to notify core. These events can be subscribed by one or more listener functions.

| Event                | Description                         | Subscriber Function   | Input Passed to Listeners      |
| -------------------- | ----------------------------------- | --------------------- | ------------------------------ |
| NEW_NOTIFICATION     | When a new notification is received | onNotificationReceive | notification: NotificationItem |
| NOTIFICATION_SEEN    | When a notification is seen by user | onNotificationSee     | notificationId: number         |
| NOTIFICATION_CLICKED | When a notification is clicked      | onNotificationClick   | notificationId: number         |
| NOTIFICATION_DELETED | When a notification is deleted      | onNotificationDelete  | notificationId: number         |

## NotificationList

Engagespot stores all notifications in a `NotificationList` object.
To get the list of notifications anytime, use

```javascript
const notificationList = engagespot.getNotificationList();
```

This returns an `NotificationList` object.

Use the `fetch()` method to pull the notifications from server, and refresh the `NotificationList` object.
The `fetch()` method accepts two parameters.

| Param        | Type   | Description            | Default Value |
| ------------ | ------ | ---------------------- | ------------- |
| page         | Number | Page Number to Fetch   | 1             |
| itemsPerPage | Number | Notifications Per Page | 15            |

```javascript
notificationList.fetch(1, 15);
```

### Reading Notifications from NotificationList

To read the notifications from NotificationList object (Make sure you've called the `fetch()` method first), use

```javascript
const notifications = notificationList.data;
```

This returns `NotificationItem[]`

### Marking all Items in the list as Seen

```javascript
notificationList.markAllAsSeen();
```

## NotificationItem

`NotificationItem` represents a single Notification entity.

### Fetch a Notification (Also Marks it as Seen)

```javascript
notificationItem.fetch();
```

### Mark a Notification as Clicked

```javascript
notificationItem.markAsClicked();
```

### Delete a Notification

```javascript
notificationItem.delete();
```

## Event Listeners

Engagespot JSCore allows you to subscribe to pre-defined events, so that you'll get a callback to handle the event.
As of now, the following events can be subscribed.

### Notification Received

This event is triggered whenever a notification is received.

```javascript
engagespot.onRealtimeNotificationRecieve = (
  notification: NotificationItem
) => {};
```

### Notification Clicked

This event is triggered whenever a notification is clicked.

```javascript
engagespot.onNotificationClick = (notificationId: number) => {};
```

### Notification Deleted

This event is triggered whenever a notification is deleted.

```javascript
engagespot.onNotificationDelete = (notificationId: number) => {};
```

### Notification Seen

This event is triggered whenever a notification is seen.

```javascript
engagespot.onNotificationSee = (notificationId: number) => {};
```
