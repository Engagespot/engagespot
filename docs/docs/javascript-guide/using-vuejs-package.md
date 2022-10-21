---
sidebar_position: 1
---

# Using Vue.js Package

To add engagespot notification center UI component to your Vue.js application, you should use our esm module.

![Notification Inbox Preview](https://i.postimg.cc/BbPF7Cpk/notifications.png)

Something like this.

## Quick Setup

You can install the package from npm or from the CDN.

```bash
npm i @engagespot/client

OR

yarn add @engagespot/client
```

Then import the `render` function and use that to render the notification center.

```javascript
<template>
  <div ref="bellIcon">Notifications</div>
</template>

<script type="module">
import { render } from "@engagespot/client";

export default {
  name: "Notifications",
  mounted: function () {
    const options = {
      apiKey: "ENGAGESPOT_API_KEY",
      userId: "YOUR_USERS_ID",
    };
    render(this.$refs.bellIcon, options);
  },
};
</script>
```

You can find your ENGAGESPOT_API_KEY from your [Engagespot dashboard](https://portal.engagespot.co). As explained in the [basic concepts](../introduction/understanding-concepts.md) chapter, `userId` should be any value to uniquely identify your app's users. It can be their email id, or UUID or a numerical id from your database.

## Customizing Theme

You can customize the look and feel of the Engagespot Notification Inbox using the `theme` property. All the theme customization options mentioned in [React Component](./using-react-component#available-themeing-options) are available in this library too.
