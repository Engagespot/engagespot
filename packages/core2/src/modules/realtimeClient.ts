import { Realtime, Types } from 'ably';
import { Deps } from '../createInstance';
import { handleError } from '../helpers/errorHandler';

type RealTimeClientParams = {} & Deps;

type RealtimeClientBody = {
  deviceType: string;
  browserType: string;
};

type RealtimeClientResponse = string;

export async function initiateRealtimeConnection({
  options: { apiKey, userId },
  sendRequest,
  browserType,
  eventManager,
  log,
}: RealTimeClientParams) {
  const transformMessageToNotificationId = (message: any) => {
    return { ...message.data.notificationId };
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
        handleIncomingRealtimeMessage(message);
      });
    });
  };

  /**
   * Incoming Realtime Message Handler. This function is used by realtimeConnect() function
   * @param message
   */
  const handleIncomingRealtimeMessage = (message: Types.Message) => {
    type MessageTypes = keyof typeof eventMap;
    log(message);
    const { name, transformInput } = eventMap[message.name as MessageTypes];
    const transformedMessage = transformInput(message);
    eventManager.trigger(name, transformedMessage);
  };

  await connect();
}
