import React, { Fragment, useState } from 'react';
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
import { Route } from '../notificationPanel/NotificationPanel';
import { defaultFooterContent, FooterContent } from '../notificationFooter';

export type useEngagespotReturnType = ReturnType<typeof useEngagespot>;

export interface EngagespotProps extends UseEngagespotOptions {
  theme?: ThemeOverrides;
  mode?: Mode;
  panelOnly?: boolean;
  placeholderImage?: string;
  hideNotificationAvatar?: boolean;
  hideJumpToTop?: boolean;
  renderFooterContent?: FooterContent;
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
  created: 'time',
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
  renderFooterContent,
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
    isMobile,
    hideBranding,
    enableWebPush,
    useSystemDarkTheme,
  } = useEngagespot({ apiKey, userId, ...options });

  console.log('Hide branding', hideBranding);

  const systemDarkThemeEnabled = useSystemDarkTheme();
  const [preference, togglePreference] = useState(false);

  const setRoute = (route: Route) => {
    if (route === 'preference') {
      togglePreference(true);
    } else {
      togglePreference(false);
    }
  };

  const footerContent = () => {
    return defaultFooterContent;
    if (hideBranding && renderFooterContent) {
      return renderFooterContent;
    }
    if (hideBranding && !renderFooterContent) {
      return null;
    }
  };

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
          route={preference ? 'preference' : 'home'}
          setRoute={setRoute}
          panelProps={getPanelProps}
          panelOffsetProps={getPanelOffsetProps}
          arrowProps={getArrowProps}
          renderNotificationContent={renderNotificationContent}
          renderEmptyPlaceholderImage={renderEmptyPlaceholderImage}
          togglePanelVisibility={togglePanelVisibility}
          enableWebPush={enableWebPush}
          footerContent={footerContent}
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
      systemTheme={systemDarkThemeEnabled ? 'dark' : 'light'}
      mode={mode}
      state={{
        panelVisibility,
        placeholderImage,
        togglePanelVisibility,
        useJumpToTop,
        scroll,
        isMobile,
        preference,
        togglePreference,
      }}
    >
      <EngagespotStyled>{isValid && renderButtonAndPanel()}</EngagespotStyled>
    </EngagespotProvider>
  );
}
