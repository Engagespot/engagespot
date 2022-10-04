---
sidebar_position: 2
---

# What are Providers?

If you've read the previous chapter, you know what is a Channel. Now, let's understand about Providers.
Providers are services that enables notification delivery through a particular channel. For example, if you want to deliver notifications through **email** channel, you must use an SMTP server, or an email service such as Sendgrid.

:::tip

To make your life easier, Engagespot provides a default provider for each channel that you can use with zero configuration. If you want more capabilities, Engagespot easily allows you to switch to any other supported third party provider such as Sendgrid.

:::

And guess what, you'll get all the powerful features of Engagespot (such as smart delivery, user preferences etc) even if you switch to your favorite provider!

:::note

Each provider is identified by a unique identifier called **provider identifier**

:::

## Default Providers

We've included one provider in some channels that is enabled by default and needs zero configuration. This helps you to start sending notifications to your users without any third party services.

| Channel | Provider            | Identifier      |
| ------- | ------------------- | --------------- |
| inApp   | Engagespot Inbox    | default_inapp   |
| webPush | Engagespot Web Push | default_webpush |
| email   | Default Email       | default_email   |

For advanced features, you can configure any of the supported third party provider.

## Supported Providers for Each Channel

In addition to the default providers, following Providers supported in each channel.

### In-App Channel Providers

For the In-App channel, currently we support only Engagespot default in-app notification provider with the notification inbox widget. This provider is enabled by default and there is no additional configuration required.

### Web Push Channel Providers

For the Web Push channel, currently we support only Engagespot default web push notification provider. This provider is enabled by default and there is no additional configuration required.

### Email Channel Providers

For Email channel, we support the following providers.

#### Default Zero Config Email Provider

We make use of Sendgrid to give you a default email provider than you can simply use without any additional configuration. The only limitation is that, emails will be sent from our domain - esnotifications.com.

#### AWS SES

Use AWS SES to send email notifications from Engagespot.
[Read more about configuring AWS SES](configuring-providers/email/ses.mdx)

#### Sendgrid

If you have a Sendgrid account, you can configure that as your email provider in Engagespot. You'll get all Engagespot features and the power of Sendgrid's email delivery infrastructure!
[Read more about configuring Sendgrid](configuring-providers/email/sendgrid-provider)

#### Mailgun

Use Mailgun to send email notifications from Engagespot.
[Read more about configuring Mailgun](configuring-providers/email/mailgun.md)

#### SMTP

Send Email notifications via any SMTP Server of your choice.
[Read more about configuring SMTP](configuring-providers/email/smtp-provider)

### Mobile Push Channel Providers

For sending push notifications to Android and iOS mobile apps, we support the following providers.

#### Firebase (FCM)

Use your Firebase Cloud Messaging (FCM) account to deliver push notifications to your apps!
[Read more about configuring FCM](configuring-providers/mobile-push/FCM-provider.md)

## Provider Requirements

To setup providers, you have to do few configurations (don't panic, it takes only afew mins).

### Provider Configurations

To setup a provider (except for default providers), you must specify configurations depending on the provider. For example, if you want to setup Sendgrid provider, you must specify the Sendgrid API KEY. Configurations can be updated from your Engagespot dashboard.

To know more about each providers and their configurations, please see the **Configuring Providers** section.

### Overriding Configurations via API

If you want to override a configuration you've defined in Engagespot dashboard for a particular provider, you can do that via API. You can override both configurations, and the notification content.

The `override` parameter in the send notification endpoint is where you can override the configurations. The `override` object must have a key in the name of provider identifier (For example - `sendgrid_email`). To learn more about, please read the article for the specific provider from "Configuring Providers" section.

Example

```
{
    ...
    "override":{
        "sendgrid_email":{
            "override":"params"
        }
    }
}
```

### Profile Attribute Requirements for Providers.

For providers to send notifications, your user's [profile](../profile/what-are-user-profiles) must have some attributes. It differs with every provider. For example if you want to send email notifications via Sendgrid, your user's profile needs to have an `email` attribute.

Each providers profile requirements are specified in their respective pages under **Configuring Providers** section.

## FAQ

Frequntly asked questions around Providers

### Is it possible to have two providers in a channel?

No. A channel can have only one provider. If you try to enable a new provider, the existing provider will be turned OFF.

### Can I edit "From Name" & "From Email" for the default email provider?

No. Default email provider uses our own Sendgrid account. If you'd like to have your own name and email in your email notifications, you must setup your own Email Service provider.

### How can customize the look and feel of email notifications?

If you are using default email provider, you cannot customize the emails. But if you use your own provider such as Sendgrid or SMTP provider, you can use any custom HTML content, or leverage email template features of those providers.
