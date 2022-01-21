import React from 'react';
import {
  NotificationPanelPopper,
  NotificationPanelStyled,
  NotificationPanelArrowStyled,
} from './NotificationPanel.styled';
import {
  NotificationHeader,
  NotificationHeaderCloseButtonStyled,
  NotificationHeaderTextStyled,
} from '../notificationHeader';
import {
  NotificationFeed,
  customNotificationContentType,
  customPlaceholderContentType,
} from '../notificationFeed';

import {
  NotificationPreference,
  NotificationPreferenceBackButton,
} from '../notificationPreference';
import { FooterContent, NotificationFooter } from '../notificationFooter';
import { NotificationFeedItemProps } from '../notificationFeedItem';
import { Back } from '../icons/Back';
import { Close } from '../icons/Close';
import { useEngagespotReturnType } from '../engagespot/Engagespot';

export type Route = 'home' | 'preference';

export interface NotificationPanelProps {
  notifications: NotificationFeedItemProps[];
  visible: boolean;
  panelType?: 'normal' | 'floating';
  route: Route;
  setRoute: (route: Route) => void;
  hideFooter?: boolean;
  footerContent: FooterContent;
  enableWebPush: () => void;
  panelProps: useEngagespotReturnType['getPanelProps'];
  arrowProps: useEngagespotReturnType['getArrowProps'];
  panelOffsetProps: useEngagespotReturnType['getPanelOffsetProps'];
  renderNotificationContent?: customNotificationContentType;
  renderEmptyPlaceholderImage?: customPlaceholderContentType;
  togglePanelVisibility: (
    panelUpdateFn?: ((visibility: boolean) => boolean) | undefined
  ) => void;
}

type PanelProps = {
  ref: React.RefObject<HTMLDivElement>;
  style: React.CSSProperties;
};

type ArrowProps = {
  ref: React.RefObject<HTMLDivElement>;
  style: React.CSSProperties;
};

export function NotificationPanel({
  notifications = [],
  panelProps,
  arrowProps,
  route,
  setRoute,
  panelOffsetProps,
  footerContent,
  renderNotificationContent,
  renderEmptyPlaceholderImage,
  togglePanelVisibility,
  visible = false,
  enableWebPush,
}: NotificationPanelProps) {
  const label = route === 'home' ? 'Notifications' : 'Preferences';

  const setRouteAsHome = () => {
    setRoute('home');
  };

  return (
    <NotificationPanelPopper {...(panelProps() as PanelProps)}>
      <NotificationPanelArrowStyled
        {...(arrowProps() as ArrowProps)}
        route={route}
      />
      <NotificationPanelStyled {...panelOffsetProps()} visible={visible}>
        <NotificationHeader route={route}>
          <NotificationPreferenceBackButton
            onClick={setRouteAsHome}
            style={{
              visibility: route === 'preference' ? 'visible' : 'hidden',
            }}
          >
            <Back />
          </NotificationPreferenceBackButton>
          <NotificationHeaderTextStyled>{label}</NotificationHeaderTextStyled>
          <NotificationHeaderCloseButtonStyled
            onClick={() => {
              togglePanelVisibility?.();
            }}
          >
            <Close />
          </NotificationHeaderCloseButtonStyled>
        </NotificationHeader>
        {route === 'home' ? (
          <NotificationFeed
            notifications={notifications}
            empty={notifications.length === 0}
            renderCustomNotificationContent={renderNotificationContent}
            renderCustomPlaceholderContent={renderEmptyPlaceholderImage}
          />
        ) : (
          <NotificationPreference enableWebPush={enableWebPush} />
        )}
        <NotificationFooter footerContent={footerContent} />
      </NotificationPanelStyled>
    </NotificationPanelPopper>
  );
}
