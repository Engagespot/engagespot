# Plivo SMS

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of Plivo SMS provider is `plivo_sms`

## Enabling Plivo SMS provider

To enable Plivo SMS provider, login to your Engagespot dashboard, goto Channels -> SMS and enable Plivo. The following details are required from your Plivo account.

|    Key     |            Description            | Required |
| -----------|-----------------------------------|----------|
| AUTH_ID    | You can find your AUTH ID and AUTH TOKEN on the Overview page of the Plivo console. | Yes |
| AUTH_TOKEN     | You can find your AUTH ID and AUTH TOKEN on the Overview page of the Plivo console. | Yes |
|  SENDER    | Sender id to be sent with the SMS. It has to be preconfigured 6 characters alphabetical sender id for the enterprise account. | Yes |


## User Profile Requirement

Plivo SMS Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` should have country code without any spaces or special characters. Example `+919988776655` is a valid number whereas `(457)-746-846` is an invalid number.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.

## Overriding Plivo Configuration and notification data via API

Plivo SMS provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.plivo_sms` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to Plivo SMS API Body [See doc](https://enterprise.smsPlivo.com/help/in/EnterpriseAPIDocument.pdf).