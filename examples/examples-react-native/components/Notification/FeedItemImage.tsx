import React from 'react';
import { Image } from 'react-native-elements';

type FeedItemImageProps = {
  uri: string;
};

export function FeedItemImage({ uri }: FeedItemImageProps) {
  if (!uri) return null;
  return (
    <Image
      source={{ uri }}
      style={{ width: 30, height: 30, borderRadius: '50%' } as any}
    />
  );
}
