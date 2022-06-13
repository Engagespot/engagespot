import * as actionTypes from './customiseTypes';

export const theme = value => {
  return {
    type: actionTypes.THEME,
    payload: value,
  };
};

export const contentWidth = value => {
  return {
    type: actionTypes.CONTENT_WIDTH,
    payload: value,
  };
};

export const sidebarCollapsed = value => {
  return {
    type: actionTypes.SIDEBAR_COLLAPSED,
    payload: value,
  };
};

export const sidebarCollapseButton = value => {
  return {
    type: actionTypes.SIDEBAR_COLLAPSE_BUTTON,
    payload: value,
  };
};

export const layoutChange = value => {
  return {
    type: actionTypes.LAYOUT_CHANGE,
    payload: value,
  };
};

export const navigationFull = value => {
  return {
    type: actionTypes.NAVIGATION_FULL,
    payload: value,
  };
};

export const navigationBg = value => {
  return {
    type: actionTypes.NAVIGATION_BG,
    payload: value,
  };
};

export const direction = value => {
  return {
    type: actionTypes.DIRECTION,
    payload: value,
  };
};
