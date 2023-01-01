# React Notification Feed Component

[Engagespot](https://engagespot.co) React notification feed component helps you to build a realtime notification feed in your React.js app. This library includes React components to build a fully customizable notification inbox component in your app.

All you need is a free API Key from Engagespot to get started.

![Notification Inbox Preview](https://i.postimg.cc/BbPF7Cpk/notifications.png)
Something like this.

## Quick Setup

You can add a notification feed to your React app in minutes with the pre-built UI Components and APIs powered by Engagespot.

```sh
npm i @engagespot/react-component
```

Then render `Engagespot` component where you want the bell icon to appear.

```javascript
import { Engagespot } from '@engagespot/react-component';

<Engagespot
  apiKey="ENGAGESPOT_API_KEY"
  userId="youruser@example.com"
></Engagespot>;
```

You can find your ENGAGESPOT_API_KEY from your Engagespot dashboard. userId should be any value to uniquely identify your app's users. It can be their email id, or UUID or a numerical id from your database.

Read [docs](https://documentation.engagespot.co) to know more about advanced configurations and customizations.
