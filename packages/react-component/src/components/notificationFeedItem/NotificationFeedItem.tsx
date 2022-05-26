import React, { useRef, useState } from 'react';

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

interface ClickableNotificationPayload {
  url: string;
  id: string;
  markAsClicked: () => void;
}

export type onFeedItemClickType = (
  evt: React.MouseEvent<HTMLDivElement, MouseEvent>,
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

export function NotificationFeedItem({
  heading,
  description,
  imageUrl,
  clickableUrl,
  placeholderImage,
  read,
  time,
  id,
  isMobile,
  onFeedItemClick,
  markAsClicked,
  deleteNotification,
}: NotificationFeedItemProps) {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [isImageBroken, setImageBroken] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropDownItems = [{ name: 'Delete', action: deleteNotification }];

  const onItemEnter = () => {
    setMenuVisibility(true);
  };

  const onItemLeave = () => {
    setMenuVisibility(false);
  };

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (dropdownRef.current?.contains(event.target as Node)) {
      return;
    }

    if (onFeedItemClick) {
      onFeedItemClick(event, { id, url: clickableUrl, markAsClicked });
      return;
    }

    if (!clickableUrl) {
      return;
    }

    markAsClicked();
    window.open(clickableUrl, '__blank');
  };

  const getSrc = () => {
    if (isImageBroken) {
      return placeholderImage;
    }
    if (imageUrl) {
      return imageUrl;
    }
    return 'false';
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
        <FeedItemHeader dangerouslySetInnerHTML={{ __html: heading }} />
        <FeedItemDescription
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <FeedItemTimeAgo>{time}</FeedItemTimeAgo>
      </FeedItemTextContent>
      <FeedItemMenu ref={dropdownRef}>
        <DropdownMenu
          items={dropDownItems}
          isVisible={isMobile || isMenuVisible}
          notificationId={id}
        />
        <FeedItemReadDot style={{ visibility: read ? 'hidden' : 'visible' }} />
      </FeedItemMenu>
    </FeedItemStyled>
  );
}
