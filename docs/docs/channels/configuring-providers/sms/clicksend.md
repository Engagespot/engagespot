# ClickSend SMS

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of ClickSend SMS provider is `clicksend_sms`

## Enabling ClickSend provider

To enable ClickSend provider, login to your Engagespot dashboard, goto Channels -> SMS and enable ClickSend. The following details are required from your ClickSend account.

|    Key     |            Description            | Required |
| -----------|-----------------------------------|----------|
| API_USERNAME | You can find USERNAME from your Account Settings in your ClickSend dashboard. | Yes |
| API_KEY  | You can find API KEY from your Account Settings in your ClickSend dashboard. | Yes |
| FROM_NUMBER | The number you purchased in ClickSend to send SMS. Should be in the format with country code, without any spaces. For eg: +16453454679 | Yes |



## User Profile Requirement

Gupshup SMS Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` should have country code without any spaces or special characters. Example `+919988776655` is a valid number whereas `(457)-746-846` is an invalid number.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.

## Overriding ClickSend Configuration and notification data via API

ClickSend provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.clicksend_sms` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to ClickSend SMS API Body [See doc](https://developers.clicksend.com/docs/rest/v3/?shell#send-sms).

Keep in mind that in ClickSend documentation, they show examples of sending multiple messages(SMSes). But since we are only sending one message(SMS) directly to a user, only pass the body content of a single message(SMS) in your `override.clicksend_sms` parameter

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
    "clicksend_sms": {
      "_config": {
        "API_USERNAME": "ANNHYAAJMLCPWRWGCNBSKHFY",
        "API_KEY": "ANNHYAAJMLCPWRWGCNBSKHFY",
      },
      "from": "+61422222222",
      "body": "test message, please ignore",
      "to": "+61411111111",
      "source": "php",
      "schedule": 1681894200,
      "custom_string": "custom string",
      "list_id": 23,
      "country": "US",
      "from_email": "joe@gmail.com",
    }
  }
}
```

Within the override object of a provider, there is a `_config` property where you can override the default configurations defined in Engagespot dashboard for that provider. This property will be removed before merging the override object with providers API.
