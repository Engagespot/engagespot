---
sidebar_position: 2
---

# Using Notification Events and States

With version `2.5.0` and above, you can trigger Bubble workflows based on notification click events.

## Supported Events

|            Event                 |                     Description                   |
|----------------------------------|---------------------------------------------------|
| Notification Received            | Triggers when a new notification is received       |
| Notification Clicked             | Triggers when a new notification is clicked       |

## Sending custom data with notification send action.
The first step in triggering custom workflows based on `Notifiction Click` event is to add custom data data attributes to the send action.

For this, the Engagespot Bubble Plugin allows you to define two custom data attributes - `Custom Data 1` and `Custom Data 2`. These two are text data attributes which you can use to assign any value such as a Unique ID.

![Attaching custom attributes to Send Notification Action](https://engagespot-website.s3.us-west-2.amazonaws.com/public/bubble_custom_data_e68f75392d.png?updated_at=2023-05-26T13:28:41.811Z)

These two custom data attributes will be available as state variables on the front-end.

## Listening to notification click actions, and triggering workflows.
When a notification inside the Engagespot notification inbox component is clicked by the user, it triggers `Notification Clicked` event that you can listen in Bubble workflow builder.

![Listening to notification click event](https://engagespot-website.s3.us-west-2.amazonaws.com/public/trigger_20baa74212.png?updated_at=2023-05-26T13:28:42.211Z)

Along with this event, two state variables `Custom Data 1` and `Custom Data 2` will be made available.

![Accessing custom data states](https://engagespot-website.s3.us-west-2.amazonaws.com/public/using_state_variables_d087468601.png?updated_at=2023-05-26T13:28:42.519Z)

For example, you could save the notification type (eg: `like_notification`) in `Custom Data 1` variable. And any other meta data that you need in your workflow (eg: `post_id`) in `Custom Data 2`. And then use this data in a workflow to navigate the user to the page as per your requirement.

## Listening to notification received events.
When a notification is received, the `Notification Received` event is triggered that you can listen in Bubble workflow builder. Along with this event, three state variables `Received Notification ID`, `Received Notification Title`, `Received Notification Message` and `Received Notification JSON` will be made available.

You can use this event to build customized experiences such as

* Showing a custom toast upon receiving a notification.
* Start a workflow.
* Play a sound.