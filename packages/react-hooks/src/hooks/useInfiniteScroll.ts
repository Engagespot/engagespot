import 'intersection-observer';
import { useRef, useLayoutEffect, useState, useCallback } from 'react';

interface InfiniteScrollOptions {
  offset?: number;
  reset?: boolean;
  hasMore?: boolean;
  initialPage?: number;
}

/**
 *
 *
 * @param {InfiniteScrollOptions} {
 *   offset = 100,
 *   hasMore = false,
 *   reset = false,
 * }
 */
export function useInfiniteScroll({
  offset = 0,
  hasMore = false,
  reset = false,
  initialPage = 1,
}: InfiniteScrollOptions) {
  const [isLoaderSet, setIsLoaderSet] = useState(false);
  const [isContainerSet, setIsContainerSet] = useState(false);

  const [loaderEl, setLoaderEl] = useState<HTMLElement | null>(null);
  const [containerEl, setContainerEl] = useState<HTMLElement | null>(null);

  const loaderRef = useCallback(node => {
    if (node !== null) {
      setIsLoaderSet(true);
      setLoaderEl(node);
    }
  }, []);

  const containerRef = useCallback(node => {
    if (node !== null) {
      setIsContainerSet(true);
      setContainerEl(node);
    }
  }, []);

  const [page, setPage] = useState(initialPage);

  if (reset && page !== initialPage) {
    setPage(initialPage);
  }

  useLayoutEffect(() => {
    let previousRatio = 0;

    if (!loaderEl || !containerEl) {
      return;
    }

    function callback(entries: IntersectionObserverEntry[]) {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= previousRatio) {
          setPage(page => page + 1);
        }
        previousRatio = entry.intersectionRatio;
      });
    }

    const observer = new IntersectionObserver(callback, {
      root: containerEl,
      rootMargin: `0px 0px ${offset}px 0px`,
      threshold: 0.3,
    });
    observer.observe(loaderEl);

    return () => {
      return observer.disconnect();
    };
  }, [isContainerSet, isLoaderSet, hasMore, offset]);

  return {
    page,
    loaderRef,
    containerRef,
  };
}
