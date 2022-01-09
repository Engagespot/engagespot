import { useMedia } from 'react-use';

import { preferDarkQuery } from '../utils/mediaQuery';

export function useSystemDarkTheme() {
  return useMedia(preferDarkQuery);
}
