---
sidebar_position: 3
---

# Javascript quick start

In this chapter, we will learn how to quickly setup Engagespot in your Javascript App. Before reading this chapter, make sure you've familiarised with the [basic concepts](./understanding-concepts.md) of Engagespot.

## Instructions for ReactJS

To make it easier to setup Engagespot Notification UI-Kit in ReactJS app, we have a built-in UI-Kit component library.

First, install the package.

```bash
npm i @engagespot/react-component
```

Then in your React.js app, add the Engagespot component wherever you want the notification bell icon to appear. (Usually in the nav bar, but it's your choice!)

```jsx
import { Engagespot } from '@engagespot/react-component';

<Engagespot apiKey="ENGAGESPOT_API_KEY" userId="unique-identifier-of-your-user" />;
```

:::info
Make sure to replace ENGAGESPOT_API_KEY with your API Key given in your dashboard. Do not confuse API_KEY with API_SECRET. They have different permission levels. You should never expose your API_SECRET in front-end apps.

**userId** should be any value to uniquely identify your app's users. For example, their email id, username, UUID or the primary key from your `users` table.
:::

This will render a beautiful notification inbox like this in your app.
<img src="https://i.postimg.cc/BbPF7Cpk/notifications.png" style={{width:"400px"}}/>

Our ReactJS component comes with a lot of powerful configurations and customizations that you can change. Read the [react component examples](../learn-by-examples/react-component/simple-notification.mdx) to learn more.

## Instructions for Angular

You can install the package from npm or from the CDN.

```bash
npm i @engagespot/client
```

Then import the `render` function and use that to render the notification center.

```javascript
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { render } from '@engagespot/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements AfterViewInit {
  @ViewChild('engagespotBellIcon') engagespotBellIcon: ElementRef;

  ngAfterViewInit() {
    render(this.engagespotBellIcon.nativeElement, {
      apiKey: "ENGAGESPOT_API_KEY",
      userId: "YOUR_USERS_UNIQUE_ID",
    });
  }
}
```
:::info
The above Angular code would not work in online IDEs such as Codesandbox or Stackblitz due to some configuration issues. But it will work fine when you run Angular app directly.
:::

## Other Javascript Apps

You can use our CDN hosted Javascript library to install Engagespot to any Javascript based web apps (irrespective of the framework).

Just paste the following script just before the closing `</body>` tag of your web app.

Replace `HTML_ELEMENT_ID` with the ID of the element where you want the notification bell icon to appear.

```js
<script type="text/javascript" src="https://cdn.engagespot.co/engagespot-client.min.js"></script>
<script>
Engagespot.render('#HTML_Element_ID', {
   apiKey: 'ENGAGESPOT_API_KEY',
   userId: 'unique-identifier-of-your-user',
})
</script>

```

## Sending Notifications

In the next chapter, we'll learn how to send notifications to users.

## Enabling Other Notifications Channels

Now we've implemented only In-App notifications. As mentioned in the [Basic Concepts chapter](./understanding-concepts.md), Engagespot can deliver the same notification via multiple channels like Email, Web Push, Mobile Push, SMS etc. To enable more channels, please read [Configuring Providers](../channels/what-are-providers.md) guide.
