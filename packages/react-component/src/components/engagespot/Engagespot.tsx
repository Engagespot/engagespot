import React, { Fragment, useRef, useState } from 'react';
import mapKeys from 'lodash.mapkeys';
import {
  useEngagespot,
  useInfiniteScroll,
  useBrowserWebPush,
  useFloatingNotification,
  UseEngagespotOptions,
  InfiniteScrollInstance,
  FloatingNotificationInstance,
  BrowserWebPushInstance,
  RawNotification,
} from '@engagespot/react-hooks';

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
import { DropdownMenuProps } from '../dropdownMenu';
import { customRenderFn, renderCustom } from 'src/utils/renderCustom';

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
  renderFooterContent?: customRenderFn;
  renderNotificationIcon?: customRenderFn;
  renderEmptyPlaceholderImage?: customRenderFn;
  renderNotificationContent?: customRenderFn<customNotificationContentType>;
  onFeedItemClick?: onFeedItemClickType;
  headerDropdownItems?: DropdownMenuProps['items'];
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
  headerDropdownItems,
  ...options
}: EngagespotProps) {
  const scrollRootRef = useRef<HTMLElement | null>();
  scrollRootRef.current = document.getElementById('engagespot-scroll-root');
  const {
    notifications,
    setLoaderRef,
    hasMore,
    isMobile,
    panelVisibility,
    getButtonProps,
    getPanelProps,
    getArrowProps,
    getPanelOffsetProps,
    togglePanelVisibility,
    useJumpToTop,
    hideBranding,
    enableWebPush,
    allowWebPush,
    webPushState,
    deleteNotification,
    markAsRead,
    unreadCount,
    preferences,
    getPreferences,
    setPreferences,
  } = useEngagespot<
    RawNotification,
    InfiniteScrollInstance,
    FloatingNotificationInstance,
    BrowserWebPushInstance
  >({
    apiKey,
    userId,
    ...options,
    floatingPanelOptions: {
      panelOpenByDefault,
    },
    plugins: [useInfiniteScroll, useBrowserWebPush, useFloatingNotification],
    scrollRoot: scrollRootRef.current,
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
      return renderCustom(renderFooterContent);
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
        headerDropdownItems={headerDropdownItems || []}
        notifications={
          notifications ? notifications.map(transformFeedItem) : []
        }
      />
    );

    return (
      <Fragment>
        {!panelOnly && (
          <NotificationButton
            buttonProps={getButtonProps}
            unreadCount={unreadCount}
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
        preference,
        togglePreference,
        onFeedItemClick,
        setLoaderRef,
        hasMore,
        deleteNotification,
        markAsRead,
        preferences,
        setPreferences,
      }}
    >
      <EngagespotStyled>{renderButtonAndPanel()}</EngagespotStyled>
    </EngagespotProvider>
  );
}
