---
sidebar_position: 4
---

# Sending Notification From Engagespot Dashboard

Before sending a notification, please make sure you've completed the front-end setup of Engagespot in your Javascript or Mobile App.

In this step, we'll learn how to quickly send a notification to your user from Engagespot dashboard. In real life, you will be sending notifications from your app's backend which we'll learn in the [Using API to send notifications](./using-api-to-send-notifications.mdx) chapter.

To quickly send notification to a user from the Engagespot dashboard,

1. Login to Engagespot dashboard and navigate to "Compose"
2. Search and select the recipient to which the notification should be sent. (ie: the value you pass via front-end)
3. Add notification details
4. Click Send

Now you can see the notification arriving realtime inside the notification center widget! If you want to deliver the same notification via other channels such as Web Push, Email etc, please read channel setup instructions in the `Channels` chapter.

:::info
If you cannot find any recipients in the list, that means your user's are not being properly registered with Engagespot. Make sure you've configured the front-end SDK properly.
:::
