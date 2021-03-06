<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@engagespot/core](./core.md) &gt; [Notification_2](./core.notification_2.md)

## Notification_2 class

<b>Signature:</b>

```typescript
export default class Notification implements NotificationItem
```

<b>Implements:</b> [NotificationItem](./core.notificationitem.md)

## Constructors

| Constructor                                                              | Modifiers | Description                                                      |
| ------------------------------------------------------------------------ | --------- | ---------------------------------------------------------------- |
| [(constructor)(client, options)](./core.notification_2._constructor_.md) |           | Constructs a new instance of the <code>Notification</code> class |

## Properties

| Property                                         | Modifiers | Type           | Description       |
| ------------------------------------------------ | --------- | -------------- | ----------------- |
| [\_client](./core.notification_2._client.md)     |           | Engagespot     |                   |
| [clickedAt?](./core.notification_2.clickedat.md) |           | string \| null | <i>(Optional)</i> |
| [createdAt?](./core.notification_2.createdat.md) |           | string \| null | <i>(Optional)</i> |
| [icon?](./core.notification_2.icon.md)           |           | string \| null | <i>(Optional)</i> |
| [id](./core.notification_2.id.md)                |           | string         |                   |
| [message?](./core.notification_2.message.md)     |           | string \| null | <i>(Optional)</i> |
| [seenAt?](./core.notification_2.seenat.md)       |           | string \| null | <i>(Optional)</i> |
| [title](./core.notification_2.title.md)          |           | string         |                   |
| [url?](./core.notification_2.url.md)             |           | string \| null | <i>(Optional)</i> |

## Methods

| Method                                                    | Modifiers | Description                                                          |
| --------------------------------------------------------- | --------- | -------------------------------------------------------------------- |
| [delete()](./core.notification_2.delete.md)               |           | Deletes a Notification                                               |
| [fetch()](./core.notification_2.fetch.md)                 |           | Fetches this notification &amp; also marks this notification as seen |
| [markAsClicked()](./core.notification_2.markasclicked.md) |           | Marks this notification as clicked                                   |
