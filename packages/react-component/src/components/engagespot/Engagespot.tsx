import React, { Fragment } from 'react';
import mapKeys from 'lodash.mapkeys';
import { useEngagespot, UseEngagespotOptions } from '@engagespot/react-hooks';

import { EngagespotProvider } from '../engagespotProvider';
import { NotificationPanel } from '../notificationPanel';
import {
  NotificationButton,
  customNotificationIcon,
} from '../notificationButton';
import { ThemeOverrides, Mode } from '../../theme/theme';
import { NotificationFeedItemProps } from '../notificationFeedItem';
import {
  customPlaceholderContentType,
  customNotificationContentType,
} from '../notificationFeed';
import { EngagespotStyled } from './Engagespot.styled';

export type useEngagespotReturnType = ReturnType<typeof useEngagespot>;

export interface EngagespotProps extends UseEngagespotOptions {
  theme?: ThemeOverrides;
  mode?: Mode;
  panelOnly?: boolean;
  placeholderImage?: string;
  hideNotificationAvatar?: boolean;
  hideJumpToTop?: boolean;
  renderNotificationIcon?: customNotificationIcon;
  renderEmptyPlaceholderImage?: customPlaceholderContentType;
  renderNotificationContent?: customNotificationContentType;
}

const notificationItemResponseMap = {
  title: 'heading',
  message: 'description',
  icon: 'imageUrl',
  url: 'clickableUrl',
  id: 'id',
  createdAt: 'time',
  clickedAt: 'clickedAt',
  markAsClicked: 'markAsClicked',
  deleteNotification: 'deleteNotification',
};

const transformNotificationItem = (
  value: string,
  key: keyof typeof notificationItemResponseMap
) => {
  return notificationItemResponseMap[key];
};

const transformFeedItem = (notification: any) => {
  return mapKeys(
    notification,
    transformNotificationItem
  ) as NotificationFeedItemProps;
};

export function Engagespot({
  theme,
  mode,
  apiKey,
  panelOnly = false,
  placeholderImage,
  userId,
  renderNotificationIcon,
  renderEmptyPlaceholderImage,
  renderNotificationContent,
  ...options
}: EngagespotProps) {
  const {
    isValid,
    notifications,
    panelVisibility,
    getButtonProps,
    getPanelProps,
    getArrowProps,
    scroll,
    getPanelOffsetProps,
    togglePanelVisibility,
    useJumpToTop,
  } = useEngagespot({ apiKey, userId, ...options });

  const renderButtonAndPanel = () => {
    return (
      <Fragment>
        {!panelOnly && (
          <NotificationButton
            buttonProps={getButtonProps}
            unreadCount={notifications.unreadCount}
            panelOpen={panelVisibility}
            renderNotificationIcon={renderNotificationIcon}
          />
        )}
        <NotificationPanel
          visible={panelVisibility}
          panelProps={getPanelProps}
          panelOffsetProps={getPanelOffsetProps}
          arrowProps={getArrowProps}
          renderNotificationContent={renderNotificationContent}
          renderEmptyPlaceholderImage={renderEmptyPlaceholderImage}
          notifications={
            notifications.data ? notifications.data.map(transformFeedItem) : []
          }
        />
      </Fragment>
    );
  };

  return (
    <EngagespotProvider
      theme={theme}
      mode={mode}
      state={{
        panelVisibility,
        placeholderImage,
        togglePanelVisibility,
        useJumpToTop,
        scroll,
      }}
    >
      <EngagespotStyled>{isValid && renderButtonAndPanel()}</EngagespotStyled>
    </EngagespotProvider>
  );
}
