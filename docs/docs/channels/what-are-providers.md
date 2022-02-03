---
sidebar_position: 2
---

# What are Providers?

If you've read the previous chapter, you know what is a Channel. Now, let's understand about Providers.
Providers are services that enables notification delivery through a particular channel. For example, if you want to deliver notifications through **email** channel, you must use an SMTP server, or an email service such as Sendgrid.

To make your life easier, Engagespot provides two types of providers in each channel. One is a default provider that can use directly with zero configuration. If you want more capabilities, Engagespot easily allows you to switch to any other supported third party provider such as Sendgrid.

And guess what, you'll get all the powerful features of Engagespot (such as smart delivery, user preferences etc) even if you switch to your favorite provider!

## In-App

For the In-App channel, we support Engagespot default in-app notification provider with the notification inbox widget. This provider is enabled by default and there is no additional configuration required.

## Web Push

For the Web Push channel, we support Engagespot default web push notification provider. This provider is enabled by default and there is no additional configuration required.

## Email

For the Web Push channel, we support three providers.

### Default Zero Config Email Provider

We make use of Sendgrid to give you a default email provider than you can simply use without any additional configuration. The only limitation is that, emails will be sent from our domain - esnotifications.com.

### Sendgrid Email Provider

If you have a Sendgrid account, you can configure that as your email provider in Engagespot. You'll get all Engagespot features and the power of Sendgrid's email delivery infrastructure!

## FAQ

Frequntly asked questions around Providers

### Is it possible to have two providers in a channel?

No. A channel can have only one provider. If you try to enable a new provider, the existing provider will be turned OFF.
