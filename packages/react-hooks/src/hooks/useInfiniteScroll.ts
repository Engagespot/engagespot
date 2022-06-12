import 'intersection-observer';
import {
  useRef,
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { Actions } from 'src/utils/actions';
import { RawData } from 'src/utils/initialState';

interface InfiniteScrollOptions {
  offset?: number;
  reset?: boolean;
  initialPage?: number;
}

export interface useInfiniteScrollProps {
  scrollRoot?: HTMLElement;
}

export interface InfiniteScrollInstance {
  hasMore: boolean;
  setLoaderRef: (loaderRef: any) => void;
}

Actions.SetPage = 'SetPage';
Actions.IncrementPage = 'IncrementPage';
Actions.SetHasMore = 'SetHasMore';
Actions.SetLoadRef = 'SetLoadRef';

function reducer(state: any, action: any) {
  if (action.type === Actions.SetData) {
    const currentPage = state.page;
    const totalPages = state.totalPages;
    return {
      ...state,
      hasMore: currentPage < totalPages,
    };
  } else if (action.type === Actions.SetPage) {
    return {
      ...state,
      page: action.payload.page,
    };
  } else if (action.type === Actions.IncrementPage) {
    return {
      ...state,
      page: state.page + 1,
    };
  } else if (action.type === Actions.SetHasMore) {
    return {
      ...state,
      page: state.page + 1,
      hasMore: action.payload.hasMore,
    };
  } else if (action.type === Actions.SetLoadRef) {
    return {
      ...state,
      loaderRef: action.payload.loaderRef,
    };
  }

  return state;
}

function dataTransformer(rawData: RawData, transformedData: unknown) {
  return rawData.flatMap(data => data.notifications);
}

useInfiniteScroll.pluginName = 'useInfiniteScroll';

/**
 *
 *
 * @param {InfiniteScrollOptions} {
 *   offset = 100,
 *   hasMore = false,
 *   reset = false,
 * }
 */
export function useInfiniteScroll(hooks: any) {
  hooks.stateReducers.push(reducer);
  hooks.dataTransformer.push(dataTransformer);
  hooks.useInstance.push(useInstance);
}

function useInstance(instance: any) {
  let offset = 0;
  let reset = false;
  let initialPage = 1;
  const rootEl = instance.scrollRoot;

  const page = instance.reducerState.page as number;
  const loaderRef = instance.reducerState.loaderRef;

  const setPage = useCallback(
    page =>
      instance.dispatch({ type: Actions.SetPage, payload: { page: page } }),
    [page]
  );
  const incrementPage = useCallback(
    () => instance.dispatch({ type: Actions.IncrementPage }),
    []
  );
  const setLoaderRef = useCallback((loaderRef: any) => {
    instance.dispatch({
      type: Actions.SetLoadRef,
      payload: {
        loaderRef: loaderRef,
      },
    });
  }, []);

  if (reset && page !== initialPage) {
    setPage(initialPage);
  }

  useEffect(() => {
    if (!loaderRef) {
      return;
    }

    let previousRatio = 0;
    function callback(entries: IntersectionObserverEntry[]) {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= previousRatio) {
          incrementPage();
        }
        previousRatio = entry.intersectionRatio;
      });
    }

    const observer = new IntersectionObserver(callback, {
      root: rootEl,
      rootMargin: `0px 0px ${offset}px 0px`,
      threshold: 0.3,
    });
    if (loaderRef) {
      observer.observe(loaderRef);
    }

    return () => {
      return observer.disconnect();
    };
  }, [loaderRef]);

  Object.assign(instance, {
    hasMore: instance.reducerState.hasMore,
    setLoaderRef,
  });
}
