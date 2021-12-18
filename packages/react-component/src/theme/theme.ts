import merge from 'lodash.merge';

import { DeepPartial } from '../types/deepPartial';
import lightTheme from './light';
import darkTheme from './dark';

export type Mode = 'light' | 'dark' | 'auto';
export type Theme = typeof lightTheme;
export type ThemeOverrides = DeepPartial<Theme>;

export function getTheme(
  mode: Mode = 'light',
  themeOverrides: ThemeOverrides = {}
) {
  let theme = lightTheme;
  if (mode === 'dark') {
    theme = darkTheme;
  }
  return merge(theme, themeOverrides) as Theme;
}
