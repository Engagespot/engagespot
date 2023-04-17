# Sinch SMS

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of Twilio SMS provider is `sinch_sms`

## Enabling Sinch provider

To enable Sinch provider, login to your Engagespot dashboard, goto Channels -> SMS and enable Sinch. The following details are required from your Sinch account.

|    Key     |            Description            | Required |
| -----------|-----------------------------------|----------|
| SERVICE_PLAN_ID | You can find your SERVICE_PLAN_ID from your account SMS -> Service APIs page in Sinch dashboard. | Yes |
| REGION  | You can find your region from your account SMS -> Service APIs page in Sinch dashboard. By default, your account will be created in the US environment,you can find more about configuring region [here](https://developers.sinch.com/docs/sms/api-reference/#base-url) | Yes |
| FROM_NUMBER | The number you purchased in Sinch to send SMS. Should be in the format with country code, without any spaces. For eg: +16453454679 | Yes |
| API_TOKEN  | You can find your auth token from your account SMS -> Service APIs page in Sinch dashboard. | Yes |



## User Profile Requirement

Sinch SMS Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` can be sent with or without a leading + (for example, +123456789 or 123456789 are both valid or with a leading 00. Any space, dash, or bracket will also be ignored by the API.

All phone numbers returned by the REST API will be without a + or 00 prefix, even if they were sent with one.

Note: engagespot recommend that you should have country code without any spaces or special characters.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.

## Overriding Sinch Configuration and notification data via API

Sinch provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.sinch_sms` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to Sinch SMS API Body [See doc](https://developers.sinch.com/docs/sms/api-reference/sms/tag/Batches/#tag/Batches/operation/SendSMS).