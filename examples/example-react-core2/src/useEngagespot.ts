import { InstanceOptions, State, createInstance } from '@engagespot/core2';
import { useStore } from 'zustand';
import { useRef, useMemo } from 'react';

const getStore = (options: InstanceOptions) => {
  console.log('Calling multiple times??');
  const engagespot = createInstance(options);
  const store = engagespot.__store;
  function useBoundStore<T>(
    selector: (state: State) => T,
    equals?: (a: T, b: T) => boolean
  ): T {
    return useStore(store, selector, equals);
  }
  return useBoundStore;
};

export function useEngagespot(options: InstanceOptions) {
  const ref = useRef<ReturnType<typeof getStore> | null>(null);

  if (!ref.current) {
    ref.current = getStore(options);
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const useStore = ref.current!;

  const proxy = useMemo(() => {
    return new Proxy({} as State, {
      get: <T extends keyof State>(_: Record<string, any>, prop: T) => {
        return useStore(state => state[prop]);
      },
    });
  }, [useStore]);

  console.log('Final ref', ref);
  return proxy;
}
