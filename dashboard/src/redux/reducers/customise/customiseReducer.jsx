import * as actionTypes from './customiseTypes';
import themeConfig from '../../../configs/themeConfig';

const INITIAL_STATE = {
  theme: themeConfig.theme,
  contentWidth: themeConfig.contentWidth,
  sidebarCollapsed: themeConfig.sidebarCollapsed,
  sidebarCollapseButton: themeConfig.sidebarCollapseButton,
  layout: themeConfig.layout,
  navigationFull: themeConfig.navigationFull,
  navigationBg: themeConfig.navigationBg,
  direction: themeConfig.direction,
};

const customiseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.THEME:
      return {
        ...state,
        theme: action.payload,
      };

    case actionTypes.CONTENT_WIDTH:
      return {
        ...state,
        contentWidth: action.payload,
      };

    case actionTypes.SIDEBAR_COLLAPSED:
      return {
        ...state,
        sidebarCollapsed: action.payload,
      };

    case actionTypes.SIDEBAR_COLLAPSE_BUTTON:
      return {
        ...state,
        sidebarCollapseButton: action.payload,
      };

    case actionTypes.LAYOUT_CHANGE:
      return {
        ...state,
        layout: action.payload,
      };

    case actionTypes.NAVIGATION_FULL:
      return {
        ...state,
        navigationFull: action.payload,
      };

    case actionTypes.NAVIGATION_BG:
      return {
        ...state,
        navigationBg: action.payload,
      };

    case actionTypes.DIRECTION:
      return {
        ...state,
        direction: action.payload,
      };

    default:
      return state;
  }
};

export default customiseReducer;
