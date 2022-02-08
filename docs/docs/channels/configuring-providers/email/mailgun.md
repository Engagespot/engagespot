# Mailgun

Use your own Mailgun account to deliver notifications to your users via Engagespot. For this you need a Mailgun account, and few other credentials from Mailgun.

## Unique Identifier

Each provider is identified by a unique identifier. Unique identifier of Mailgun provider is `mailgun`

## Enabling Mailgun Provider

To enable Mailgun provider, login to your Engagespot dashboard, goto Channels -> Email and enable Mailgun Provider.

:::info

Mailgun email provider uses `email` attribute in your user's profile as the primary address to deliver the notifications. So make sure your user's profile has the `email` attribute set.

:::

## Mailgun Provider Configurations.

Mailgun Provider requires the following configurations.

| Configuration | Description                    | Required | Example                                             |
| ------------- | ------------------------------ | -------- | --------------------------------------------------- |
| apiKey        | Your Mailgun API Key           | Yes      | 21b20a854e3df1ac46cb3aa2b9c6fd314                   |
| region        | Region of your Mailgun account | Yes      | It should be either US or EU                        |
| domain        | Your registered Mailgun Domain | Yes      | sandboxb9e650f115fc4f55beer32b60c33fc98.mailgun.org |
| fromEmail     | From email address             | Yes      | noreply@myapp.com                                   |

## How we send email via Mailgun?

We simply use Mailgun API to deliver your notifications. By default, if you donot override anything, we'll consider your `notification.title` as the email subject, a combination of your `notification.title` and `notification.message` as your email's body (Plain text), and if you have specified `notification.url`, we will add a default button to your email with **Click Here** label.

## Overriding Configurations

Mailgun provider allows you to override all the above configurations (and you can specify several more options) while sending a notification through Engagespot API, using the `https://api.engagespot.co/v3/notifications` endpoint.

To override the configurations, you must supply them via `override.mailgun` parameter of the above API. Within the `override` parameter, you can supply any parameter that we'll directly pass to Mailgun `/v3/mail/send` API [See doc](https://documentation.mailgun.com/en/latest/api-sending.html#sending). This makes sure you can use the complete features of Mailgun API while still using Engagespot to control your notifications!

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
    "mailgun": {
      "_config": {
        "API_KEY": "21b20a854e3df1ac46cb3aa2b9c6fd314"
      },
      "subject": "Hey, I'm overriding the subject",
      "html": "I want more content in my email <b>notification</b>"
    }
  }
}
```

Within the override object of a provider, there is a `_config` property where you can override the default configurations defined in Engagespot dashboard for that provider. This property will be removed before merging the override object with providers API.
