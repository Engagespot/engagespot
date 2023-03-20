---
sidebar_position: 4
---

# Android and iOS quick start

In this chapter, we will learn how to quickly setup Engagespot in your Android and iOS App. At the moment, we don't have UI-Kit and Realtime Notifications for Android and iOS. Features you can use in Android and iOS are -

1. Push Notifications using Firebase
2. Notification Inbox using REST API
3. Notification Preference Manager

## Enabling FCM Provider

We use Firebase Cloud Messaging (FCM) to deliver push notifications to your Android and iOS Apps. To enable FCM, login to your Engagespot dashboard. Enable FCM from Channels -> Mobile push menu. To enable FCM, you need to paste the content of your service account JSON which can be generated from your Google Firebase dashboard. Read [Firebase documentation](https://firebase.google.com/docs/admin/setup#initialize-sdk) to learn how to generate your Service Account JSON File.

## Authenticating your App's user with Engagespot

As explained in the [Basic Concepts](./understanding-concepts.md) chapter, you should pass any unique identifier of your app's user to Engagespot. Since Engagespot doesn't have a native Android & iOS SDK, we'll use REST APIs to implement this.

For authenticating your app's user with Engagespot, you must call the `/sdk/connect` endpoint of our REST API. This API call should be implemented at the authentication step of your app.

**POST** `/sdk/connect` [Read API Doc](/docs/rest-api#tag/SDK/paths/~1v3~1sdk~1connect/post)

:::info
Please read the [API Doc](/docs/rest-api#tag/SDK/paths/~1v3~1sdk~1connect/post) to know more about the required headers & parameters.
:::

This API will return `200 OK` if your user has been authenticated with Engagespot.

## Listing Notifications

To build an In-App notification center in your Android or iOS app, you can use the List Notifications API to list all the notifications for the current user, you should use the **GET** `/notifications` endpoint. [Read API Doc](/docs/rest-api#tag/Notifications/paths/~1v3~1notifications/get).

You will also get the un-read notifications count from this API.

## Updating Notification Statuses

You can update the notification statuses using the following APIs.

* GET <a href="/docs/rest-api#tag/Notifications/paths/~1v3~1notifications~1428107/get">`/notifications/:notificationId`</a> - Fetch the details of a specific notification, and also mark it as `seen` by the user.
* POST <a href="/docs/rest-api#tag/Notifications/paths/~1v3~1notifications~1%7BnotificationId%7D~1click/post">`/notifications/:notificationId/click`</a> - Mark a notification as `read` by the user.
* DELETE <a href="/docs/rest-api#tag/Notifications/paths/~1v3~1notifications~1%7BnotificationId%7D~1reads/delete">`/notifications/:notificationId/reads`</a> Mark a notification as `unread` by the user. Please note that `read` and `seen` are two events. `read` is synonymous to `clicked`, whereas `seen` refers to the event of opening the notification center and just seeing the notification.
* DELETE <a href="/docs/rest-api#tag/Notifications/paths/~1v3~1notifications~1428019~1/delete">`/notifications/:notificationId/reads`</a> Delete a notification

## Sending Notifications

In the next chapter, we'll learn how to send notifications to users.

## Building a Notification Preference Manager

You can quickly build a notification preference manager in your app to help your users set their notification preferences. Please read [How to build a Notification Preference Manager](../learn-by-examples/notification-preference-center/concepts.md).

## Enabling Other Notifications Channels

Now we've implemented only Mobile Push notifications. As mentioned in the [Basic Concepts chapter](./understanding-concepts.md), Engagespot can deliver the same notification via multiple channels like Email, Web Push, Mobile Push, SMS etc. To enable more channels, please read [Configuring Providers](../channels/what-are-providers.md) guide.
