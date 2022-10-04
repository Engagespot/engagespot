---
sidebar_position: 2
---

# Understanding Basic Concepts

In the previous chapter, you've learned the meaning of notifications and why they are important. Now let's learn more about the basic building blocks of Engagespot.

## How Engagespot solves notification for developers?

Engagespot offers the following solutions to build a complete notification system in your product. Be it a web or mobile app, A SaaS product, or an e-commerce app, Engagespot solves notification for every app.

With Engagespot you get the following solutions.

### Multi-Channel Notification Delivery Infrastructure

Send transactional notifications to your users across different channels such as Email, Realtime In-App Alerts, Web Push, Mobile App Push, and SMS (coming soon). We have built an infrastructure that routes your notifications smartly through these channels. Guess what, you can connect your favorite services such as Mailgun, Sendgrid, FCM etc to deliver the notifications. We'll just handle the notification routing and delivery infrastructure to make your your users gets the best notification experience.

### Front-end Notification UI-Kit

A UI-Kit for notifications? Confused? Well, every app needs a component where users can see all the notifications received.
You've already seen it many apps like Facebook, Instagram, etc.

Engagespot provides a fully customizable UI-Kit for [ReactJS](https://www.npmjs.com/package/@engagespot/react-component), and Other Javascript Apps. UI-Kit for Android, iOS, React Native and Flutter coming soon.

<img src="https://i.postimg.cc/BbPF7Cpk/notifications.png" style={{width:"400px"}}/>

### Notification Preference Manager

Give your users the power to decide how and when they want to be notified. Engagespot has built a fine-grained notification preference system that you can use out of the box. You don't have to code a notification preference module yourself. Just use our APIs and SDKs to build one quickly for your app.

<img src="https://954874.smushcdn.com/2618921/wp-content/uploads/2022/02/Group-866.png?lossy=1&strip=1&webp=1" width="400px"/>

## Concepts

Let's familiarize few terms that we'll frequently use throughout this guide.

### User

A user is someone who log in to your app to use it. They have a unique identifier such a username, or an email id, or the unique numeric id from your `users` table.

Engagespot needs to know your user's unique id to send notifications. Whever you initialize Engagespot in your app, you need to pass your user's unique identifier. We'll learn more about this in the next chapter.

### Notification

The message / information that you send to your users. It has a title, a message and optional image, action url etc.

### Channels

Channels are the medium through which a notification is delivered. Engagespot supports the following channels to deliver notification to your users.

1. In-App
2. Web Push
3. Email
4. Mobile Push
5. SMS (Coming Soon)

### Providers

Providers enables delivery through a particular channel. For example to deliver notifications via Email channel, you can use a generic SMTP service, or an API such as Sendgrid within Engagespot. Currently Engagespot supports the following providers for each channel.

1. In-App - Inbuilt
2. Web Push - Inbuilt
3. Mobile Push - Firebase (FCM)
4. Email - Inbuilt, AWS SES, Sendgrid, Mailgun, SMTP
