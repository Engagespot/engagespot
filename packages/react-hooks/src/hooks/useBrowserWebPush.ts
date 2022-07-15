import { PermissionState } from '@engagespot/core';
import { useCallback, useEffect } from 'react';
import { Actions } from 'src/utils/actions';
import { defaultChimeSrc, playSound } from 'src/utils/chime';
import {
  defaultTitleUpdateText,
  updateDocumentTitle,
} from 'src/utils/documentTitle';
import { Instance } from 'src/utils/getInstance';
import { StateReducer } from 'src/utils/hookUtils';
import { Plugins } from 'src/utils/plugins';

Actions.SetWebPushData = 'SetWebPushData';

export interface useBrowserWebPushProps {
  disableNotificationChime?: boolean;
  notificationChimeSrc?: string;
  disableTitleUpdate?: boolean;
  titleUpdateText?: string;
}

export interface BrowserWebPushInstance {
  allowWebPush: boolean;
  enableWebPush: () => void;
  webPushState: 'denied' | 'granted' | 'prompt';
  notificationPermissionState: 'denied' | 'granted' | 'prompt';
}

const reducer: StateReducer = function (state, action) {
  if (action.type === Actions.SetWebPushData) {
    return {
      ...state,
      webPushData: {
        ...state.webPushData,
        ...action.payload,
      },
    };
  }

  return state;
};

function applyDefaults(props: useBrowserWebPushProps) {
  const {
    disableNotificationChime = true,
    notificationChimeSrc = defaultChimeSrc,
    disableTitleUpdate = false,
    titleUpdateText = defaultTitleUpdateText,
    ...options
  } = props;
  return {
    ...props,
    disableNotificationChime,
    notificationChimeSrc,
    disableTitleUpdate,
    titleUpdateText,
  };
}

useBrowserWebPush.pluginName = 'useBrowserWebPush';
useBrowserWebPush.applyDefaults = applyDefaults;

export function useBrowserWebPush(hooks: any) {
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
}

export function useInstance(instance: Required<Instance<Plugins>>) {
  const allowWebPush =
    instance.core.enableWebPush && instance.core.isWebPushSupported();

  const enableWebPush = useCallback(() => {
    instance.core.httpsWebPushSubscribe();
  }, []);

  const webPushState = instance.reducerState?.webPushData?.webPushState;

  const notificationPermissionState =
    instance.reducerState?.webPushData?.notificationPermissionState;

  const setWebPushData = (data: any) => {
    instance.dispatch({
      type: Actions.SetWebPushData,
      payload: data,
    });
  };

  useEffect(() => {
    async function getNotificationPermissionState() {
      const state = await instance.core.getWebPushRegistrationState();
      let permissionState: globalThis.PermissionState = 'denied';
      if (state === PermissionState.PERMISSION_GRANTED) {
        permissionState = 'granted';
      } else if (state === PermissionState.PERMISSION_DENIED) {
        permissionState = 'denied';
      } else if (state === PermissionState.PERMISSION_REQUIRED) {
        permissionState = 'prompt';
      }
      setWebPushData({
        webPushState: permissionState,
        notificationPermissionState: state,
      });
    }

    instance.core.onWebPushPermissionChange((state: any) => {
      setWebPushData({ webPushState: state });
    });

    instance.core.onNotificationReceive((notificationItem: Notification) => {
      if (!instance.disableNotificationChime) {
        playSound(instance.notificationChimeSrc);
      }
      if (!instance.disableTitleUpdate) {
        updateDocumentTitle(instance.titleUpdateText);
      }
    });

    getNotificationPermissionState();
  }, [instance.apiKey, instance.userId]);

  Object.assign(instance, {
    allowWebPush,
    enableWebPush,
    webPushState,
    notificationPermissionState,
  });
}
