---
sidebar_position: 1
---

# Using React Component

Engagespot React component helps you to build a notification feed for your React.js app. This library includes React components to build a Notification Inbox component in your app.

![Notification Inbox Preview](https://i.postimg.cc/BbPF7Cpk/notifications.png)

Something like this.

## Quick Setup

You can add a notification feed to your React app in minutes with the pre-built UI Components and APIs powered by Engagespot.

```bash
npm i @engagespot/react-component
```

Then render `Engagespot` component where you want the bell icon to appear.

```javascript
import { Engagespot } from '@engagespot/react-component';

<Engagespot apiKey="ENGAGESPOT_API_KEY" userId="youruser@example.com" />;
```

You can find your ENGAGESPOT_API_KEY from your [Engagespot dashboard](https://portal.engagespot.co). As explained in the [basic concepts](../introduction/understanding-concepts.md) chapter, `userId` should be any value to uniquely identify your app's users. It can be their email id, or UUID or a numerical id from your database.

## Props

The Engagespot notification react component can be customized to suit your application's look and feel. The `Engagespot` component accepts the following props.

| Property                    | Description                                                                          | Type             |
| --------------------------- | ------------------------------------------------------------------------------------ | ---------------- |
| apiKey                      | Your `ENGAGESPOT_API_KEY`, which you can find in your Engagespot dashboard.          | `string`         |
| userId                      | Unique id to identify your users                                                     | `string`         |
| hideJumpToTop               | Hides the "Jump to top" button                                                       | `boolean`        |
| renderNotificationIcon      | Custom notification bell icon                                                        | Component        |
| feedItemPlaceholderImage    | URL of Icon to be displayed if notification image is empty                           | `string`         |
| renderEmptyPlaceholderImage | Component to show when notification feed is empty                                    | Component        |
| headerText                  | Text that will be shown on Notification feed title                                   | `string`         |
| theme                       | Object with multiple properties to customize the look and feel of notification feed. | `ThemeOverrides` |

### Available Themeing Options

The `theme` parameter is of `ThemeOverrides` interface. You can customize pretty much every element of your notification center.

```javascript
interface ThemeOverrides = {

    colors: {
        brandingPrimary: string;
        colorPrimary: string;
        colorSecondary: string;
    };
    panel: {
        boxShadow: string;
        width: string;
        height: string;
        borderBottomLeftRadius: string;
        borderBottomRightRadius: string;
        borderTopLeftRadius: string;
        borderTopRightRadius: string;
        arrowSize: string;
        arrowInset: string;
    };
    feed: {
        background: string;
        placeholderTextColor: string;
        height: string;
        placeholderTextSize: string;
        placeholderMargin: string;
        placeholderFontWeight: string;
    };
    feedItem: {
        border: string;
        background: string;
        notificationDot: string;
        hoverBackground: string;
        headerColor: string;
        descriptionColor: string;
        dateColor: string;
        placeHolderBackground: string;
        placeHolderGradient: string;
        height: string;
        padding: string;
        placeholderTextSize: string;
        notificationDotSize: string;
        imageSize: string;
        imageRadius: string;
        hoverTransition: string;
        textContentPadding: string;
        textContentMargin: string;
        headerFontWeight: string;
        headerSize: string;
        headerPadding: string;
        descriptionSize: string;
        descriptionPadding: string;
        dateSize: string;
        menuMargin: string;
    };
    notificationButton: {
        background: string;
        hoverBackground: string;
        iconFill: string;
        floatingButtonShadow: string;
        iconSize: string;
        outline: string;
        margin: string;
        padding: string;
        borderWidth: string;
        normalButtonRadius: string;
        floatingButtonRadius: string;
        transition: string;
    };
    unreadBadgeCount: {
        background: string;
        color: string;
        borderRadius: string;
        fontSize: string;
        inset: string;
        size: string;
    };
    dropdown: {
        iconFill: string;
        background: string;
        hoverBackground: string;
        menuBackground: string;
        menuShadow: string;
        menuItemTextColor: string;
        menuItemHoverBackground: string;
        iconWidth: string;
        iconHeight: string;
        margin: string;
        padding: string;
        borderWidth: string;
        outline: string;
        transition: string;
        menuBorderRadius: string;
        menuItemPadding: string;
    };
    jumpToTop: {
        background: string;
        iconFill: string;
        shadow: string;
        iconSize: string;
        inset: string;
        borderRadius: string;
        padding: string;
        margin: string;
        transition: string;
    };
    header: {
        fontColor: string;
        closeButtonBackground: string;
        fontSize: string;
        fontWeight: string;
        height: string;
        padding: string;
        closeButtonOutline: string;
        closeButtonPadding: string;
        closeButtonFontSize: string;
        closeButtonMargin: string;
    };
    footer: {
        background: string;
        fontColor: string;
        preferenceButtonColor: string;
        border: string;
        preferenceButtonHoverBackground: string;
        fontWeight: string;
        height: string;
        padding: string;
        fontSize: string;
        linkMargin: string;
        linkSize: string;
        preferenceButtonMargin: string;
        preferenceButtonSize: string;
        preferenceButtonPadding: string;
        preferenceButtonHoverTransition: string;
        linkRadius: string;
    };
    preference: {
        fontColor: string;
        background: string;
        height: string;
        fontWeight: string;
        padding: string;
    };
    preferenceModal: {
        overlayBackground: string;
        headingColor: string;
        background: string;
        closeButtonColor: string;
        textPrimaryColor: string;
        textSecondaryColor: string;
        buttonPrimaryColor: string;
        buttonPrimaryBackgroundColor: string;
        buttonPrimaryHoverBackgroundColor: string;
        buttonSecondaryColor: string;
        buttonSecondaryBackgroundColor: string;
        buttonSecondaryHoverBackgroundColor: string;
        overlayOpacity: string;
        height: string;
        backdropFilter: string;
        borderRadius: string;
        padding: string;
        textAlign: string;
        headerMargin: string;
        headerFontSize: string;
        closeButtonSize: string;
        textPrimaryMargin: string;
        textPrimaryFontSize: string;
        textSecondaryMargin: string;
        textSecondaryFontSize: string;
        primaryButtonFontWeight: string;
        primaryButtonPadding: string;
        primaryButtonBorderRadius: string;
        primaryButtonMargin: string;
        primaryButtonTransition: string;
    }
}
```

For example, if you want to change the primary colors of your notification feed,

```javascript
import {Engagespot} from '@engagespot/react-component';

const theme = {
    colors: {
        colorPrimary: "#0971f1";
    }
}

<Engagespot
  apiKey = "ENGAGESPOT_API_KEY"
  userId = "youruser@example.com"
  theme = {theme}
/>
```

:::tip
You can check out [examples](https://codesandbox.io/s/engagespot-react-component-example-c8udz?file=/src/App.tsx) in Codesandbox to learn how to customize different elements of the notification inbox component.
:::
