import React from 'react';
import { Text, View } from 'react-native';

export function HomeScreen() {
  return (
    <View>
      <View
        style={{
          padding: 50,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 1.5,
            marginVertical: '2em',
          }}
        >
          Engagespot on React Native
        </Text>
        <Text>Open the notifications tab</Text>
      </View>
    </View>
  );
}
