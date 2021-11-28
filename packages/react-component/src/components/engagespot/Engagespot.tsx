import mapKeys from 'lodash.mapkeys';
import React from 'react';
import { useEngagespot, UseEngagespotOptions } from '@engagespot/react-hooks';
import { EngagespotProvider } from '../engagespotProvider';
import { NotificationPanel } from '../notificationPanel';
import { NotificationButton } from '../notificationButton';
import { ThemeOverrides, Mode } from '../../theme/theme';
import { NotificationFeedItemProps } from '../notificationFeedItem';

export type useEngagespotReturnType = ReturnType<typeof useEngagespot>;

export interface EngagespotProps extends UseEngagespotOptions {
  theme?: ThemeOverrides;
  mode?: Mode;
  panelOnly?: boolean;
}

const notificationItemResponseMap = {
  title: 'heading',
  message: 'description',
  icon: 'imageUrl',
  url: 'clickable',
  id: 'id',
  seenAt: 'time',
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
  userId,
  ...options
}: EngagespotProps) {
  const {
    isValid,
    page,
    notifications,
    panelVisibility,
    getButtonProps,
    getPanelProps,
    scroll,
    getPanelOffsetProps,
    togglePanelVisibility,
    useJumpToTop,
  } = useEngagespot({ apiKey, userId, ...options });

  const renderButtonAndPanel = () => {
    return (
      <>
        {!panelOnly && <NotificationButton buttonProps={getButtonProps} />}
        <NotificationPanel
          visible={panelVisibility}
          panelProps={getPanelProps}
          panelOffsetProps={getPanelOffsetProps}
          notifications={
            notifications.data ? notifications.data.map(transformFeedItem) : []
          }
        />
      </>
    );
  };

  console.log('Notifications is', notifications, 'current page', page);

  return (
    <EngagespotProvider
      theme={theme}
      mode={mode}
      state={{ panelVisibility, togglePanelVisibility, useJumpToTop, scroll }}
    >
      {isValid && renderButtonAndPanel()}
    </EngagespotProvider>
  );
}
