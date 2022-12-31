# Getting and Updating Preferences

You can update your user's notification preference in your app using [Engagespot REST API](/docs/rest-api) or through any of our client SDKs.

## Using REST API

You should use the `preferences` [endpoint](/docs/rest-api#tag/Preferences/paths/~1v3~1preferences/get) to read and set preferences of a user.

:::tip
When you make this API call, you're authenticating yourself as the User of your app. And this is achieved using the X-ENGAGESPOT-USER-ID header. (Also, make sure to pass **X-ENGAGESPOT-API-SECRET** if your app has [HMAC Authentication](../../user/enabling-HMAC-authentication.mdx) turned ON.)
:::

### Reading Existing Preferences

To read the existing preferences, send a **GET** request to `/preferences` [endpoint](/docs/rest-api#tag/Preferences/paths/~1v3~1preferences/get). This will return an array of preference objects. Each preference object has a `categoryId`, and a `channelPreferences` array which contains the status of channel in that category.

```json
[
  {
    "category": {
      "id": 1,
      "name": "Comment",
      "identifier": "comment"
    },
    "channelPreferences": [
      {
        "channel": "inApp",
        "enabled": 1
      },
      {
        "channel": "email",
        "enabled": 1
      }
    ]
  }
]
```

:::info
If a user has not explicitly defined a preference rule for a channel on a category, that rule won't be listed in the above response. Also, that means that notifications are enabled by default for that channel.
:::

Since this API won't return the categories for which the user has not set any preferences yet, you might need to use the [Categories](/docs/rest-api#tag/Preferences/paths/~1v3~1categories/get) API to get a list of all categories in the app.

### Updating Preference

Let's say a user wants to disable "Comment" notifications via email, but enable Mobile App Push notifications for the same. We can update this preference in a single API call.

**PATCH** `/preferences` [View API Doc](/docs/rest-api#tag/Preferences/paths/~1v3~1preferences/patch)

```json
{
  "preference": [
    {
      "categoryId": 1,
      "channels": [
        {
          "channel": "email",
          "enabled": false
        },
        {
          "channel": "mobilePush",
          "enabled": true
        }
      ]
    }
  ]
}
```

:::tip
The list of channels and their identifiers are given in the [Channels](../../channels/what-are-channels.md) chapter.
:::
