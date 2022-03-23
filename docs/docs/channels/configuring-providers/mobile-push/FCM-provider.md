# FCM Mobile Push Provider

You can setup Firebase Cloud Messaging (FCM) to send push notification to your user's Android and iOS devices.

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of FCM provider is `fcm`

## Enabling FCM Push Provider

To enable FCM provider, login to your Engagespot dashboard, goto Channels -> Mobile Push and enable FCM. You'll have to paste the content of your Service Account JSON file, which you can generate from your Firebase Settings. Read [Firebase documentation](https://firebase.google.com/docs/admin/setup#initialize-sdk) to learn how to generate your Service Account JSON File.

## User Profile Requirement

FCM Provider uses the `fcm.tokens` array in your [User's profile](../../../profile/what-are-user-profiles.mdx) to send notifications to them. That means, you should update the `fcm.tokens` array in your User's profile whenever you generate a Firebase Registration Token in your mobile device.

```json
{
  "fcm": {
    "tokens": [
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiWW91J3JlIGN1cmlvdXMuIEkga25ldyB0aGF0IDspIiwiaWF0IjoxNTE2MjM5MDIyfQ.wX_bk-4l31K51hx8ybf_dabFwT5BQH72aj3hfwLMRBw"
    ]
  }
}
```

You should use the `PATCH` or `PUT` method of the `/profile` API ([Read Docs](/docs/rest-api/#tag/Profile)) to add an FCM token to user's profile.

:::info
Please note that, when you create a new User, they won't have the `fcm` object or `fcm.tokens` array. You can pass your user's FCM Token via `fcm.token` property via `PUT` [request](../../../rest-api#tag/Profile/paths/~1v3~1profile/put). When you add more tokens, we'll keep adding them to `fcm.tokens` array.
:::

### Example

This is how you can attach a new FCM Token to user's profile.

```bash
curl --location --request POST 'https://api.engagespot.co/v3/profile' \
--header 'X-ENGAGESPOT-API-KEY: YOUR_ENGAGESPOT_API_KEY' \
--header 'X-ENGAGESPOT-API-SECRET: YOUR_ENGAGESPOT_API_SECRET' \
--header 'Content-Type: application/json' \
--data-raw '{
    "fcm":{
        "token":"chl1uB1qn0C6tWJbtQWCvO:APA91bEmkhPKOTgJNQI3RTt2QlCbFZk6yi2TAuRmUlwIHtfWZHWw9LzChSrCRBqvDxMysS84GJE_HOjPDafRNj4_EezuKycXJZz18k_VMyGm6n13vea3N8FXESqfzGkxQpbmRk-tL1hE"
    }
}'
```

## FCM Provider Configurations.

FCM Provider needs only one configuration, that is the `SERVICE_ACCOUNT` Json.

| Configuration   | Description                                                                               | Required |
| --------------- | ----------------------------------------------------------------------------------------- | -------- |
| SERVICE_ACCOUNT | Content of the Service Account JSON file created from your Firebase project settings page | Yes      |

The content of your firebase service account json looks like this.

```json
{
  "type": "service_account",
  "project_id": "projectda017",
  "private_key_id": "e63a83f197bbcd55b36cba7879",
  "private_key": "PRIVATE KEY",
  "client_email": "firebase-adminsdk-2vfy4@yourproject-da07.iam.gserviceaccount.com",
  "client_id": "105673140109646291992",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2vfy4%yourproject-da07.iam.gserviceaccount.com"
}
```

## Overriding FCM Configuration and Notification Data via API

FCM provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.fcm` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to FCM API Body [See doc](https://firebase.google.com/docs/cloud-messaging/android/send-multiple#build_send_requests).

By default your Engagespot notification's `title`, `message` parameters will be passed to FCM's `title`, `body` respectively, and any other paramaters in the `data` payload.
