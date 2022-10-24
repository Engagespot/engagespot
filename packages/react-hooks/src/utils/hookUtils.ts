import { useRef, useCallback } from 'react';
import type { MutableRefObject as ReactMutableRefObject } from 'react';
import { Instance } from './getInstance';
import { Action, InitialState, RawData } from './initialState';
import { Plugins } from './plugins';

export type StateReducer = <T, U>(
  state: T & InitialState,
  action: Action,
  prevState: T & InitialState,
  instance: Instance<Plugins>
) => T;

export type DataTransformer = (
  rawData: RawData,
  transformedData: unknown
) => unknown;

export type UseInstance = (instance: Required<Instance<Plugins>>) => void;

export type Hooks = {
  stateReducers: StateReducer[];
  dataTransformer: DataTransformer[];
  useInstance: UseInstance[];
};

export function useGetLatest<T>(obj: T) {
  const ref = useRef<T>() as ReactMutableRefObject<T>;
  ref.current = obj;

  return useCallback(() => ref.current, []);
}

export const loopHooks = (hooks: any, context: any, meta = {}) =>
  hooks.forEach((hook: any) => {
    const nextValue = hook(context, meta);
  });

export function makeDefaultPluginHooks(): Hooks {
  return {
    stateReducers: [],
    dataTransformer: [],
    useInstance: [],
  };
}
