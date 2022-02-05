# Quick Setup

Engagespot offers a lot of powerful configurations out of the box. But to get started, we will learn how to quickly setup Engagespot on an app with the basic configurations. And also to send a notification from a backend program.

Installation of Engagespot has to be done on both frontend and backend. In the front-end, we'll add the Notification Inbox UI component, and initialize the SDK. In the backend setup, we'll learn how to send notifications.

## Frontend Setup

You need two **mandatory** properties to initialize the Engagespot front-end SDK. First one is `apiKey` which is your Engagespot API Key. You can get this from your Engagespot dashboard. And the next one is `userId`, which is any unique identifier to identify your users.

:::warning
Please do not confuse **API_KEY** with **API_SECRET**. They have different permission levels.
You should never expose your **API_SECRET** in front-end apps.
:::

If you're using core Javascript SDK, you'll initialize your front-end SDK as shown below

```js
import Engagespot from '@engagespot/core';

const engagespotInstance = new Engagespot('YOUR_ENGAGESPOT_API_KEY', {
  userId: 'youruser@example.com',
});
```

#### What is userId?

`userId` which is any unique identifier of your logged in user. Engagespot wants to uniquely identify the user of your app, and for that we need any unique identifier. It can be anything like email-id, or the auto incrementing number from your user table, a UUID, or anything. You should use this `userId` as recipients to send notifications to this particular user later.

:::tip
`userId` is mandatory to initialize Engagespot. In addition to userId, you can attach more attributes to your user's profile. You'll learn about this in [Profile](../profile/what-are-user-profiles) chapter.
:::

:::warning
Since anyone can simply change the `userId` and read the notifications of any other user, you should enable [HMAC Authentication](../hmac-authentication/enabling-hmac-authentication) for added security.
:::

### React.js Component

To make it easier to setup Engagespot in ReactJS app, we have a built-in UI-Kit component library.
First, install the npm package.

```cli
npm i @engagespot/react-component
```

Then in your React.js app, add the Engagespot component wherever you want the notification bell icon to appear. (Usually in the nav bar, but it's your choice!)

```jsx
import Engagespot from "@engagespot/react-component";

<Engagespot
   apiKey={ENGAGESPOT_API_KEY}
   userId={youruser@example.com}
/>
```

This will render a beautiful notification inbox like this in your app.
<img src="https://i.postimg.cc/BbPF7Cpk/notifications.png" style={{width:"400px"}}/>

Our ReactJS component comes with a lot of powerful configurations and customizations that you can change. Read the react component section to learn more.

### Browser (Javascript)

You can use our CDN hosted Javascript library to install Engagespot to any Javascript based web apps (irrespective of the framework).

Just paste the following script just before the closing `</body>` tag of your web app.

Replace `HTML_ELEMENT_ID` with the ID of the element where you want the notification bell icon to appear.

```js
<script type="text/javascript" src="https://cdn.engagespot.co/engagespot-client.min.js"></script>
<script>
Engagespot.render('#HTML_Element_ID', {
   apiKey: 'ENGAGESPOT_API_KEY',
   userId: 'youruser@example.com',
})
</script>

```

### Sending a Notification

In this step, we'll learn how to quickly send a notification to your user from Engagespot dashboard. In real life, you will be sending notifications from your app's backend which we'll learn in the next chapter.

To quickly send notification to a user from the Engagespot dashboard,

1. Login to Engagespot dashboard and navigate to "Compose"
2. Search and select the recipient to which the notification should be sent. (ie: the value you pass via front-end)
3. Add notification details
4. Click Send

Now you can see the notification arriving realtime inside the notification center widget!

:::info
If you cannot find any recipients in the list, that means your user's are not being properly registered with Engagespot. Make sure you've configured the front-end SDK properly.
:::

Now, let's learn how to send notifications programatically in the next chapter.
