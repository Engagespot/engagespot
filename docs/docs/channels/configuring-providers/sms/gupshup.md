# Gupshup SMS

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of Gupshup SMS provider is `gupshup_sms`

## Enabling Gupshup provider

To enable Gupshup provider, login to your Engagespot dashboard, goto Channels -> SMS and enable Gupshup. The following details are required from your Gupshup account.

|    Key     |            Description            | Required |
| -----------|-----------------------------------|----------|
| API_KEY    | API Key of your Gupshup account, which can be seen by clicking on the top right profile icon in your gupshup dashboard. | Yes |
| SOURCE     | The sender ID associated with the approved template message. It's a field specific to DLT template for Indian businesses | Required only for India |
|  APP_ID    | An app's appid can be found in the cURL request generated on the gupshup dashboard, and also on the app URL. It looks like d7233f89-bf13-27e4-70d1-a981b1427249 | Yes |




## User Profile Requirement

Gupshup SMS Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` should have country code without any spaces or special characters. Example `+919988776655` is a valid number whereas `(457)-746-846` is an invalid number.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.

## Overriding Gupshup Configuration and notification data via API

Gupshup provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.gushup_sms` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to Gupshup SMS API Body [See doc](https://www.gupshup.io/developer/docs/bot-platform/guide/international-sms-api-documentation-en#outboundTextMessage).