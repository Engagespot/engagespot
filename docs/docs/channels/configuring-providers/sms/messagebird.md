# MessageBird SMS

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of MessageBird SMS provider is `messagebird_sms`

## Enabling MessageBird provider

To enable MessageBird provider, login to your Engagespot dashboard, goto Channels -> SMS and enable MessageBird. The following details are required from your MessageBird account.

|    Key     |            Description            | Required |
| -----------|-----------------------------------|----------|
| API_KEY  | You can find API KEY from Developers > Api access, in your MessageBird dashboard. | Yes |
| FROM_NUMBER | The number you purchased in MessageBird to send SMS. Should be in the format with country code, without any spaces. For eg: +16453454679 | Yes |


## User Profile Requirement

MessageBird SMS Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` should have country code without any spaces or special characters. Example `+919988776655` is a valid number whereas `(457)-746-846` is an invalid number.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.

## Overriding MessageBird Configuration and notification data via API

MessageBird provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.messagebird_sms` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to MessageBird SMS API Body [See doc](https://developers.messagebird.com/quickstarts/sms-overview/).