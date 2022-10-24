import { Fragment, useMemo, useRef, useState } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';

import {
  FeedItemStyled,
  FeedItemDescription,
  FeedItemHeader,
  FeedItemImage,
  FeedItemMenu,
  FeedItemTextContent,
  FeedItemTimeAgo,
  FeedItemPlaceholderImage,
  FeedItemPlaceholderStyled,
  FeedItemTextContentPlaceholder,
  FeedItemDescriptionPlaceholder,
  FeedItemHeaderPlaceholder,
  PlaceholderAnimation,
} from './NotificationFeedItem.styled';
import { DropdownMenu } from '../dropdownMenu';
import { Circle as FeedItemReadDot } from '../icons/Circle';
import themeConfig from '../../theme/themeConfig';
import { customNotificationContentType } from '../notificationFeed';
import { renderCustom } from '../../../src/utils/renderCustom';

interface ClickableNotificationPayload {
  url: string;
  id: string;
  markAsClicked: () => void;
}

export type onFeedItemClickType = (
  evt: ReactMouseEvent<HTMLDivElement, MouseEvent>,
  payload: ClickableNotificationPayload
) => void;

export interface NotificationFeedItemProps {
  heading: string;
  description: string;
  imageUrl: string;
  read: boolean;
  clickableUrl: string;
  time: string;
  id: string;
  clickedAt?: string;
  placeholderImage: string;
  isMobile?: boolean;
  onFeedItemClick?: onFeedItemClickType;
  markAsClicked: () => unknown;
  deleteNotification: () => unknown;
  renderNotificationBody: customNotificationContentType;
  data: Record<string, any>;
}

export function FeedItemPlaceholder({ loaderRef }: any) {
  return (
    <div ref={loaderRef}>
      <FeedItemPlaceholderStyled>
        <FeedItemPlaceholderImage>
          <PlaceholderAnimation circle={true} />
        </FeedItemPlaceholderImage>
        <FeedItemTextContentPlaceholder>
          <FeedItemHeaderPlaceholder>
            <PlaceholderAnimation>&nbsp;</PlaceholderAnimation>
          </FeedItemHeaderPlaceholder>
          <FeedItemDescriptionPlaceholder>
            <PlaceholderAnimation>&nbsp;</PlaceholderAnimation>
          </FeedItemDescriptionPlaceholder>
        </FeedItemTextContentPlaceholder>
      </FeedItemPlaceholderStyled>
      <FeedItemPlaceholderStyled>
        <FeedItemPlaceholderImage>
          <PlaceholderAnimation circle={true} />
        </FeedItemPlaceholderImage>
        <FeedItemTextContentPlaceholder>
          <FeedItemHeaderPlaceholder>
            <PlaceholderAnimation>&nbsp;</PlaceholderAnimation>
          </FeedItemHeaderPlaceholder>
          <FeedItemDescriptionPlaceholder>
            <PlaceholderAnimation>&nbsp;</PlaceholderAnimation>
          </FeedItemDescriptionPlaceholder>
        </FeedItemTextContentPlaceholder>
      </FeedItemPlaceholderStyled>
    </div>
  );
}

export function NotificationFeedItem(notification: NotificationFeedItemProps) {
  const {
    heading,
    description,
    imageUrl,
    clickableUrl,
    placeholderImage,
    read,
    time,
    id,
    data,
    renderNotificationBody,
    isMobile,
    onFeedItemClick,
    markAsClicked,
    deleteNotification,
  } = notification;
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [isImageBroken, setImageBroken] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropDownItems = useMemo(() => {
    if (read) return [{ name: 'Delete', action: deleteNotification }];
    return [
      { name: 'Delete', action: deleteNotification },
      { name: 'Mark As Read', action: markAsClicked },
    ];
  }, [read]);

  const onItemEnter = () => {
    setMenuVisibility(true);
  };

  const onItemLeave = () => {
    setMenuVisibility(false);
  };

  const onClick = (event: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    if (dropdownRef.current?.contains(event.target as Node)) {
      return;
    }

    if (onFeedItemClick) {
      onFeedItemClick(event, {
        url: clickableUrl,
        ...notification,
        markAsClicked,
      });
      return;
    }

    if (!clickableUrl) {
      return;
    }

    markAsClicked();
    window.open(clickableUrl, '__blank');
  };

  const getSrc = () => {
    if (imageUrl) {
      return imageUrl;
    }
    if (isImageBroken) {
      return placeholderImage;
    }

    return placeholderImage;
  };

  return (
    <FeedItemStyled
      clickable={clickableUrl != null}
      onMouseEnter={onItemEnter}
      onMouseLeave={onItemLeave}
      onFocus={onItemEnter}
      onBlur={onItemLeave}
      onClick={onClick}
    >
      <FeedItemImage
        src={getSrc()}
        onError={() => {
          setImageBroken(true);
        }}
      />
      <FeedItemTextContent>
        {renderCustom(renderNotificationBody, notification) || (
          <Fragment>
            <FeedItemHeader dangerouslySetInnerHTML={{ __html: heading }} />
            <FeedItemDescription
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <FeedItemTimeAgo>{time}</FeedItemTimeAgo>
          </Fragment>
        )}
      </FeedItemTextContent>
      <FeedItemMenu ref={dropdownRef}>
        <DropdownMenu
          items={dropDownItems}
          isVisible={isMobile || isMenuVisible}
          theme={themeConfig.dropdown}
        />
        <FeedItemReadDot style={{ visibility: read ? 'hidden' : 'visible' }} />
      </FeedItemMenu>
    </FeedItemStyled>
  );
}
