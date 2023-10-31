# Infobip WhatsApp

[Infobip](https://www.infobip.com/) is a partner that provides WhatsApp APIs. If you already have a Infobip Whatsapp API account, you can integrate it with Engagespot just by connecting your account.

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of Infobip WhatsApp provider is `infobip_whatsapp`

## Enabling Infobip provider

To enable Infobip provider for WhatsApp, login to your Engagespot dashboard, goto Channels -> WhatsApp and enable Infobip. The following details are required from your Infobip account.

|    Key     |            Description            | Required |
| -----------|-----------------------------------|----------|
| API_KEY  | You can find your API_KEY from Infobip dashboard -> Developer Tools -> API keys | Yes |
| FROM_NUMBER  | The number you purchased in Infobip to send whatsapp messages. Should be in the format with country code, without any spaces. For eg: +16453454679 | Yes |
| ENGAGESPOT_API_KEY | You can find your Engagespot Api Key from your Engagespot dashboard | Yes |


## User Profile Requirement

Infobip WhatsApp Provider uses the `phoneNumber` property in your [User's profile](../../../profile/what-are-user-profiles.mdx). That means, you should update the `phoneNumber` property in your User's profile. The `phoneNumber` should have country code without any spaces or special characters. Example `+919988776655` is a valid number whereas `(457)-746-846` is an invalid number.

To learn how to update your user's phone number in Engagespot, read our [REST API](/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put) or SDK documentation of your language of choice.

## Advanced Delivery Tracking

Infobip provides us with an option to add a webhook via the **notifyUrl** key in their api request body. So you don't have to do anything for advanced delivery tracking, it is automatically added. Just make sure not to override **notifyUrl** key.

### What events can be tracked?

Currently, Engagespot tracks the following events from your Infobip WhatsApp API.

|     Event      |            Description             |
|----------------|------------------------------------|
| sent           |This is a status from Engagespot. This means, your notification has been successfully accepted by Infobip API. But that may not guarantee delivery. |
| delivered      |Your WhatsApp message has been delivered to your user, but has not been seen yet |
| seen           |Your WhatsApp message was seen by the user. This event is tracked only for users who have turned on `read reciepts` in their WhatsApp account |
| discarded      |For some reason, your message was not delivered. There will be an explanation along with the status |

## Sending Whatsapp Messages

By default, your `notification.message`(if not found your `notification.title`) will be send as a text message to your recipient on whatsapp. For other types of messages Infobip provides seperate apis. Here is the list of types of messages you can send and their corresponding api documentation.

### Types of messages and documentation

|     Message Type      |            Documentation             |
|----------------|------------------------------------|
| template      | [See doc](https://www.infobip.com/docs/api/channels/whatsapp/whatsapp-outbound-messages/send-whatsapp-template-message) |
| text     | [See doc](https://www.infobip.com/docs/api/channels/whatsapp/whatsapp-outbound-messages/send-whatsapp-text-message) |
| document     | [See doc](https://www.infobip.com/docs/api/channels/whatsapp/whatsapp-outbound-messages/send-whatsapp-document-message) |
| image     | [See doc](https://www.infobip.com/docs/api/channels/whatsapp/whatsapp-outbound-messages/send-whatsapp-image-message) |
| audio     | [See doc](https://www.infobip.com/docs/api/channels/whatsapp/whatsapp-outbound-messages/send-whatsapp-audio-message) |
| video     | [See doc](https://www.infobip.com/docs/api/channels/whatsapp/whatsapp-outbound-messages/send-whatsapp-video-message) |
| sticker     | [See doc](https://www.infobip.com/docs/api/channels/whatsapp/whatsapp-outbound-messages/send-whatsapp-sticker-message) |
| location     | [See doc](https://www.infobip.com/docs/api/channels/whatsapp/whatsapp-outbound-messages/send-whatsapp-location-message) |
| contact     | [See doc](https://www.infobip.com/docs/api/channels/whatsapp/whatsapp-outbound-messages/send-whatsapp-contact-message) |

### How to send different types of messages

Specify your message type in `notification.data.infobip_whatsapp.type` key, and provide your content in the `override.infobip_whatsapp.content` key. You can also overwrite any key that you want. Note that by default only text api will have a content in it, every other api content will be empty. We'll see how to override data in next section with examples to both template and image message.

## Overriding Infobip Configuration and notification data via API

Infobip provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.infobip_whatsapp` parameter of the above API. Within the `override` parameter, you can supply any object that we'll directly pass to Infobip WhatsApp API Body.

sending a template message example,

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
  "data": {
     "infobip_whatsapp": {
     //   types should be either one of these (default is text)
     // 'template','text','document','image','audio','video','sticker','location','contact'
          "type": "template"
     }
  },
  "override": {
     "infobip_whatsapp": {
            "_config": {
                "API_KEY": "test"
            },
            "content": {
                "templateName": "template_one",
                "templateData": {
                    "body": {
                        "placeholders": [
                            "John Doe"
                        ]
                    }
                },
                "language": "en"
            }
          }
     }
}
```

sending a image message example,

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
  "data": {
     "infobip_whatsapp": {
     //   types should be either one of these (default is text)
     // 'template','text','document','image','audio','video','sticker','location','contact'
          "type": "image"
     }
  },
  "override": {
     "infobip_whatsapp": {
            "_config": {
                "API_KEY": "test"
            },
            "content": {
                "mediaUrl": "http://example.com/image"
            }
          }
     }
}
```

Within the override object of a provider, there is a `_config` property where you can override the default configurations defined in Engagespot dashboard for that provider. This property will be removed before merging the override object with providers API.