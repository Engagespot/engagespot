# Basics of Preference Center

<head>
  <title>How to build a Notification Preference Center in your App? | Engagespot</title>
  <meta name="description" content="Learn how to build a notification preference center in your app in less than 30 minutes using Engagespot"/>
</head>

A Notification Preference Center is an important feature for any app that sends out notifications to their users. It gives power to your users to choose how and when they want to be notified. Not having such a fine-graned preference module might force your users to turn off all notifications from your product.

With Engagespot, building a Notification Preference Manager (like the one below) in your product is a piece of cake! Let's learn how to build that in less than 30 mins.

<img src="https://954874.smushcdn.com/2618921/wp-content/uploads/2022/02/Group-866.png?lossy=1&strip=1&webp=1" width="400px"/>

## Concepts

Before we dive in, make sure you're familiar with the core concepts of Engagespot.

### Category

Category is used to tag notifications in a group. For example, in your app you might send notifications to your users when someone comments on their photo, or in-the case of an e-commerce platform, when someone places a new order.

Read more in [Categories](../../category/what-are-categories.md) chapter.

### Channel

Channel is the medium through which a notification is delivered. Channels can be In-App, Web Push, Mobile Push, Email or SMS.
Read more in [Channels](../../channels/what-are-channels.md) chapter.

## What is Preference?

A preference is a rule set by your user that defines through which channels they want to be notified for a notification from a particular category. For example, a user can set preference to receive `New Comment` notifications only through In-App push channel. Another example is - Receive `security` notifications via Email and SMS.

Here `New Comment` and `security` are notification [categories](../../category/what-are-categories.md), and `In-App`, `Email`, `SMS` are channels. Now let's learn how to set preference for a user through REST API and Javascript Core SDK.
