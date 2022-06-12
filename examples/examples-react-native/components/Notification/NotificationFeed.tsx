import { RawNotification } from '@engagespot/react-hooks';
import React from 'react';
import { FlatList, View } from 'react-native';
import { FeedItem } from './FeedItem';

type NotificationFeedProps = {
  notifications: RawNotification[];
};

export function NotificationFeed({ notifications }: NotificationFeedProps) {
  return (
    <View style={{ marginVertical: 50 }}>
      <FlatList
        data={notifications}
        keyExtractor={notification => notification.id}
        renderItem={({ item }) => <FeedItem notification={item} />}
      />
    </View>
  );
}
