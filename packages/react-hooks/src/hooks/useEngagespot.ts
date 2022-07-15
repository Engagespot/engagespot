import { useRef, useReducer, useCallback, useEffect } from 'react';
import { Options } from '@engagespot/core';
import {
  FinalInstance,
  GetHooks,
  Instance,
  registerClient,
} from 'src/utils/getInstance';
import {
  applyDefaults,
  UseEngagespotCommonProps,
} from 'src/utils/applyDefaults';
import {
  loopHooks,
  makeDefaultPluginHooks,
  useGetLatest,
} from 'src/utils/hookUtils';
import { Actions } from 'src/utils/actions';
import { initialState, RawDataObject } from 'src/utils/initialState';
import { Plugin, Plugins } from 'src/utils/plugins';

export interface UseEngagespotOptions<T extends Plugins>
  extends Options,
    UseEngagespotCommonProps<T> {}

export function useEngagespot<T extends Plugins>(
  props: UseEngagespotOptions<T>
) {
  let actualProps = applyDefaults(props);
  let { apiKey, userId, plugins, stateReducer, dataTransformer, ...options } =
    actualProps;
  let instanceRef = useRef<Instance<T>>({} as any);
  const getInstance = useGetLatest(instanceRef.current);
  Object.assign(getInstance(), {
    ...actualProps,
    plugins,
    hooks: makeDefaultPluginHooks(),
  });
  const clientChanged = registerClient(getInstance());
  plugins.filter(Boolean).forEach(plugin => {
    let hooks = getInstance().hooks;
    hooks && plugin(hooks);
  });

  const getHooks = useGetLatest(getInstance().hooks) as GetHooks;
  getInstance().getHooks = getHooks;
  delete getInstance().hooks;

  const getStateReducer = useGetLatest(stateReducer);

  const reducer = useCallback(
    (state, action) => {
      if (!action.type) {
        console.info({ action });
        throw new Error('Unknown Action 👆');
      }
      const userStateReducer = getStateReducer();
      return [
        ...getHooks().stateReducers,
        ...(Array.isArray(userStateReducer)
          ? userStateReducer
          : [userStateReducer]),
      ].reduce(
        (s, handler) => handler(s, action, state, getInstance()) || s,
        state
      );
    },
    [getHooks, getStateReducer, getInstance]
  );

  const [reducerState, dispatch] = useReducer(reducer, undefined, () =>
    reducer(initialState, {
      type: Actions.Init,
      payload: { instance: getInstance() },
    })
  );

  if (clientChanged) {
    dispatch({
      type: Actions.Init,
      payload: { instance: getInstance() },
    });
  }

  Object.assign(getInstance(), {
    reducerState,
    dispatch,
  });
  Object.assign(getInstance(), {
    hideBranding: getInstance().core?.hideBranding,
  });
  loopHooks(getHooks()?.useInstance, getInstance());

  const getDataTransformer = useGetLatest(dataTransformer) as any;

  const transformer = useCallback(
    rawData => {
      return [
        ...getHooks().dataTransformer,
        ...(Array.isArray(getDataTransformer())
          ? getDataTransformer()
          : [getDataTransformer()]),
      ].reduce(
        (transformedData, handler) =>
          handler(rawData, transformedData, getInstance()),
        rawData
      );
    },
    [getHooks, getDataTransformer]
  );

  Object.assign(getInstance(), {
    notifications: transformer(getInstance().reducerState.rawData),
  });

  return getInstance() as FinalInstance<T>;
}
