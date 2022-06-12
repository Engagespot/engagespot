import { useRef, useCallback } from 'react';
import { Instance } from './getInstance';
import { Action, InitialState, RawData } from './initialState';

export type StateReducer = <T, U>(
  state: T & InitialState,
  action: Action,
  prevState: T & InitialState,
  instance: Instance<U>
) => T;

export type DataTransformer = (
  rawData: RawData,
  transformedData: unknown
) => unknown;

export type UseInstance = (instance: Required<Instance>) => void;

export type Hooks = {
  stateReducers: StateReducer[];
  dataTransformer: DataTransformer[];
  useInstance: UseInstance[];
};

export function useGetLatest<T>(obj: T) {
  const ref = useRef<T>() as React.MutableRefObject<T>;
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

type VerifyAgeFunc = {
  (age: number): boolean;
  usedBy: string;
};

// the function itself that
// satisfies the above type alias
let verifyAge: VerifyAgeFunc = <VerifyAgeFunc>(
  ((age: number) => (age > 18 ? true : false))
);

<VerifyAgeFunc>function foo(age: number) {
  return true;
};

// add a property called `usedBy`
//verifyAge.usedBy = "Admin"; // allowed ✅.
