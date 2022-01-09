import merge from 'lodash.merge';

import { DeepPartial } from '../types/deepPartial';
import lightTheme from './light';
import darkTheme from './dark';
import common from './common';

export type Mode = 'light' | 'dark' | 'auto';
export type SystemTheme = 'light' | 'dark';
type ColorTheme = typeof lightTheme;
export type Theme = ColorTheme & typeof common;
export type ThemeOverrides = DeepPartial<Theme>;

type Themes = {
  [k in Mode]: ColorTheme;
};

const themes: Themes = {
  auto: lightTheme,
  light: lightTheme,
  dark: darkTheme,
};

export function getTheme(
  mode: Mode = 'light',
  themeOverrides: ThemeOverrides = {},
  systemTheme: SystemTheme
) {
  let theme = themes[mode];
  if (mode === 'auto' && systemTheme === 'dark') {
    theme = darkTheme;
  }
  theme = merge(theme, common);
  return merge(theme, themeOverrides) as Theme;
}
