import merge from 'lodash.merge';

import { DeepPartial } from '../types/deepPartial';
import themeConfig from './themeConfig';

export type Theme = typeof themeConfig;
export type ThemeOverrides = DeepPartial<Theme>;

export function getTheme(themeOverrides: ThemeOverrides = {}) {
  return merge(themeConfig, themeOverrides) as Theme;
}
