---
sidebar_position: 1
---

# Using Angular Package

Using our Javascript esm module, you can embed the Engagespot notification center in your Angular app.

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
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { render } from '@engagespot/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements AfterViewInit {
  @ViewChild('engagespotBellIcon') engagespotBellIcon: ElementRef;

  ngAfterViewInit() {
    renderWidget(this.engagespotBellIcon.nativeElement, {
      apiKey: "ENGAGESPOT_API_KEY",
      userId: "YOUR_USERS_UNIQUE_ID",
       theme: {}, //Theme Object to Customize the look and feel of the notification inbox.
    });
  }
}
```

You can find your ENGAGESPOT_API_KEY from your [Engagespot dashboard](https://portal.engagespot.co). As explained in the [basic concepts](../introduction/understanding-concepts.md) chapter, `userId` should be any value to uniquely identify your app's users. It can be their email id, or UUID or a numerical id from your database.

## Customizing Theme

You can customize the look and feel of the Engagespot Notification Inbox using the `theme` property. All the theme customization options mentioned in [React Component](./using-react-component#available-themeing-options) are available in this library too.
