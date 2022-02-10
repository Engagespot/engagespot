# What are Preferences?

Before reading preferences, you should understand [Profiles](../profile/what-are-user-profiles) and [Notification Categories](../category/what-are-categories.md).
Preference configurations allow your users to decide how they receive notifications (for each notification category)

For example, one of your user can choose to receive notifications for 'New Friend Request' events only through email, while another user can enable both push and email notifications for the same.

Building such a fine-graned preference system can take you several days or months of effort. With Engagespot, you simply get everything out of the box.

## Setting User Preferences.

You can add user preference for each category either via REST API or our client SDKs (For example - ReactJS or Core Javascript).

## Using Javascript Core SDK

You should use the `setPreferences` method to store key value pairs to your user's profile.

```js
const engagespotClient = new Engagespot('API_KEY', {
  userId: '123e4567-e89b-12d3-a456-426614174000',
});

engagespotClient.setPreferences([
  {
    categoryId: 1,
    channels: [
      {
        channel: 'email',
        enabled: true,
      },
      {
        channel: 'webPush',
        enabled: false,
      },
    ],
  },
]);
```

This will enable email notifications and disable web push notification for category with id `1`. You can get the list of categories (along with their id's) using `categories` API.

## Using REST API

You should use the `/preferences` endpoint in the REST API to update your user's profile. Read API Docs for more information.

## Examples

Read [this example](../learn-by-examples/notification-preference-center/concepts.md) to learn how to build a Notification Preference Manager in your app.
