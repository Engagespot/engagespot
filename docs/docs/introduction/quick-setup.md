# Quick Setup

Engagespot offers a lot of powerful configurations out of the box. But to get started, we will learn how to quickly setup Engagespot on a React.js app with the basic configurations. And also to send a notification from a Nodejs program.

## Installation

Installation of Engagespot has to be done on both frontend and backend.

### React.js

First, install the npm package.

```
npm i @engagespot/react-component
```

### Sending a Notification

To quickly send a notification to your user on your app,

1. Login to Engagespot dashboard and navigate to "Compose"
2. Search and select the recipient to which the notification should be sent. (ie: the value you pass via front-end)
3. Add notification details
4. Click Send

Now you can see the notification arriving realtime inside the notification center widget!

But in real life, we'll have to send notifications programatically instead of sending them manually from the dashboard. We'll learn more about that in the next chapter.
