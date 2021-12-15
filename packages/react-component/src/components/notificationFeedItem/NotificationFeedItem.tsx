import React, { useState } from 'react';

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
  clickable: boolean;
  time: string;
  id: string;
}

const dropDownItems = ['Mark as Read', 'Delete'];

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
  clickable,
  read,
  time,
}: NotificationFeedItemProps) {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const onItemEnter = () => {
    setMenuVisibility(true);
  };

  const onItemLeave = () => {
    setMenuVisibility(false);
  };

  return (
    <FeedItemStyled
      clickable={clickable}
      onMouseEnter={onItemEnter}
      onMouseLeave={onItemLeave}
      onFocus={onItemEnter}
      onBlur={onItemLeave}
    >
      <FeedItemImage
        background={imageUrl ? `url('${imageUrl}')` : 'papayawhip'}
      />
      <FeedItemTextContent>
        <FeedItemHeader>{heading}</FeedItemHeader>
        <FeedItemDescription>{description}</FeedItemDescription>
        <FeedItemTimeAgo>{time}</FeedItemTimeAgo>
      </FeedItemTextContent>
      <FeedItemMenu>
        <DropdownMenu items={dropDownItems} isVisible={isMenuVisible} />
        {!read ? <FeedItemReadDot /> : null}
      </FeedItemMenu>
    </FeedItemStyled>
  );
}
