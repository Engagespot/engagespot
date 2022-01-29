# Quick Setup

Engagespot offers a lot of powerful configurations out of the box. But to get started, we will learn how to quickly setup Engagespot on a React.js app with the basic configurations. And also to send a notification from a Nodejs program.

## Installation

Installation of Engagespot has to be done on both frontend and backend.

### React.js

First, install the npm package.

```
npm i @engagespot/react-component
```

Then in your React.js app, add the Engagespot component wherever you want the notification bell icon to appear. (Usually in the nav bar, but it's your choice!)

```
import Engagespot from "@engagespot/engagespot-react-component";

<Engagespot
   apiKey={ENGAGESPOT_API_KEY}
   userId={youruser@example.com}
/>
```

Here you need to pass two props to initialize the component.First one is `apiKey` which is your Engagespot API Key. You can get this from your Engagespot dashboard (Please donot confuse with API-SECRET. API-SECRET and API-KEY are different!)

The next prop is `userId` which is any unique identifier of your logged in user. If that was confusing, let's think of an example. You should use this `userId` later to send notifications to this particular user.

### Browser (Javascript)

You can use our CDN hosted Javascript library to install Engagespot to any Javascript based web apps (irrespective of the framework).

Just paste the following script just before the closing `</body>` tag of your web app.

Replace `HTML_ELEMENT_ID` with the ID of the element where you want the notification bell icon to appear.

```
<script type="text/javascript" src="https://cdn.engagespot.co/engagespot-client.min.js"></script>
<script>
Engagespot.render('#HTML_Element_ID', {
   apiKey: 'ENGAGESPOT_API_KEY',
   userId: 'youruser@example.com', //Your user's unique identifier/email
})
</script>

```

### Sending a Notification

To quickly send a notification to your user on your app,

1. Login to Engagespot dashboard and navigate to "Compose"
2. Search and select the recipient to which the notification should be sent. (ie: the value you pass via front-end)
3. Add notification details
4. Click Send

Now you can see the notification arriving realtime inside the notification center widget!

But in real life, we'll have to send notifications programatically instead of sending them manually from the dashboard. We'll learn more about that in the next chapter.
