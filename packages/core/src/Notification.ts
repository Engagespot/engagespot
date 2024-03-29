import sendRequest, { apiRequestOptions } from './apiRequest';
import Engagespot from './engagespot';
import { NotificationItem } from './interfaces/NotificationItem';

export default class Notification<T> implements NotificationItem<T> {
  _client: Engagespot;

  id: string;
  title: string;
  message?: string | null = null;
  icon?: string | null = null;
  url?: string | null = null;
  seenAt?: string | null = null;
  clickedAt?: string | null = null;
  createdAt?: string | null = null;
  data?: T | null = null;

  constructor(client: Engagespot, options: NotificationItem) {
    this._client = client;

    this.id = options.id;
    this.title = options.title;
    this.message = options.message;
    this.icon = options.icon;
    this.url = options.url;
    this.seenAt = options.seenAt;
    this.clickedAt = options.clickedAt;
    this.createdAt = options.createdAt;
    this.data = options.data;
  }

  /**
   * This should be the accurate name of this function.
   * @returns 
   */

  async markAsRead(){
    return this.markAsClicked();
  }

  /**
   * Marks this notification as clicked
   * @returns
   */
  async markAsClicked() {
    //Donot publish to eventListeners here. Incorrect implementation. Commenting!
    // this._client.eventListenerStore?.NOTIFICATION_CLICKED.forEach(handler => {
    //   handler(this);
    // });

    const options: apiRequestOptions = {
      url: this._client.baseURL + '/notifications/' + this.id + '/click',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': this._client.apiKey,
        'X-ENGAGESPOT-USER-ID': this._client.userId,
        ...(this._client.userSignature && {
          'X-ENGAGESPOT-USER-SIGNATURE': this._client.userSignature,
        }),
      },
    };

    try {
      const response = await sendRequest(options);

      if (response) return this;

      throw 'Cannot mark notification as clicked';
    } catch (error) {
      throw error;
    }
  }

  /**
   * Mark as Unseen
   * @returns 
   */
  async markAsUnSeen() {

    const options: apiRequestOptions = {
      url: this._client.baseURL + '/notifications/' + this.id + '/views',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': this._client.apiKey,
        'X-ENGAGESPOT-USER-ID': this._client.userId,
        ...(this._client.userSignature && {
          'X-ENGAGESPOT-USER-SIGNATURE': this._client.userSignature,
        }),
      },
    };

    try {
      const response = await sendRequest(options);

      if (response) return this;

      throw 'Cannot mark notification as clicked';
    } catch (error) {
      throw error;
    }
  }

  /**
   * Mark as UnRead
   * @returns 
   */
  async markAsUnRead() {

    const options: apiRequestOptions = {
      url: this._client.baseURL + '/notifications/' + this.id + '/reads',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': this._client.apiKey,
        'X-ENGAGESPOT-USER-ID': this._client.userId,
        ...(this._client.userSignature && {
          'X-ENGAGESPOT-USER-SIGNATURE': this._client.userSignature,
        }),
      },
    };

    try {
      const response = await sendRequest(options);

      if (response) return this;

      throw 'Cannot mark notification as clicked';
    } catch (error) {
      throw error;
    
    }
  }

  /**
   * Fetches this notification & also marks this notification as seen
   * @returns
   */
  async fetch() {
    const options: apiRequestOptions = {
      url: this._client.baseURL + '/notifications/' + this.id,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': this._client.apiKey,
        'X-ENGAGESPOT-USER-ID': this._client.userId,
        ...(this._client.userSignature && {
          'X-ENGAGESPOT-USER-SIGNATURE': this._client.userSignature,
        }),
      },
    };

    try {
      const response = await sendRequest(options);

      if (response) {
        //We should update this object with the notification details received from API
        this.title = response.title;
        this.message = response.message;
        this.icon = response.icon;
        this.url = response.url;
        this.seenAt = response.seenAt;
        this.clickedAt = response.clickedAt;
        this.createdAt = response.createdAt;
        this.data = response.data;

        return this;
      }
      throw 'Cannot fetch notifications';
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes a Notification
   * @returns
   */
  async delete() {
    //Donot publish to eventListeners here. Incorrect implementation. Commenting!
    // this._client.eventListenerStore?.NOTIFICATION_DELETED.forEach(handler => {
    //   handler(this);
    // });

    const options: apiRequestOptions = {
      url: this._client.baseURL + '/notifications/' + this.id,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': this._client.apiKey,
        'X-ENGAGESPOT-USER-ID': this._client.userId,
        ...(this._client.userSignature && {
          'X-ENGAGESPOT-USER-SIGNATURE': this._client.userSignature,
        }),
      },
    };

    try {
      const response = await sendRequest(options);

      if (response) return this;

      throw 'Unable to delete notifications';
    } catch (error) {
      throw error;
    }
  }
}
