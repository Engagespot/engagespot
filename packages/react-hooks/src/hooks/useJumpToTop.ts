import { useState } from 'react';
import type { UIEvent as ReactUIEvent } from 'react';

const SCROLL_OFFSET = 300;

export function useJumpToTop(offset = SCROLL_OFFSET) {
  const [showJumpToTop, setShowJumpToTop] = useState(false);

  function onNotificationScroll(evt: ReactUIEvent<HTMLElement>) {
    if (evt.currentTarget?.scrollTop > offset) {
      setShowJumpToTop(true);
    } else {
      setShowJumpToTop(false);
    }
  }

  function jumpToTop(scrollableEl: HTMLElement) {
    scrollableEl?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return {
    jumpToTop,
    onNotificationScroll,
    showJumpToTop,
  };
}
