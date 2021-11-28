import React from 'react';
import { Transition } from 'react-transition-group';

import {
  NotificationFeedStyled,
  NotificationEmptyPlaceholderText,
  JumpToTopPositioning,
} from './NotificationFeed.styled';
// import { ReactComponent as NotificationEmptyPlaceholder } from '../../assets/icons/notificationEmpty.svg';

import {
  NotificationFeedItem,
  FeedItemPlaceholder,
  NotificationFeedItemProps,
} from '../notificationFeedItem';

import { JumpToTop } from '../jumpToTop';
import { useJumpToTop } from '@engagespot/react-hooks';

import { useEngagespotContext } from '../engagespotProvider';

type customPlaceholderContentType = (() => React.ReactNode) | undefined;

type customNotificationContentType =
  | ((notification: NotificationFeedItemProps) => React.ReactNode)
  | undefined;

const duration = 150;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

type TransitionState = keyof typeof transitionStyles;

export interface NotificationFeedProps {
  empty?: boolean;
  placeholderText?: string;
  renderCustomPlaceholderContent?: customPlaceholderContentType;
  renderCustomNotificationContent?: customNotificationContentType;
  notifications: NotificationFeedItemProps[];
}

const renderPlaceholderContent = (placeholderText: string): React.ReactNode => {
  return (
    <>
      {/* <NotificationEmptyPlaceholder /> */}
      <NotificationEmptyPlaceholderText>
        {placeholderText}
      </NotificationEmptyPlaceholderText>
    </>
  );
};

const renderNotificationContent = (
  notification: NotificationFeedItemProps,
  customRenderer: customNotificationContentType
): React.ReactNode => {

  return (
    customRenderer?.(notification) || (
      <NotificationFeedItem
        heading={notification.heading}
        clickable={notification.clickable}
        description={notification.description}
        imageUrl={notification.imageUrl}
        read={notification.read}
        time={notification.time}
        //key={notification.id}
        id={notification.id}
      />
    )
  );
};

export function NotificationFeed({
  empty = false,
  renderCustomPlaceholderContent,
  renderCustomNotificationContent,
  notifications = [],
  placeholderText = `Shh! It's quiet around here...`,
}: NotificationFeedProps) {
  const engagespotContext = useEngagespotContext();
  const {onNotificationScroll, jumpToTop, showJumpToTop} = useJumpToTop();
  const { loaderRef, containerRef, hasMore } = engagespotContext.scroll || {};

  function onJumpToTopClick(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const notificationFeedEl = evt.currentTarget.parentNode?.parentElement;
    jumpToTop(notificationFeedEl as HTMLElement);
  }

  return (
    <NotificationFeedStyled
      empty={empty}
      ref={containerRef}
      // TODO:- Throttle onScroll calls
      onScroll={onNotificationScroll}
    >
      <Transition in={showJumpToTop} timeout={duration}>
        {(state: TransitionState) => (
          <JumpToTopPositioning
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <JumpToTop onClick={onJumpToTopClick} />
          </JumpToTopPositioning>
        )}
      </Transition>

      {empty ? (
        renderCustomPlaceholderContent?.() ||
        renderPlaceholderContent(placeholderText)
      ) : (
        <>
          {notifications.map((notification) => {
            return renderNotificationContent(
              notification,
              renderCustomNotificationContent
            );
          })}
          {hasMore && <FeedItemPlaceholder loaderRef={loaderRef} />}
        </>
      )}
    </NotificationFeedStyled>
  );
}
