# Using API to Send Notifications

In the previous chapter, we learned how to send a notification directly from the Engagespot dashboard. But that is not always the best solution. In most cases, notifications should be sent programatically from your code.

For example, if you're building a social network and you want to notify your users when another user comments on their photo, you need to integrate Engagespot API in your program, right?

Well, luckily, it's simple.

## Consuming the REST API

To send notifications, you can simply send a `POST` request to `https://api.engagespot.co/v3/notifications` API with the following details.

Here is a sample API request in Node.js using `axios`.

```
var axios = require('axios');

axios.post('https://api.engagespot.co/v3/notifications',
{
  "notification": {
    "title": "Rose accepted your friend request"
  },
  "recipients": [
    "jack@example.com"
  ]
},
{
   headers:{
      'X-ENGAGESPOT-API-KEY':'od9X6x45udtDm3g0nzna',
      'X-ENGAGESPOT-API-SECRET':'fjtjb5kjsig21at4h1ijbphd1f31726e44',
   }
})
```

Where `recipients` is the list of users who should receive this notification. Wondering how Engagespot identifies your users? Remember you had passed the email-id (or any unique id) of your users in the front-end SDK? That's how Engagespot identifies your users and sends the notification to them, no matter how many devices they are using.

There are other parameters you can send to this API. You can learn more about them from the REST API reference page.
