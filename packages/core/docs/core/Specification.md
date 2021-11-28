---
tags: [js-core]
---

# Engagespot JS Core SDK Spec

This document specifies the core JS operations of Engagespot. 

## Initialize the SDK
Get your Engagespot API Key from the App Settings tab on the dashboard and use the following snippet to initialize the SDK.

```javascript
const apiKey = 'ENGAGESPOT-API-KEY';
const options = {
  userId : 'Unique Id used to identify the logged in user',
  userSignature : 'Signature that is generated from backend. (Required only for apps that has signature verification turned on)',
}
const engagespot = new Engagespot(apiKey,options)
```

## Connect to Server
You should connect the client to Engagespot server to fetch the config, and also to start the realtime notification listeners.

```javascript
engagespot.connect();
```

## Render Notification Feed Widget (To be removed from core)
You can render the notification feed widget to a target HTML element on your web page using the following snippet.

```javascript
const target = document.getElementById('notificationIconHolder');

const options = {
  icon:'https://cdn.yourwebsite.com/icons/notificationBell.png',
  unreadBadge:{
    backgroundColor: "#ddd",
    textColor:"#fff"
  },
  header:{
    backgroundColor: "#ddd",
    textColor:"#fff"
  },
  notification:{
    backgroundColor:"#fff",
    titleTextColor:"#333",
    messageTextColor:"#000",
    dateTextColor:"#000"
  }
}

engagespot.renderNotificationFeed(target,options);

```

### Available Options



Option| Type| Default | Description
---------|----------|---------|---------
icon | url | Served from Engagespot CDN | The notification bell icon
unreadBadge.backgroundColor | Color Hex | #333 | The background color of unread badge
unreadBadge.textColor | Color Hex | #fff | The text color of unread badge
header.backgroundColor | Color Hex | #333 | The background color of notification feed header
header.textColor | Color Hex | #333 | The text color of notification feed header
notification.backgroundColor | Color Hex | #333 | The background color of a single notification item
header.titleTextColor | Color Hex | #333 | The text color of notification title
header.messageTextColor | Color Hex | #333 | The text color of notification message
header.dateTextColor | Color Hex | #333 | The text color of notification date text

## Handling Incoming Realtime Notifications
You can listen to incoming realtime notifications and do some manual actions using the following handler.

```javascript
engagespot.onRealtimeNotificationRecieved = (notification) => {
  //notification object has the details of notification
}
```

