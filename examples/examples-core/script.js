import Engagespot from '../../packages/core/';

const engagespot = new Engagespot('ywxewq2tbc7mytcda4btye', {
  userId: 'anand@logidots.com',
  debug: true,
  endPointOverride: 'http://localhost:3002/v3',
});

const init = async () => {
  const notificationList = engagespot.getNotificationList();
  await notificationList.fetch();
  notificationList.data.forEach(notification => {
    console.log(notification.title, notification.message);
  });

  window.Engagespot = engagespot;
};

init();
