# Gupshup WhatsApp

Gupshup is a partner that provides WhatsApp APIs. If you already have a Gupshup Whatsapp API account, you can integrate it with Engagespot just by connecting your account.

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of Gupshup WhatsApp provider is `gupshup_whatsapp`

## Enabling Gupshup provider

To enable Gupshup provider for WhatsApp, login to your Engagespot dashboard, goto Channels -> WhatsApp and enable Gupshup. The following details are required from your Gupshup account.

|    Key     |            Description            | Required |
| -----------|-----------------------------------|----------|
| API_KEY    | API Key of your Gupshup account, which can be seen by clicking on the top right profile icon in your gupshup dashboard. | Yes |
| SOURCE     | The **from Number** of your WhatsApp created in Gupshup. It should be copied exactly as shown on your gupshup dashboard. | Yes |
|  SRC_NAME    | The name of the Gupshup application you've created for Whatsapp. It can be found in your Gupshup dashboard. | Yes |


## User Profile Requirement

Gupshup WhatsApp Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` should have country code without any spaces or special characters. Example `+919988776655` is a valid number whereas `(457)-746-846` is an invalid number.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.

## Advanced Delivery Tracking
If you want the delivery status of your WhatsApp notifications to be available in Engagespot, you have to specify a call back URL in your Gupshup account.

1. For this, open your Gupshup App, then look for the section titled - **Callback URL / Link your Bot**
Paste the following URL into the input field and click **Set** button.

```
https://analytics.egspt.co/api/v1/apps/YOUR_ENGAGESPOT_APP_API_KEY/webhook/gupshup_whatsapp
```
Make sure to add your Engagespot app's API Key in the above URL, or else tracking won't work.

2. As the next step, in your gupshup dashboard, look for a section titled **Message Events**. Check all events, so all those events can be tracked by Engagespot.

### What events can be tracked?

Currently, Engagespot tracks the following events from your Gupshup WhatsApp API.

|     Event      |            Description             |
|----------------|------------------------------------|
| sent           |This is a status from Engagespot. This means, your notification has been successfully accepted by Gupshup API. But that may not guarantee delivery. |
| delivered      |Your WhatsApp message has been delivered to your user, but has not been seen yet |
| seen           |Your WhatsApp message was seen by the user. This event is tracked only for users who have turned on `read reciepts` in their WhatsApp account |
| discarded      |For some reason, your message was not delivered. There will be an explanation along with the status |

## Overriding Gupshup Configuration and notification data via API

Gupshup provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.gushup_whatsapp` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to Gupshup WhatsApp API Body [See doc](https://docs.gupshup.io/reference/msg).