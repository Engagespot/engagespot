# Default Web Push Provider

Engagespot supports web push (or browser push notifications) via our own provider out of the box, to notify your users even if they are not currently on your web app!

## Enabling Default Web Push Provider

To enable default web push provider, login to your Engagespot dashboard, goto Channels -> Web Push and enable Default Provider.

:::info

To enable default web push provider, you need to setup [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers) on your web app. Don't worry if you haven't heard of it before. We've made it really simple for you.

:::

## Adding a Service Worker to Your Web App

In your web application's root public folder (In case of React.js, it's the `public` folder), create a new file called `service-worker.js`.

Copy the following line to the file, and save it.

```js
importScripts('https://cdn.engagespot.co/serviceWorkerv2.js');
```

Done! You've added service worker to your app.
To verify if you've properly placed this file, goto `https://yourApp.com/service-worker.js` and see if the file can be accessed.

## Turn ON Web Push Channel in Your Dashboard

Now goto your Engagespot dashboard and navigate to `Channels` menu. Turn ON the web push channel.
Now you've enabled web push on your app and your user's can subscribe by opening the settings page on the notification widget.

## Using Existing Service Worker

If you already have a service worker registered in your application, you shouldn't try to add a new file for Engagespot. Only one service worker file is supported per domain. But you can do a slightly different configuration.

### Import Engagespot Service Worker in your existing Service Worker file.

Open your existing service worker file and copy the following line to the top section.

```js
importScripts('https://cdn.engagespot.co/serviceWorkerv2.js');

// Rest of your service worker content goes here...
```

### Initializing Engagespot Front-end SDK with your existing service worker registration.

Since you already have a service worker file, you should have registered it in your app through the `window.navigator.serviceWorker.ready` function. You just need to pass that registration context to Engagespot so the SDK will use it instead of trying to register a new service worker.

Here is how you can do it in our core Javascript SDK

```js
window.navigator.serviceWorker.ready.then(swRegistration =>
  const engagespotClient = new Engagespot('YOUR_API_KEY',{
      userId:'yourUser@example.com',
      serviceWorkerRegistration:swRegistration
  })
)
```

Done!
