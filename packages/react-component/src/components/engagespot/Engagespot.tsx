import React, { Fragment, useState } from 'react';
import mapKeys from 'lodash.mapkeys';
import { useEngagespot, UseEngagespotOptions } from '@engagespot/react-hooks';

import { EngagespotProvider } from '../engagespotProvider';
import { NotificationPanel } from '../notificationPanel';
import {
  NotificationButton,
  customNotificationIcon,
} from '../notificationButton';
import { ThemeOverrides } from '../../theme/theme';
import { NotificationFeedItemProps } from '../notificationFeedItem';
import {
  customPlaceholderContentType,
  customNotificationContentType,
} from '../notificationFeed';
import { EngagespotStyled } from './Engagespot.styled';
import { Route } from '../notificationPanel/NotificationPanel';
import { defaultFooterContent, FooterContent } from '../notificationFooter';
import { onFeedItemClickType } from '../notificationFeedItem/NotificationFeedItem';
import ReactDOM from 'react-dom';

export type useEngagespotReturnType = ReturnType<typeof useEngagespot>;

export interface EngagespotProps
  extends Omit<UseEngagespotOptions, 'floatingPanelOptions'> {
  theme?: ThemeOverrides;
  panelOpenByDefault?: boolean;
  panelOnly?: boolean;
  feedItemPlaceholderImage?: string;
  hideNotificationAvatar?: boolean;
  hideJumpToTop?: boolean;
  headerText?: string;
  renderFooterContent?: FooterContent;
  renderNotificationIcon?: customNotificationIcon;
  renderEmptyPlaceholderImage?: customPlaceholderContentType;
  renderNotificationContent?: customNotificationContentType;
  onFeedItemClick?: onFeedItemClickType;
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
  apiKey,
  panelOnly = false,
  headerText,
  feedItemPlaceholderImage,
  userId,
  panelOpenByDefault = false,
  renderFooterContent,
  renderNotificationIcon,
  renderEmptyPlaceholderImage,
  renderNotificationContent,
  onFeedItemClick,
  ...options
}: EngagespotProps) {
  const {
    isValid,
    notifications,
    floatingPanel: {
      isMobile,
      panelVisibility,
      getButtonProps,
      getPanelProps,
      getArrowProps,
      scroll,
      getPanelOffsetProps,
      togglePanelVisibility,
    },
    useJumpToTop,
    hideBranding,
    enableWebPush,
    allowWebPush,
    webPushState,
  } = useEngagespot({
    apiKey,
    userId,
    ...options,
    floatingPanelOptions: {
      enableFloatingPanel: true,
      panelOpenByDefault,
    },
  });

  const [preference, togglePreference] = useState(false);
  const setRoute = (route: Route) => {
    if (route === 'preference') {
      togglePreference(true);
    } else {
      togglePreference(false);
    }
  };

  const footerContent = () => {
    if (hideBranding && renderFooterContent) {
      return renderFooterContent?.();
    }
    if (hideBranding && !renderFooterContent) {
      return null;
    }
    return defaultFooterContent();
  };

  const renderButtonAndPanel = () => {
    const renderPanel = () => (
      <NotificationPanel
        visible={panelVisibility}
        route={preference ? 'preference' : 'home'}
        setRoute={setRoute}
        panelProps={getPanelProps}
        panelOffsetProps={getPanelOffsetProps}
        arrowProps={getArrowProps}
        showPreferences={allowWebPush}
        renderNotificationContent={renderNotificationContent}
        renderEmptyPlaceholderImage={renderEmptyPlaceholderImage}
        togglePanelVisibility={togglePanelVisibility}
        enableWebPush={enableWebPush}
        webPushState={webPushState}
        footerContent={footerContent}
        headerText={headerText}
        notifications={
          notifications.data ? notifications.data.map(transformFeedItem) : []
        }
      />
    );

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
        {isMobile
          ? ReactDOM.createPortal(renderPanel(), document.body)
          : renderPanel()}
      </Fragment>
    );
  };

  return (
    <EngagespotProvider
      theme={theme}
      state={{
        panelVisibility,
        placeholderImage: feedItemPlaceholderImage,
        togglePanelVisibility,
        useJumpToTop,
        isMobile,
        scroll,
        preference,
        togglePreference,
        onFeedItemClick,
      }}
    >
      <EngagespotStyled>{isValid && renderButtonAndPanel()}</EngagespotStyled>
    </EngagespotProvider>
  );
}
