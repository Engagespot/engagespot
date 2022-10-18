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
import { onFeedItemClickType } from '../notificationFeedItem/NotificationFeedItem';
import { renderCustom } from '../../utils/renderCustom';

export type customPlaceholderContentType =
  | (() => React.ReactNode | string)
  | undefined;

export type customNotificationContentType =
  | ((notification: NotificationFeedItemProps) => React.ReactNode)
  | undefined;

const duration = 150;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};
const transitionStyles: { [id: string]: React.CSSProperties } = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export interface NotificationFeedProps {
  empty?: boolean;
  placeholderText?: string;
  renderCustomPlaceholderContent?: customPlaceholderContentType;
  renderNotificationBody?: customNotificationContentType;
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
  placeholderImage: string,
  isMobile: boolean,
  onFeedItemClick: onFeedItemClickType | undefined,
  deleteNotification: (id: string) => void,
  markAsRead: (id: string) => void,
  renderNotificationBody: customNotificationContentType
): React.ReactNode => {
  return (
    renderCustom(customRenderer, notification) || (
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
        data={notification.data}
        markAsClicked={() => markAsRead(notification.id)}
        deleteNotification={() => deleteNotification(notification.id)}
        isMobile={isMobile}
        onFeedItemClick={onFeedItemClick}
        renderNotificationBody={renderNotificationBody}
      />
    )
  );
};

export function NotificationFeed({
  empty = false,
  renderCustomPlaceholderContent,
  renderCustomNotificationContent,
  renderNotificationBody,
  notifications = [],
  placeholderText = `Shh! It's quiet around here...`,
}: NotificationFeedProps) {
  const engagespotContext = useEngagespotContext();
  const { onNotificationScroll, jumpToTop, showJumpToTop } =
    engagespotContext.useJumpToTop?.() || {};
  const { placeholderImage = PLACEHOLDER_DEFAULT } = engagespotContext;
  const isMobile = engagespotContext.isMobile || false;
  const onFeedItemClick = engagespotContext.onFeedItemClick;
  const setLoaderRef = engagespotContext.setLoaderRef;
  const hasMore = engagespotContext.hasMore;
  const deleteNotification = engagespotContext.deleteNotification;
  const markAsRead = engagespotContext.markAsRead;
  const onJumpToTopClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const notificationFeedEl = evt.currentTarget.parentNode?.parentElement;
    jumpToTop?.(notificationFeedEl as HTMLElement);
  };

  return (
    <NotificationFeedStyled
      id="engagespot-scroll-root"
      empty={empty}
      onScroll={onNotificationScroll}
    >
      <Transition in={showJumpToTop} timeout={duration}>
        {state => (
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
        renderCustom(renderCustomPlaceholderContent) ||
        renderPlaceholderContent(placeholderText)
      ) : (
        <>
          {notifications.map(notification => {
            return renderNotificationContent(
              notification,
              renderCustomNotificationContent,
              placeholderImage,
              isMobile,
              onFeedItemClick,
              deleteNotification!!,
              markAsRead!!,
              renderNotificationBody
            );
          })}
          {hasMore && <FeedItemPlaceholder loaderRef={setLoaderRef} />}
        </>
      )}
    </NotificationFeedStyled>
  );
}
