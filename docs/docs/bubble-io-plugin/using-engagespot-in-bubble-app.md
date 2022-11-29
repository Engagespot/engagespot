---
sidebar_position: 1
---
# Using Engagespot on Bubble.io App

If your app is built using <a href="https://bubble.io" rel="nofollow" target="_blank">Bubble.io</a>, you can use the <a href="https://bubble.io/plugin/engagespot-notifications-1646149514133x734161642066018300" target="_blank" rel="nofollow">Engagespot plugin</a> to add notifications to your Bubble app in minutes.

## Installing Engagespot Plugin in your Bubble App

On your Bubble app dashboard, on the left sidebar, click **Plugins**, and then click on the **Add Plugins** button on the top right corner.

Search Engagespot, and click on the **Install** button.
![Install Engagespot Plugin](/img/install_engagespot_plugin.png)

After installing, click the "Done" button, and open the plugin configuration screen. Add your Engagespot API KEY and API SECRET which you'll find in your Engagespot account [dashboard](https://portal.engagespot.co)

![Configure Engagespot Bubble Plugin](/img/configure_engagespot_bubble_plugin.png)

Now you're successfully installed Engagespot plugin to your Bubble App. Now let's add the notification Inbox component.

## Adding the Notification Inbox Component

Goto the **Design** section of your Bubble app dashboard, and look for an element called **Engagespot Notification**. Just drag and drop it to your app where you want the bell icon to appear.

![Adding Notification Bell Component to Bubble App](/img/engagespot_bubble_element.png)

After dragging it to your app, you can double click on the newly added element and customize the notification component.
![Customizing Engagespot Bubble Notification Component](/img/customize_engagespot_bubble.png)

After this step, if you preview your Bubble app, you can see the notification bell icon, and the inbox properly working.

![Preview Engagespot in Bubble](/img/preview_app.png)

## Sending Notifications Through Workflows

Now let's learn how to send a notification using Bubble workflows. In the sample Bubble project, which is a task management app, we'll add a notification workflow whenever a user clicks on the **up vote** button. Our goal is to notify the owner of the project that their project has been upvoted by another user. Let's see how to do this quickly.

![Preview Engagespot in Bubble](/img/upvote_bubble_app.png)

For this, let's open the Bubble Workflow tab and add a **On Click** event on the Upvote icon. And then click on add action link and choose **Engagespot Send Notification** action.

![Adding Engagespot Action](/img/send_notification_action.png)

In the action configuration popup that appears, we'll define the notification content, and the user to which this notification should be sent.

We'll set the `notification_title` to a custom message with dynamic variables such as the project's title, current user's name etc. We want the notification to appear as **_{User} upvoted your project - {Project Name}_**

`recipient` as the creator of the project, and for the `notification_icon` we'll use the current user's icon url.

:::info
Please note that for `notification_icon` parameter, you must always pass the image URL. Not the image object.
:::

![Configuring Send Notification Action](/img/configuring_engagespot_notification_action.png)

Done. Now let's preview our app and click on the upvote button of "Sample Project", which is created by user 'Appu'.

![Upvote clicked](/img/upvote_clicked.png)

Let's login as user 'Appu' and see if the notification has arrived.

![New Notification](/img/new_notification.png)

A new notification has been arrived. Let's click and read it.

![Read notification](/img/open_notification_inbox.png)

Hurray! You've successfully added a notification engine and a beautiful notification inbox to your Bubble app in a few minutes. You can simply add more channels to deliver the same notifications via email, mobile push, web push etc by enabling them from your Engagespot dashboard.
