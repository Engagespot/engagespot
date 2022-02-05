---
sidebar_position: 1
---

# Getting Started

## Overview

Engagespot is built to help developers add a complete notification system to their products without having to write it from scratch. A complete notification system in a product consists of components like -

1. Multiple notification delivery channels such as InApp, Web Push, Mobile Push, Email, SMS etc.
2. Notification delivery preferences (App Level, and User Level)
3. Notification Categories
4. Grouped Notifications etc.

Building a basic notification system for your product with a single channel such as email might seem easier in the begining. But once you want to add more features and give preference controls to your users on different channels and categories, most of your development effort will be spent on notifications. We believe that a developer should never try to re-invent the wheel. Write code only for what is not there, else simply plug it in! Your time is precious. Spend it on building your core features.

## Why building a Product Notification System is complex?

Like I said, it's very easy if you just need to notify your users via email. Simply integrate an email API, or an SMTP provider. Done!

Now as your product scales and add more features, you will have several type of notifications. For example in a social network, you might want to send "Someone commented on your photo", "Someone liked your photo", security notifications, friend request notifications, New message notifications etc. Some of these notifications have an urgent nature, and some of them are just informational. So you must decide which channel is best based on the urgency of notification.

Also, your users might have different preference on receiving notifications. Some of them want a particular type of notifications to be delivered only via email. Some of them donot want to receive any notifications at all. So you must build a fine grained notification preference module for users.

Do you think you should be spending most of your development effort in building a notification system like this? But ofcourse you cannot ignore having all these features because it's must for improving your product's user experience. For example look at products like Facebook and Slack and how smart they are in delivering notifications via different channels.

This is where a solution like Engagespot can help. Instead of spending months of time building, improving and maintaining a notification engine, you can simply plug in a full-fledged product notification system in minutes, without compromising on any functionalities.

Simply, you should never attempt to build a notification system from scratch. And that's why we've developed Engagespot. We focus on improving all the aspects of a highly scalable notification system while you focus on building your product.

### Channels

Channels are the medium through which a notification is delivered. Engagespot supports the following channels to deliver notification to your users.

1. In-App (With a beautiful, customizable notification center UI-Kit)
2. Web Push
3. Email
4. Mobile Push (Coming Soon)
5. SMS (Coming Soon)

### Providers

Providers enables delivery through a particular channel. For example to deliver notifications via Email channel, you can use a generic SMTP service, or an API such as Sendgrid within Engagespot. Currently Engagespot supports the following providers for each channel.

1. In-App - Inbuilt
2. Web Push - Inbuilt
3. Email - Inbuilt, Sendgrid, SMTP

### Supported Platforms

You can use Engagespot on any web or mobile based platforms. However, In-App notification UI-Kit is currently available only for web apps. (Along with a customizable ReactJS Notification Inbox component)
