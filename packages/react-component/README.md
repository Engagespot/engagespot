# Engagespot React Component

[Engagespot](https://engagespot.co) React component helps you to build a notification feed for your React.js app. This library includes React components to build a Notification Inbox component in your app.

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
