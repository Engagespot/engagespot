import React from 'react';
import { View, Text } from 'react-native';

type HeaderProps = {
  header: string;
};

export function FeedItemHeader({ header }: HeaderProps) {
  return (
    <View>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{header}</Text>
    </View>
  );
}
