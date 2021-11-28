import sendRequest, { apiRequestOptions } from './apiRequest';
import Engagespot from './engagespot';
import NotificationItem from './interfaces/NotificationItem';
import Notification from './Notification';

export default class NotificationList implements NotificationList {
  client: Engagespot;
  unreadCount: number;
  totalCount: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;

  data: NotificationItem[];

  constructor(client: Engagespot) {
    this.client = client;
    this.unreadCount = 0;
    this.totalCount = 0;
    this.data = [];
    this.currentPage = 1;
    this.itemsPerPage = 15;
    this.totalPages = 0;
  }

  async fetch(page = 1, itemsPerPage = 15) {
    const options: apiRequestOptions = {
      url:
        this.client.baseURL +
        '/notifications?pageNo=' +
        this.currentPage +
        '&limit=' +
        this.itemsPerPage,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': this.client.apiKey,
        'X-ENGAGESPOT-USER-ID': this.client.userId,
        ...(this.client.userSignature && {
          'X-ENGAGESPOT-USER-SIGNATURE': this.client.userSignature,
        }),
      },
    };

    const response = await sendRequest(options);

    //Set the properties after fetch
    this.unreadCount = response.unreadCount;
    this.totalCount = response.pagination.totalCount;
    this.currentPage = page;
    this.itemsPerPage = itemsPerPage;
    this.totalPages = Math.ceil(this.totalCount / this.itemsPerPage);

    //let count = 0;
    //Create Notification objects and save it to data array.
    response.data.forEach((notification: NotificationItem) => {
      //count++;
      //console.log(count);
      const notificationItem = new Notification(this.client, {
        id: notification.id,
        title: notification.title,
        message: notification.message,
        icon: notification.icon,
        url: notification.url,
        createdAt: notification.createdAt,
        seenAt: notification.seenAt,
        clickedAt: notification.clickedAt,
      });

      this.data.push(notificationItem);
    });

    return this;
  }
}
