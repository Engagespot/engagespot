# Smooch WhatsApp

[Smooch](https://www.zendesk.com/platform/conversations/)(Currently known as Sunshine Conversations) is a partner that provides WhatsApp APIs. If you already have a Smooch Whatsapp API account, you can integrate it with Engagespot just by connecting your account.

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of Smooch WhatsApp provider is `smooch_whatsapp`

## Enabling Smooch provider

To enable Smooch provider for WhatsApp, login to your Engagespot dashboard, goto Channels -> WhatsApp and enable Smooch. The following details are required from your Smooch account.

|    Key     |            Description            | Required |
| -----------|-----------------------------------|----------|
| APP_ID  | You can find your API_ID from Smooch dashboard -> Your Selected App -> Settings -> APP ID | Yes |
| API_ID | You can find your API_ID from Smooch dashboard -> Your Selected App -> Settings -> API keys -> ID | Yes |
| API_SECRET  | You can find your API_ID from Smooch dashboard -> Your Selected App -> Settings -> API keys -> SECRET | Yes |
| INTEGRATION_ID  | You can find your INTEGRATION_ID by calling this Api -> [List Integrations](https://docs.smooch.io/rest/v1/#list-integrations), in the response you should see all your integrations | Yes |


## User Profile Requirement

Smooch WhatsApp Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` should have country code without any spaces or special characters. Example `+919988776655` is a valid number whereas `(457)-746-846` is an invalid number.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.

## Advanced Delivery Tracking
It is **strongly advised** to follow the steps below for complete integration. Adding a webhook is the only way to receive timely updates on the result of the process after the message has been sent.

If you want the delivery status of your WhatsApp notifications to be available in Engagespot, you have to specify a call back URL in your Smooch account.

1. To do this, go to the Smooch Dashboard and choose your app. Then, click on **Integrations** in the header section. On the Integrations page, select **API & Webhooks** from the sidebar categories. Finally, click on the **Webhooks** card
2. After clicking on the Webhooks card, you will be directed to the Webhooks page. On the left side, below the logo, there is a **Configure** button. Click on it
3. You will be directed to the Webhooks page. Click on the **Create a Webhook** button and a modal will appear
4. In the Create a Webhook modal, first paste the following URL into the **Webhook URL** input field

```
https://analytics.egspt.co/api/v1/apps/YOUR_ENGAGESPOT_APP_API_KEY/webhook/smooch_whatsapp
```
Make sure to add your Engagespot app's API Key in the above URL, or else tracking won't work.

5. then select the **Version 1.1**.
6. then select the following Basic Triggers - **All basic triggers**
7. finally click on  **Create webhook** button.

### What events can be tracked?

Currently, Engagespot tracks the following events from your Smooch WhatsApp API.

|     Event      |            Description             |
|----------------|------------------------------------|
| sent           |This is a status from Engagespot. This means, your notification has been successfully accepted by Smooch API. But that may not guarantee delivery. |
| delivered      |Your WhatsApp message has been delivered to your user, but has not been seen yet |
| seen           |Your WhatsApp message was seen by the user. This event is tracked only for users who have turned on `read reciepts` in their WhatsApp account |
| discarded      |For some reason, your message was not delivered. There will be an explanation along with the status |

## Overriding Smooch Configuration and notification data via API

Smooch provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.smooch_whatsapp` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to Smooch WhatsApp API Body [See doc](https://docs.smooch.io/rest/v1/#post-notification).

By default, engagespot simply sends text messages to the user. However, you can send the recipient any of the following [Message Types](https://docs.smooch.io/rest/v1/#message-types), from location to image, by simply overriding the notification and specifying the message in `override.smooch_whatsapp.message`. For this demonstration, we'll use the message type Image to override the notification.

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
     "smooch_whatsapp": {
          "message": {
               "type": "image",
               "text": "Check out the best notification infrastructure ....EngageSpot",
               "mediaUrl": "https://engagespot.co/assets/images/engagespot_logo_big.png",
               "altText": "A tasty pizza",
               "actions": [
                    {
                         "text": "More info",
                         "type": "link",
                         "uri": "https://engagespot.co/"
                    }
               ]
          }
     }
    }
}
```

Within the override object of a provider, there is a `_config` property where you can override the default configurations defined in Engagespot dashboard for that provider. This property will be removed before merging the override object with providers API.
