# Using Existing Service Worker

If you already have a service worker registered in your application, you shouldn't try to add a new file for Engagespot. Only one service worker file is supported per domain. But you can do a slightly different configuration.

### Import Engagespot Service Worker in your existing Service Worker file.

Open your existing service worker file and copy the following line to the top section.

```
importScripts('https://cdn.engagespot.co/serviceWorkerv2.js');

// Rest of your service worker content goes here...
```

### Initializing Engagespot Front-end SDK with your existing service worker registration.

Since you already have a service worker file, you should have registered it in your app through the `window.navigator.serviceWorker.ready` function. You just need to pass that registration context to Engagespot so the SDK will use it instead of trying to register a new service worker.

Here is how you can do it in our core Javascript SDK

```
window.navigator.serviceWorker.ready.then(swRegistration =>
  const beamsClient = new Engagespot('YOUR_API_KEY',{
      userId:'yourUser@example.com',
      serviceWorkerRegistration:swRegistration
  })
)
```

Done!
