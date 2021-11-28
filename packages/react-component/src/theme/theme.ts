import merge from 'lodash.merge';

import { DeepPartial } from '../types/deepPartial';

export enum Mode {
  Light = 'light',
  Dark = 'dark',
  Auto = 'auto',
}

const lightTheme = {
  colors: {
    background: 'white',
    brandingPrimary: 'rgb(0,191,166)',
    colorPrimary: '#282c34',
    colorBg: 'white',
    colorSecondary: '#686868',
    colorTertiary: '#888888',
    colorBlue: '#a0e9fd',
    colorBlueLight: '#caf3fe',
    colorWhite: 'white',
    colorRed: '#d92027',
    colorRedLight: '#f7cfd6',
    colorGreen: '#79d70f',
    colorGreenLight: '#bbf1c8',
    colorGreyLight: 'rgb(230, 230, 230)',
    colorGreyLighter: '#edf4f2',
    colorGreyDark: '#888888',
  },
  panel: {
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    width: '30rem',
    height: '40rem',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
  },
  feed: {
    height: '30rem',
    background: 'white',
    placeholderTextSize: '1rem',
  },
  notificationButton: {
    background: 'white',
    iconFill: '#888888',
    iconSize: '1.5rem',
  },
  unreadBadgeCount: {
    background: 'red',
    borderRadius: '50%',
    color: 'white'
  },
  jumpToTop: {
    background: 'white',
    iconFill: '#888888',
    iconSize: '1rem',
  },
  header: {
    fontColor: 'white',
    fontSize: '1.5rem',
    height: '2.5rem',
    padding: '0.5rem 1rem',
    background: 'rgb(0, 191, 166)',
  },
  notificationItem: {
    background: 'white',
    fontColor: '#282c34',
    headerSize: '1.5rem',
    descriptionSize: '1.2rem',
  },
  footer: {
    background: 'white',
    fontColor: '#888888',
    border: '1px solid rgb(230, 230, 230)',
    fontSize: '1rem',
  },
  transition: {
    transition: 'all 0.1s ease-in',
  },
};

const darkTheme = {
  colors: {
    background: 'white',
    brandingPrimary: 'rgb(0,191,166)',
    colorPrimary: '#282c34',
    colorBg: 'white',
    colorSecondary: '#686868',
    colorTertiary: '#888888',
    colorBlue: '#a0e9fd',
    colorBlueLight: '#caf3fe',
    colorWhite: 'white',
    colorRed: '#d92027',
    colorRedLight: '#f7cfd6',
    colorGreen: '#79d70f',
    colorGreenLight: '#bbf1c8',
    colorGreyLight: 'rgb(230, 230, 230)',
    colorGreyLighter: '#edf4f2',
    colorGreyDark: '#888888',
  },
  panel: {
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    width: '30rem',
    height: '40rem',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
  },
  feed: {
    height: '30rem',
    background: 'white',
    placeholderTextSize: '1rem',
  },
  notificationButton: {
    background: 'white',
    iconFill: '#888888',
    iconSize: '1.5rem',
  },
  unreadBadgeCount: {
    background: 'red',
    borderRadius: '50%',
    color: 'white'
  },

  header: {
    fontColor: 'white',
    fontSize: '1.5rem',
    height: '2.5rem',
    padding: '0.5rem 1rem',
    background: 'rgb(0, 191, 166)',
  },
  notificationItem: {
    background: 'white',
    fontColor: '#282c34',
    headerSize: '1.5rem',
    descriptionSize: '1.2rem',
  },
  footer: {
    background: 'white',
    fontColor: '#888888',
    border: '1px solid rgb(230, 230, 230)',
    fontSize: '1rem',
  },
  transition: {
    transition: 'all 0.1s ease-in',
  },
  jumpToTop: {
    background: 'white',
    iconFill: '#888888',
    iconSize: '1rem',
  },
};

export type Theme = typeof lightTheme;
export type ThemeOverrides = DeepPartial<Theme>;

export function getTheme(
  mode: Mode = Mode.Light,
  themeOverrides: ThemeOverrides = {}
) {
  let theme = lightTheme;
  if (mode === Mode.Dark) {
    theme = darkTheme;
  }
  return merge(theme, themeOverrides) as Theme;
}
