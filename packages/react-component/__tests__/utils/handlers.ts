import { rest } from 'msw';

export const basePath = 'https://api.staging.engagespot.co/v3/';

const emptyNotificationResponse = {
  unreadCount: 0,
  pagination: {
    totalCount: 0,
  },
  data: [],
};

const notificationListResponse = {
  unreadCount: 0,
  pagination: {
    totalCount: 15,
  },
  data: [
    {
      id: 428128,
      title: 'New 34',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-26T17:51:34.533Z',
      seenAt: '2021-12-26T17:51:51.000Z',
      clickedAt: null,
    },
    {
      id: 428127,
      title: 'New 33',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-26T11:58:58.062Z',
      seenAt: '2021-12-26T12:08:09.000Z',
      clickedAt: null,
    },
    {
      id: 428126,
      title: 'New 32',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-26T11:36:14.751Z',
      seenAt: '2021-12-26T11:58:51.000Z',
      clickedAt: null,
    },
    {
      id: 428125,
      title: 'New 31',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-26T11:34:47.990Z',
      seenAt: '2021-12-26T11:34:55.000Z',
      clickedAt: null,
    },
    {
      id: 428124,
      title: 'New 30',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-26T09:15:35.154Z',
      seenAt: '2021-12-26T09:45:11.000Z',
      clickedAt: null,
    },
    {
      id: 428123,
      title: 'New 29',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-26T09:14:09.793Z',
      seenAt: '2021-12-26T09:14:31.000Z',
      clickedAt: '2021-12-26T09:14:54.000Z',
    },
    {
      id: 428122,
      title: 'New 28',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-26T09:06:59.423Z',
      seenAt: '2021-12-26T09:07:27.000Z',
      clickedAt: '2021-12-26T09:07:12.000Z',
    },
    {
      id: 428121,
      title: 'New 27',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-26T09:04:02.247Z',
      seenAt: '2021-12-26T09:06:37.000Z',
      clickedAt: '2021-12-26T09:04:46.000Z',
    },
    {
      id: 428120,
      title: 'New 26',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-26T08:34:38.246Z',
      seenAt: '2021-12-26T08:36:41.000Z',
      clickedAt: '2021-12-26T08:37:03.000Z',
    },
    {
      id: 428119,
      title: 'New 26',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-26T07:54:25.769Z',
      seenAt: '2021-12-26T07:54:29.000Z',
      clickedAt: '2021-12-26T08:37:47.000Z',
    },
    {
      id: 428118,
      title: 'New 25',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-25T17:39:16.774Z',
      seenAt: '2021-12-25T17:39:35.000Z',
      clickedAt: '2021-12-26T09:03:00.000Z',
    },
    {
      id: 428117,
      title: 'New 24',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-25T17:38:17.593Z',
      seenAt: '2021-12-25T17:39:05.000Z',
      clickedAt: '2021-12-26T09:03:12.000Z',
    },
    {
      id: 428116,
      title: 'New 23',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-25T17:37:47.595Z',
      seenAt: '2021-12-25T17:38:02.000Z',
      clickedAt: '2021-12-26T09:03:25.000Z',
    },
    {
      id: 428115,
      title: 'New 22',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-25T17:37:44.388Z',
      seenAt: '2021-12-25T17:38:02.000Z',
      clickedAt: null,
    },
    {
      id: 428114,
      title: 'New 21',
      message: 'Am I doing good?',
      icon: 'https://logidots.com/favicon.png',
      url: 'https://engagespot.co',
      createdAt: '2021-12-25T17:37:21.425Z',
      seenAt: '2021-12-25T17:37:24.000Z',
      clickedAt: null,
    },
  ],
};

export const handlers = [
  rest.post(`${basePath}/sdk/connect`, (req, res, ctx) => {
    return res(
      ctx.json({
        unreadCount: 0,
        app: {
          id: 11875,
          name: 'My First App',
          publicKey:
            'BIAqwR5tCpsgTUFa4TYn0a5cXIj884hqlcYz6fOFmMNwQmAUnrvEeh1GSwsTuLvIV2QoAASXQXQFRFFY08OQxNs',
          hideBranding: false,
        },
      })
    );
  }),
  rest.get(`${basePath}/notifications`, (req, res, ctx) => {
    return res(ctx.json(emptyNotificationResponse));
  }),
  rest.post(`${basePath}/sdk/realtimeTokenRequests`, (req, res, ctx) => {
    return res(
      ctx.json({
        keyName: 'XQcDCg.DRbZbg',
        clientId: 'abf0bda5-33ea-44d2-8865-8c0245d13ae1',
        capability: '{"shiynklpz18l3ktqyy6d9a_anand":["subscribe"]}',
        timestamp: 1640625347581,
        nonce: '7668951600683391',
        mac: 'WoQbYwlcwlJFH9vOd9mhNlilycyr6d/2XKyuo8NFBbQ=',
      })
    );
  }),
  rest.post(
    `https://rest.ably.io/keys/XQcDCg.DRbZbg/requestToken`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          token:
            'XQcDCg.H0y9M-L0Muig0wKpemH3AD8VQPyYYtOh_W43e_ZhqSbc5okPWukXqk4VOOiI9M2NB2JF0fMVY79bRk30EUSw-58UPmAnk4zvo-FIxQO7YZDrCFkKntc2SJYhVoQcblcPRwDiRg9-Ar0G3hNqLGCPejoqyehsMv-2nF1_lLyZB6YfiGiLjZ-P3qMe0Gqg7kWL1qAHKNXHQNHlH6bQ3neys4g',
          keyName: 'XQcDCg.DRbZbg',
          issued: 1640625347767,
          expires: 1640628947767,
          capability: '{"shiynklpz18l3ktqyy6d9a_anand":["subscribe"]}',
          clientId: 'abf0bda5-33ea-44d2-8865-8c0245d13ae1',
        })
      );
    }
  ),
];
