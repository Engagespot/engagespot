import merge from 'lodash.merge';

import { DeepPartial } from '../types/deepPartial';
import lightTheme from './light';
import darkTheme from './dark';
import common from './common';

export type Mode = 'light' | 'dark' | 'auto';
export type Theme = typeof lightTheme & typeof common;
export type ThemeOverrides = DeepPartial<Theme>;

export function getTheme(
  mode: Mode = 'light',
  themeOverrides: ThemeOverrides = {}
) {
  let theme = lightTheme;
  if (mode === 'dark') {
    theme = darkTheme;
  }
  theme = merge(theme, common);
  return merge(theme, themeOverrides) as Theme;
}
