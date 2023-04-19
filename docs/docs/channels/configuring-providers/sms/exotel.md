# Exotel SMS

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of Exotel SMS provider is `exotel_sms`

## Enabling Exotel provider

To enable Exotel provider, login to your Engagespot dashboard, goto Channels -> SMS and enable Exotel. The following details are required from your Exotel account.

|    Key     |            Description            | Required | Example 
| -----------|-----------------------------------|----------|--------------------|
| API_KEY | You can find your account API_KEY from  Developer Settings -> API Settings page in Exotel dashboard. | Yes |    |
| API_TOKEN  | You can find your API_TOKEN from Developer Settings -> API Settings page in Exotel dashboard. | Yes |   |
| SUBDOMAIN | You can find your SUBDOMAIN from Developer Settings -> API Settings page in Exotel dashboard.(The region of your account)  | Yes | Singapore cluster is api.exotel.com
| ACCOUNT_SID  | You can find your ACCOUNT_SID from Developer Settings -> API Settings  page in Exotel dashboard. | Yes |
| FROM_NUMBER  | You can find your FROM_NUMBER from your  Exotel dashboard. | Yes |




## User Profile Requirement

Exotel SMS Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` should have country code without any spaces or special characters. Example `+919988776655` is a valid number whereas `(457)-746-846` is an invalid number.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.

## Overriding Exotel Configuration and notification data via API

Exotel SMS provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.exotel_sms` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to Exotel SMS API Body [See doc](https://developer.exotel.com/api/sms).

For example,

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
    "exotel_sms": {
      "_config": {
        "API_KEY": "ANNHYAAJMLCPWRWGCNBSKHFY",
        },
        "ShortenUrl" : true,
        "ShortenUrlParams[Tracking]": true,
        "ShortenUrlParams[ClickTrackingCallbackUrl]" : "https://www.google.co.in/"
    }
  },
}
```