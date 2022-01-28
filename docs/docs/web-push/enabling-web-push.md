# Enabling Web Push

Engagespot supports web push (or browser push notifications) out of the box, to notify your users even if they are not currently on your web app! To enable web push, you need to setup [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers) on your web app. Don't worry if you haven't heard of it before. We've made it really simple for you.

## Adding a Service Worker to Your Web App

In your web application's root public folder (In case of React.js, it's the `public` folder), create a new file called `service-worker.js`.

Copy the following line to the file, and save it.

```
importScripts('https://cdn.engagespot.co/serviceWorkerv2.js');
```

Done! You've added service worker to your app.
To verify if you've properly placed this file, goto `https://yourApp.com/service-worker.js` and see if the file can be accessed.

## Turn ON Web Push Channel in Your Dashboard

Now goto your Engagespot dashboard and navigate to `Channels` menu. Turn ON the web push channel.
Now you've enabled web push on your app and your user's can subscribe by opening the settings page on the notification widget.
