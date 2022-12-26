# Gupshup SMS

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of Gupshup SMS provider is `gupshup_sms`

## Enabling Gupshup provider

To enable Gupshup provider, login to your Engagespot dashboard, goto Channels -> SMS and enable Gupshup. The following details are required from your Gupshup account.

|    Key     |            Description            | Required |
| -----------|-----------------------------------|----------|
| USER_ID    | USER ID of your Gupshup account. | Yes |
| PASSWORD     | The password used to log on to the Enterprise SMS Gupshup dashboard. | Yes |
|  SENDER    | Sender id to be sent with the SMS. It has to be preconfigured 6
characters alphabetical sender id for the enterprise account. | Yes |
|  DLT_PRINCIPAL_ENTITY_ID    | The Entity ID registered with the DLT platform. Every entity has to
register themselves on operators DLT portal to send messages. | Only for India |




## User Profile Requirement

Gupshup SMS Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` should have country code without any spaces or special characters. Example `+919988776655` is a valid number whereas `(457)-746-846` is an invalid number.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.

## Overriding Gupshup Configuration and notification data via API

Gupshup provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.gushup_sms` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to Gupshup SMS API Body [See doc](https://enterprise.smsgupshup.com/help/in/EnterpriseAPIDocument.pdf).