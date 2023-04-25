---
sidebar_position: 1
---

# Mandrill

You can send email notifications through Mandrill transactional email API.

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of Mandrill provider is `mandrill_email`

## Enabling Mandrill Provider

To enable Mandrill provider, login to your Engagespot dashboard, goto Channels -> Email and enable Mandrill Provider.

:::info

Mandrill email provider uses `email` attribute in your user's [profile](../../../profile/what-are-user-profiles.mdx) as the primary address to deliver the notifications. So make sure your user's profile has the `email` attribute set.

:::

## Mandrill Provider Configurations.

Mandrill Provider requires the following configurations.

| Configuration | Description           | Required | Example                           |
| ------------- | --------------------- | -------- | --------------------------------- |
| API_KEY       | Your Mandrill API Key | Yes      | 21b20a854e3df1ac46cb3aa2b9c6fd314 |
| FROM_EMAIL    | Sender email address    | Yes      | noreply@myapp.com                 |
| FROM_NAME     | Sender name    | Yes      | john doe                          |


## Overriding Configurations

Mandrill provider allows you to override all the above configurations (and you can specify several more options) while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.mandrill_email` parameter of the above API. Within the `override` parameter, you can supply any parameter that we'll directly pass to Mandrill `/messages/send` API [See doc](https://mailchimp.com/developer/transactional/api/messages/send-new-message). This makes sure you can use the complete features of Mandrill API while still using Engagespot to control your notifications!

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
    "mandrill_email": {
      "_config": {
        "API_KEY": "21b20a854e3df1ac46cb3aa2b9c6fd314"
      },
      "message": {
        "subject": "Hey, I'm overriding the subject",
        "html": "I want more content in my email <b>notification</b>",
        "whatever": "keys and values you pass here will be directly sent to Mandrill's Send API 🎉"
      }
    }
  }
}
```

Within the override object of a provider, there is a `_config` property where you can override the default configurations defined in Engagespot dashboard for that provider. This property will be removed before merging the override object with providers API.
