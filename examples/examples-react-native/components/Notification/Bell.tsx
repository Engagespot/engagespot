import React from 'react';
import { View, Text } from 'react-native';

export interface BellProps {
  color: string;
}

export function Bell({ color }: BellProps) {
  const unreadCount = 3;
  return (
    <View>
      <Text
        style={{
          position: 'absolute',
          backgroundColor: 'rgb(223, 71, 89)',
          padding: 4,
          color: 'white',
          borderRadius: 3,
          right: -2,
          top: -4,
          //fontSize: '0.65em',
        }}
      >
        {unreadCount}
      </Text>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={color}
        height={30}
      >
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
      </svg>
    </View>
  );
}
