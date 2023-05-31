---
sidebar_position: 2
---

# Using Javascript UI Kit

If you're using Vanilla JS or any other libraries, you can use the Engagespot browser Javascript library to add a notification UI kit.

:::info
If you're using React, please use [Engagespot React Component](./using-react-component.md) instead.
:::

## Quick Setup

You can add Engagespot to your Javascript app from our CDN or by importing our npm package.

```bash
npm i @engagespot/client
```

Alternatively, you can paste this code just above the closing `</body>` tag of your HTML app.

```javascript
<script
  type="text/javascript"
  src="https://cdn.engagespot.co/engagespot-client.min.js"
></script>
```

Now, render the Notification Inbox inside any HTML element in your app.
In this example, we will render the bell icon to a `bellIconPlaceholder` element which I've created in my app.

```html
<body>
  <div id="bellIconPlaceholder">
    <!-- This is where we will render our Notification Inbox component -->
  </div>

  <script
    type="text/javascript"
    src="https://cdn.engagespot.co/engagespot-client.min.js"
  ></script>
  <script>
    Engagespot.render('#bellIcon', {
      apiKey: 'ENGAGESPOT_API_KEY',
      userId: 'youruser@example.com',
      theme: {}, //Theme Object to Customize the look and feel of the notification inbox.
    });
  </script>
</body>
```

:::info
This example is hosted in Codesandbox. [View](https://codesandbox.io/s/engagespot-browser-js-example-j7lyz?file=/index.html:496-521)
:::

## Customizing Theme

You can customize the look and feel of the Engagespot Notification Inbox using the `theme` property. All the customization options mentioned in [React Component](./using-react-component#available-themeing-options) are available in this library too.

## Optional initialization props

You can pass through optional props to the `render()` function.

```javascript
Engagespot.render(selectorString, props: EngagespotProps)
```

```javascript
interface EngagespotProps {
  theme?: ThemeOverrides;
  panelOpenByDefault?: boolean;
  panelOnly?: boolean;
  feedItemPlaceholderImage?: string;
  hideNotificationAvatar?: boolean;
  hideJumpToTop?: boolean;
  headerText?: string;
  renderFooterContent?: customRenderFn;
  renderNotificationIcon?: customRenderFn;
  renderEmptyPlaceholderImage?: customRenderFn;
  renderNotificationContent?: customRenderFn<customNotificationContentType>;
  renderNotificationBody?: customRenderFn<customNotificationContentType>;
  onFeedItemClick?: (evt, payload: ClickableNotificationPayload) => void;
  headerDropdownItems?: DropdownMenuProps['items'];
}
```

### `onFeedItemClick`
Callback function passed to this property will be invoked whenever a notification is clicked.

Example usage

```javascript
Engagespot.render('#bellIcon', {
  apiKey: 'ENGAGESPOT_API_KEY',
  userId: 'unique-id-of-user',
  onFeedItemClick: (evt ,payload) => {
    console.log("A notification was clicked, and the payload is", payload)
  }
});
```