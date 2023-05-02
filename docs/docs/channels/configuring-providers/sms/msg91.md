# MSG91 SMS

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of MSG91 SMS provider is `msg91_sms`

## Enabling MSG91 provider

To enable MSG91 provider, login to your Engagespot dashboard, goto Channels -> SMS and enable MSG91. The following details are required from your MSG91 account.

|    Key     |            Description            | Required |
| -----------|-----------------------------------|----------|
| AUTH_KEY | You can find AUTH_KEY from your MSG91 panel -> AuthKey. | Yes |
| TEMPLATE_ID  | You can find TEMPLATE_ID from your MSG91 panel -> SMS -> Templates. | Yes |
| SENDER_ID  | You can find SENDER_ID from your MSG91 panel -> SMS -> Sender Id. | Yes |


## User Profile Requirement

MSG91 SMS Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` should have country code without any spaces or special characters. Example `+919988776655` is a valid number whereas `(457)-746-846` is an invalid number.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.

## Advanced Delivery Tracking
It is **strongly advised** to follow the steps below for complete integration. Adding a webhook is the only way to receive timely updates on the result of the process after the notification has been sent.

If you want the delivery status of your SMS notifications to be available in Engagespot, you have to specify a call back URL in your MSG91 account.

1. For this, open your MSG91 panel, click on SMS, then look for the section titled - **Webhook**
Paste the following URL into the input field and click **Save** button.

```
https://analytics.egspt.co/api/v1/apps/YOUR_ENGAGESPOT_APP_API_KEY/webhook/msg91_sms
```
Make sure to add your Engagespot app's API Key in the above URL, or else tracking won't work.

### What events can be tracked?

Currently, Engagespot tracks the following events from your MSG91 SMS API.

|     Event      |            Description             |
|----------------|------------------------------------|
| sent           |This is a status from Engagespot. This means, your notification has been successfully accepted by MSG91 SMS API. But that may not guarantee delivery. |
| delivered      |Your SMS message has been delivered to your user, but has not been seen yet |
| discarded      |For some reason, your message was not delivered. There will be an explanation along with the status |

## How we send sms via MSG91?

We simply use MSG91 API to deliver your notifications. To use MSG91 API, you need to provide a templateId that identifies the content and format of your notification. You can also customize the notification by passing variable values that will replace the placeholders in the template. For example, if your template has a placeholder **##var1##**, you can pass a variable value like **var1=John** to fill it in. To override the default notification settings and send variables, you need to follow some simple steps that are explained in the next section. This way, you can tailor your notifications to suit your needs and preferences.

## Overriding MSG91 Configuration and notification data via API

MSG91 provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.msg91_sms` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to MSG91 SMS API Body [See doc](https://docs.msg91.com/reference/send-sms).

For example,

**POST** `/notifications`

```json
{
  "notification": {
    "title": "Anand commented on your photo",
    "message": "Hey Steve, you're looking cool 😎. Who took this photo?",
    "url": "https://your-app.com/photos/17293739",
    "category": "comment"
  },
  "recipients": ["steve@example.com"],
  "override": {
    "msg91_sms": {
      "_config": {
        "AUTH_KEY": "ANNHYAAJMLCPWRWGCNBSKHFY",
        "TEMPLATE_ID": "ANNHYAAJMLCPWRWGCNBSKHFY",
      },
      "var1": "John Doe",
      "var2": "Jane Doe",
    }
  }
}
```

Within the override object of a provider, there is a `_config` property where you can override the default configurations defined in Engagespot dashboard for that provider. This property will be removed before merging the override object with providers API.
