# What are Categories?

Categories are used to tag notifications. For example, you can tag notification _Hey, Anand commented on your photo_ in `new_comment` category. Grouping notifications under categories will help your users set preferences in receiving notifications from categories. See [Preferences](../preference/what-are-preferences)

## Creating a Category

A category can be created using `/category` API endpoint, or through the dashboard (coming soon).

:::tip
When you include `category` parameter in the send `/notifications` API, we'll check if that category exists in your system. If not, we'll create it on the go.
:::

## Tagging a Notification

This is how you can tag a notification with a category identifier while sending it through REST API.

**POST** `/notifications`

```json
{
  "notification": {
    "title": "Anand commented on your photo",
    "message": "Hey Steve, you're looking cool 😎. Who took this photo?",
    "url": "https://your-app.com/photos/17293739"
  },
  "category": "new_comment",
  "recipients": ["steve@example.com"]
}
```

:::warning
If you do not tag a notification in a category, it will not check the [notification preferences](../preference/what-are-preferences.md) set by your users, and the notification will be delivered to everyone.
:::
