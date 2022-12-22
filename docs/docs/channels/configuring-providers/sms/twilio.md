# Twilio SMS

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of Twilio SMS provider is `twilio_sms`

## Enabling Twilio provider

To enable Twilio provider, login to your Engagespot dashboard, goto Channels -> SMS and enable Twilio. The following details are required from your Twilio account.

|    Key     |            Description            | Required |
| -----------|-----------------------------------|----------|
| TWILIO_ACCOUNT_SID | You can find your account SID from your account info page in Twilio dashboard. | Yes |
| TWILIO_AUTH_TOKEN  | You can find your auth token from your account info page in Twilio dashboard. | Yes |
| TWILIO_FROM_NUMBER | The number you purchased in Twilio to send SMS. Should be in the format with country code, without any spaces. For eg: +16453454679 | Yes |


## User Profile Requirement

Twilio SMS Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` should have country code without any spaces or special characters. Example `+919988776655` is a valid number whereas `(457)-746-846` is an invalid number.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.