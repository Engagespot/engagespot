import React, { Fragment, useMemo, useRef, useState } from 'react';
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
import TemplateBlocks from '../webComponents';
import { TemplateBlock } from '../webComponents/types';
import { ChangeNotificationRequest } from '@engagespot/core';
import { EventListenersToRun } from '../engagespot/Engagespot';

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
  changeNotificationState: (data: ChangeNotificationRequest) => unknown;
  deleteNotification: () => unknown;
  renderNotificationBody: customNotificationContentType;
  data: Record<string, any>;
  blocks: TemplateBlock[];
  eventListenersToRun: EventListenersToRun[];
  eventAttachedBlockIdsRef: React.MutableRefObject<string[]>;
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
    blocks,
    changeNotificationState,
    eventListenersToRun,
    eventAttachedBlockIdsRef,
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

  React.useEffect(() => {
    // eventListenersToRun are given
    if (
      eventListenersToRun &&
      eventListenersToRun?.length > 0 &&
      blocks &&
      blocks.length > 0
    ) {
      // variable to store the cleanup functions
      let cleanupFunctions: any[] = [];

      //  we have actionable blocks
      const blockIds = blocks.map(item => item.id);

      const unattachedEventTargetIds = eventListenersToRun
        .map(item => item.targetId)
        // check if event already attached to a block
        .filter(item => !eventAttachedBlockIdsRef.current?.includes(item));

      const currentBlocksMatchingEventArray = unattachedEventTargetIds.filter(
        id => {
          return blockIds.includes(id);
        }
      );

      // Check if this notification block has any eventListenersToRun ids
      if (currentBlocksMatchingEventArray.length > 0) {
        eventAttachedBlockIdsRef.current = [
          ...eventAttachedBlockIdsRef.current,
          ...currentBlocksMatchingEventArray,
        ];

        currentBlocksMatchingEventArray.forEach(currentBlockMatchingEvent => {
          const selectedEventListenerToRun = eventListenersToRun.find(
            item => item.targetId === currentBlockMatchingEvent
          );

          if (!selectedEventListenerToRun) return;

          const selectedElements = document.querySelectorAll(
            `#${selectedEventListenerToRun?.targetId}`
          );

          // we could also disable button or whole parent,
          // since we have its id
          // based on a props, if we want conditionally
          // element.disable
          // element.parent.style = pointer.event = none /** something like this */
          const callBackFunctionWithNotificationData = ({
            event,
          }: {
            event: Event;
          }) => {
            //  selectedElement.disable  = true;

            selectedEventListenerToRun?.callbackFunction({
              event,
              notification,
            });

            //  selectedElement.disable  = false;
            // conditionally ? element.disable  = false : null
          };

          // add event listener
          selectedElements?.forEach(element => {
            element?.addEventListener(
              `${selectedEventListenerToRun?.event}`,
              event => callBackFunctionWithNotificationData({ event })
            );
          });

          // push the remove event listener cleanup function to the array
          selectedElements?.forEach(element => {
            cleanupFunctions.push(() => {
              element?.removeEventListener(
                `${selectedEventListenerToRun?.event}`,
                event => callBackFunctionWithNotificationData({ event })
              );
            });
          });
        });
      }

      // return a function that calls all the cleanup functions
      return () => {
        cleanupFunctions?.forEach(cleanup => cleanup());
      };
    }
  }, [blocks, eventListenersToRun, notification]);

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
            {blocks && blocks.length > 0 && (
              <TemplateBlocks blocks={blocks}></TemplateBlocks>
            )}

            {/* test button */}
            {/* <button
              style={{
                border: '1px solid black',
                background: 'green',
              }}
              onClick={evt => {
                console.log('state change dummy button fire');
                evt.stopPropagation();
                changeNotificationState({
                  state: 'reject',
                });
              }}
            >
              state change
            </button> */}

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
