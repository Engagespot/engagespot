# Textlocal SMS

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of Textlocal SMS provider is `textlocal_sms`

## Enabling Textlocal provider

To enable Textlocal provider, login to your Engagespot dashboard, goto Channels -> SMS and enable Textlocal. The following details are required from your Textlocal account.

|    Key     |            Description            | Required |
| -----------|-----------------------------------|----------|
| API_KEY | API Key of your Textlocal account which can be accessed from Settings > API Keys of your Textlocal dashboard. | Yes |
| SENDER  | The sender ID or number that you verified in your textlocal account | Yes |


## User Profile Requirement

Textlocal SMS Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` should have country code without any spaces or special characters. Example `+919988776655` is a valid number whereas `(457)-746-846` is an invalid number.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.

## Overriding Textlocal Configuration and notification data via API

Textlocal provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.textlocal_sms` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to Textlocal SMS API Body [See doc](https://api.textlocal.in/docs/sendsms).