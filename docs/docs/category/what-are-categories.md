# What are Categories?

Categories are used to tag notifications. For example, you can tag notification _Hey, Anand commented on your photo_ as `new_comment` category. And then your users can decide how they want to receive notifications from `new_comment` category. See [Preferences](../preference/what-are-preferences)

## Creating a Category

A category can be created using `/category` API endpoint, or through the dashboard (coming soon).

:::tip
When you pass a category to the send `/notifications` API, we'll check if that category exists in your system. If not, we'll create it on the go.
:::

This is how you can tag a notification using REST API.

**POST** `/notifications`

```json
{
  "notification": {
    "title": "Anand commented on your photo",
    "message": "Hey Steve, you're looking cool 😎. Who took this photo?",
    "url": "https://your-app.com/photos/17293739",
    "category": "comment"
  },
  "recipients": ["steve@example.com"]
}
```
