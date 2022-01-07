import React, { Fragment } from 'react';
import { Transition } from 'react-transition-group';

import {
  NotificationFeedStyled,
  NotificationEmptyPlaceholderText,
  JumpToTopPositioning,
} from './NotificationFeed.styled';
import { NotificationEmpty as NotificationEmptyPlaceholder } from '../icons/NotificationEmpty';

import {
  NotificationFeedItem,
  FeedItemPlaceholder,
  NotificationFeedItemProps,
} from '../notificationFeedItem';

import { JumpToTop } from '../jumpToTop';

import { useEngagespotContext } from '../engagespotProvider';
import { PLACEHOLDER_DEFAULT } from '../../constants';

export type customPlaceholderContentType = (() => React.ReactNode) | undefined;

export type customNotificationContentType =
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
    <Fragment>
      <NotificationEmptyPlaceholder />
      <NotificationEmptyPlaceholderText>
        {placeholderText}
      </NotificationEmptyPlaceholderText>
    </Fragment>
  );
};

const renderNotificationContent = (
  notification: NotificationFeedItemProps,
  customRenderer: customNotificationContentType,
  placeholderImage: string
): React.ReactNode => {
  return (
    customRenderer?.(notification) || (
      <NotificationFeedItem
        heading={notification.heading}
        clickableUrl={notification.clickableUrl}
        description={notification.description}
        imageUrl={notification.imageUrl}
        read={notification.clickedAt != null}
        time={notification.time}
        placeholderImage={placeholderImage}
        key={notification.id}
        id={notification.id}
        markAsClicked={notification.markAsClicked}
        deleteNotification={notification.deleteNotification}
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
  const { onNotificationScroll, jumpToTop, showJumpToTop } =
    engagespotContext.useJumpToTop?.() || {};
  const { loaderRef, containerRef, hasMore } = engagespotContext.scroll || {};
  const { placeholderImage = PLACEHOLDER_DEFAULT } = engagespotContext;

  function onJumpToTopClick(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const notificationFeedEl = evt.currentTarget.parentNode?.parentElement;
    jumpToTop?.(notificationFeedEl as HTMLElement);
  }

  return (
    <NotificationFeedStyled
      empty={empty}
      ref={containerRef}
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
          {notifications.map(notification => {
            return renderNotificationContent(
              notification,
              renderCustomNotificationContent,
              placeholderImage
            );
          })}
          {hasMore && <FeedItemPlaceholder loaderRef={loaderRef} />}
        </>
      )}
    </NotificationFeedStyled>
  );
}
