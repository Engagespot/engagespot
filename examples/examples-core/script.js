import Engagespot from '../../packages/core/';

const engagespot = new Engagespot('ujtmjxnp5efmfn5ddsbdj', {
  userId: 'anandrmedia@gmail.com',
  debug: true,
  endPointOverride: 'https://api.staging.engagespot.co/v3/',
});

const notificationList = engagespot.getNotificationList();
await notificationList.fetch();
notificationList.data.forEach(notification => {
  console.log(notification.title, notification.message);
});

window.Engagespot = engagespot;
