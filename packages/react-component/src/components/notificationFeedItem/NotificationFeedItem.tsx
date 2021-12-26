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
  markAsClicked,
  deleteNotification,
}: NotificationFeedItemProps) {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [isImageBroken, setImageBroken] = useState(false);
  const [isNotificationClicked, setNotificationClicked] = useState(false);
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
    setNotificationClicked(true);
    markAsClicked();
    window.open(clickableUrl, '__blank');
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
        src={isImageBroken ? placeholderImage : imageUrl}
        onError={() => {
          setImageBroken(true);
        }}
      />
      <FeedItemTextContent>
        <FeedItemHeader>{heading}</FeedItemHeader>
        <FeedItemDescription>{description}</FeedItemDescription>
        <FeedItemTimeAgo>{time}</FeedItemTimeAgo>
      </FeedItemTextContent>
      <FeedItemMenu ref={dropdownRef}>
        <DropdownMenu
          items={dropDownItems}
          isVisible={isMenuVisible}
          notificationId={id}
        />
        {!read && !isNotificationClicked ? <FeedItemReadDot /> : null}
      </FeedItemMenu>
    </FeedItemStyled>
  );
}
