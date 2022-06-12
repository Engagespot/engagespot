import { Text, View } from 'react-native';
import React from 'react';
import { FeedItemHeader } from './FeedItemHeader';
import { FeedItemImage } from './FeedItemImage';
import { RawNotification } from '@engagespot/react-hooks';

type FeedItemProps = {
  notification: RawNotification;
};

export function FeedItem({ notification }: FeedItemProps) {
  return (
    <View
      style={{
        padding: 15,
        borderBottomColor: '#e6e9eb',
        borderBottomWidth: 1,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <FeedItemImage uri={notification.icon} />
        <View style={{ marginLeft: 15 }}>
          <FeedItemHeader header={notification.title} />
          <Text
            style={{ marginTop: 10, marginBottom: 15, flex: 1 }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {notification.message}
          </Text>
          {/* <NotificationActions notification={notification} /> */}
        </View>
      </View>
    </View>
  );
}
