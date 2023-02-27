import { Realtime, Types } from 'ably';
import { Deps } from '../createInstance';
import { handleError } from '../helpers/errorHandler';
import { CreateNotification } from './notificationFactory';

type RealTimeClientParams<TData, UType> = {
  createNotification: CreateNotification<TData, UType>;
} & Deps<TData, UType>;

type RealtimeClientBody = {
  deviceType: string;
  browserType: string;
};

type RealtimeNotificationObject<T> = {
  id: string;
  title: string;
  description: string;
  icon: string;
  data: T;
  url: string;
  created_at: string;
};

type RealtimeMessage<T = any> = Omit<Types.Message, 'data'> & {
  name: 'NOTIFICATION_SEEN' | 'NOTIFICATION_DELETED' | 'NEW_NOTIFICATION';
  data: { notification: RealtimeNotificationObject<T> };
};

type RealtimeClientResponse = string;

export function realtimeClient<TData, UType>({
  options: { apiKey, userId },
  sendRequest,
  browserType,
  eventManager,
  createNotification,
  log,
}: RealTimeClientParams<TData, UType>) {
  const transformMessageToNotificationId = (message: RealtimeMessage) => {
    return { id: message.data.notification.id };
  };
  const transformMessageToNotification = ({
    data: { notification },
  }: RealtimeMessage<TData>) => {
    return createNotification({
      ...notification,
      clickedAt: '',
      createdAt: notification.created_at,
      seenAt: '',
      message: notification.description,
    });
  };
  const eventMap = {
    NEW_NOTIFICATION: {
      name: 'notificationReceive',
      transformInput: transformMessageToNotificationId,
    },
    NOTIFICATION_DELETED: {
      name: 'notificationDelete',
      transformInput: transformMessageToNotificationId,
    },
    NOTIFICATION_SEEN: {
      name: 'notificationClick',
      transformInput: transformMessageToNotificationId,
    },
  } as const;

  /**
   * _createTokenRequest
   * Generates AblyTokenRequest by calling Engagespot API
   */

  const createTokenRequest = async () => {
    const response = await sendRequest<
      RealtimeClientResponse,
      RealtimeClientBody
    >({
      method: 'post',
      path: '/sdk/realtimeTokenRequests',
      data: {
        deviceType: 'browser',
        browserType,
      },
    });

    return response;
  };

  /**
   * Connect to Ably Realtime.
   * It also subscribes to channel with name in the format - APIKEY_UserID
   */
  const connect = async () => {
    const realtimeClient = new Realtime({
      authCallback: async (tokenParams, callback) => {
        try {
          const tokenRequest = await createTokenRequest(); // Make a network request to your server
          if (!tokenRequest) {
            handleError('errorCreatingTokenRequest');
            return;
          }
          callback('', tokenRequest);
        } catch (error) {
          log(error);
          callback(error as string, '');
        }
      },
    });
    //As soon as realtime client is connected, subscribe to this user's channel
    realtimeClient.connection.once('connected', () => {
      log('Subscribing to ' + apiKey + '_' + userId);
      const channel = realtimeClient.channels.get(apiKey + '_' + userId);
      channel.subscribe(message => {
        handleIncomingRealtimeMessage(message as RealtimeMessage);
      });
    });
  };

  /**
   * Incoming Realtime Message Handler. This function is used by realtimeConnect() function
   * @param message
   */
  const handleIncomingRealtimeMessage = (message: RealtimeMessage) => {
    log(message);
    const { name, transformInput } = eventMap[message.name];
    const transformedMessage = transformInput(message);
    eventManager.trigger(name, transformedMessage);
  };

  return {
    connect,
  };
}
