import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NotificationFeed } from '../components/Notification/NotificationFeed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RawNotification } from '@engagespot/react-hooks';

const styles = StyleSheet.create({
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500,
  },
});

export interface NotificationScreenProps {
  notifications: RawNotification[];
}

export function NotificationsScreen({
  notifications,
}: NotificationScreenProps) {
  return (
    <SafeAreaProvider>
      <View style={styles.app}>
        <NotificationFeed notifications={notifications} />
      </View>
    </SafeAreaProvider>
  );
}
