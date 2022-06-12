import {
  useEngagespot,
  RawNotification,
  infiniteScrollTransformer,
} from '@engagespot/react-hooks';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation/Navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const { notifications } = useEngagespot<RawNotification>({
    apiKey: 'q7nkhsrgfppexca9aj1nq',
    userId: 'hemanditwiz@gmail.com',
    dataTransformer: rawData =>
      infiniteScrollTransformer(rawData, {}).map(
        ({
          clickedAt,
          created,
          createdAt,
          icon,
          id,
          message,
          seenAt,
          title,
          url,
        }) => {
          return {
            clickedAt,
            created,
            createdAt,
            icon,
            id,
            message,
            seenAt,
            title,
            url,
          };
        }
      ),
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} notifications={notifications} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
