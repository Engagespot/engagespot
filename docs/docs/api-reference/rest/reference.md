---
sidebar_position: 6
---

# REST API Reference

Our REST API allows you to send notifications to users on your app, and to do actions like Fetch Notifications, Delete Notification etc on behalf of them.

## Authentication

This API should be authenticated in two ways.

**Authenticate using API-KEY and API-SECRET**

This mode is required when you want to authenticate as your Engagespot app and send a notification to one or more recipients. The credentials can be found in your Engagespot dashboard.

**Authenticate using API-KEY and USER-ID**

This mode should be used when you want to authenticate as your user and want to perform actions on behalf of them. For example, reading the notification inbox of a user, deleting a notification from a user's inbox etc.

These authentication parameters should be passed via headers.

| **Header Parameter**        | **Description**                                                                                                                                                                                                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| X-ENGAGESPOT-API-KEY        | Your Engagespot API Key. You can see this on your Engagespot dashboard.                                                                                                                                                                                                |
| X-ENGAGESPOT-API-SECRET     | Your Engagespot API Secret. You can see this on your Engagespot dashboard. **You should never use this secret on any front-end apps.**                                                                                                                                 |
| X-ENGAGESPOT-USER-ID        | Your user's unique identifier such as their email id that you used to register them on Engagespot.                                                                                                                                                                     |
| X-ENGAGESPOT-USER-SIGNATURE | This is optional. You need this param only if you have turned on Token Authentication for your app in Engagespot Dashboard. Your user's HMAC signature can be generated as follows - `createHmac('sha256', Your_API_Secret).update(user_Id, 'utf8').digest('base64');` |

## `GET` /notifications

This API returns list of notifications for the given user.

```
https://api.engagespot.co/v3/notifications
```

### Headers

| Content-Type                | Value                  |
| --------------------------- | ---------------------- |
| X-ENGAGESPOT-API-KEY        | shiynklpz18l3ktqyy6d9a |
| X-ENGAGESPOT-USER-ID        | yourUser@example.com   |
| X-ENGAGESPOT-USER-SIGNATURE |                        |

## `GET` /notifications/:notificationId

Gets the details of a notification

```
https://api.engagespot.co/v3/notifications/428107
```

### Headers

| Content-Type                | Value                  |
| --------------------------- | ---------------------- |
| X-ENGAGESPOT-API-KEY        | shiynklpz18l3ktqyy6d9a |
| X-ENGAGESPOT-USER-ID        | yourUser@example.com   |
| X-ENGAGESPOT-USER-SIGNATURE |                        |

## `POST` /markAllNotificationsAsSeen

Marks all notifications as "seen" for the given user.

```
https://api.engagespot.co/v3/notifications/markAllNotificationsAsSeen
```

### Headers

| Content-Type                | Value                  |
| --------------------------- | ---------------------- |
| X-ENGAGESPOT-API-KEY        | shiynklpz18l3ktqyy6d9a |
| X-ENGAGESPOT-USER-ID        | yourUser@example.com   |
| X-ENGAGESPOT-USER-SIGNATURE |                        |

## `POST` /notifications

Sends a new notification to one or more recipients.

```
https://api.engagespot.co/v3/notifications
```

### Headers

| Content-Type            | Value                                             |
| ----------------------- | ------------------------------------------------- |
| X-ENGAGESPOT-API-KEY    | od9t6x45udt1m3g0nznag                             |
| X-ENGAGESPOT-API-SECRET | fjtjb5kjsig21at4h1ijdphd1f31726e48372b0deddb29db5 |

### Body

```json
{
  "notification": {
    "title": "Wohoo! Your photo now is becoming popular",
    "message": "Photo you've uploaded has got 1K views in the last 2 days!",
    "icon": "https://cdn-icons-png.flaticon.com/512/1742/1742783.png",
    "url": "https://www.flaticon.com"
  },
  "recipients": ["yourUser@example.com"]
}
```

## `POST` /notifications/:notificationId/click

Marks a notification as clicked.

```
https://api.engagespot.co/v3/notifications/:notificationId/click
```

### Headers

| Content-Type                | Value                  |
| --------------------------- | ---------------------- |
| X-ENGAGESPOT-API-KEY        | shiynklpz18l3ktqyy6d9a |
| X-ENGAGESPOT-USER-ID        | yourUser@example.com   |
| X-ENGAGESPOT-USER-SIGNATURE |                        |

## `DELETE` /notifications/:notificationId

Deletes a notification

```
https://api.engagespot.co/v3/notifications/428019/
```

### Headers

| Content-Type                | Value                  |
| --------------------------- | ---------------------- |
| X-ENGAGESPOT-API-KEY        | shiynklpz18l3ktqyy6d9a |
| X-ENGAGESPOT-USER-ID        | yourUser@example.com   |
| X-ENGAGESPOT-USER-SIGNATURE |                        |
