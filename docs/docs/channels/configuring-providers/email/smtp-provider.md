---
sidebar_position: 4
---
# SMTP Provider

SMTP Provider allows your to deliver notifications via email channel using any SMTP server of your choice.

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of SMTP provider is `smtp_email`

## Enabling SMTP Provider

To enable SMTP provider, login to your Engagespot dashboard, goto Channels -> Email and enable SMTP Provider.

:::info

SMTP email provider uses `email` attribute in your user's [profile](../../../profile/what-are-user-profiles.mdx) as the primary address to deliver the notifications. So make sure your user's profile has the `email` attribute set.

:::

## SMTP Provider Configurations.

SMTP Provider requires the following configurations.

We make use of the powerful `nodemailer` to send your notifications when you choose SMTP provider. That means you can use all the features of nodemailer through our API.

| Configuration | Description                                          | Required | Example        |
| ------------- | ---------------------------------------------------- | -------- | -------------- |
| SMTP_HOST     | Hostname of SMTP server without any protocol prefix. | Yes      | smtp.gmail.com |
| SMTP_PORT     | SMTP port of the server                              | Yes      | 25             |
| SMTP_USERNAME | Username of your SMTP Server                         | Yes      | me@gmail.com   |
| SMTP_PASSWORD | Password of your SMTP Server                         | Yes      | password123@   |
| SECURE        | Whether SMTP server needs secure authentication      | No       | false          |
| REQUIRE_TLS   | Whether SMTP Server requires TLS Authentication      | No       | true           |
| FROM_NAME     | Default from name                                    | No       | Anand          |
| FROM_EMAIL    | Default from email                                   | No       | me@example.com |

## Overriding Configurations

SMTP provider allows you to override all the above configurations (and you can specify several more options) while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override` parameter of the above API. As mentioned above, you can use any supported parameter for `nodemailer` in the `override` parameter!

For example,

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
    "smtp_email": {
      "_config": {
        "SMTP_HOST": "smtp.gmail.com",
        "SMTP_PORT": 25,
        "SMTP_USERNAME": "me@gmail.com",
        "SMTP_PASSWORD": "password23@",
        "SECURE": true,
        "REQUIRE_TLS": true
      },
      "FROM_NAME": "Anand",
      "FROM_EMAIL": "anand@example.com",
      "subject": "Custom email subject",
      "text": "Email body plaintext",
      "html": "Email body with <h1>HTML</h1> support",
      "headers": {
        "key": "value"
      },
      "attachments": {}
    }
  }
}
```
