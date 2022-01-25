import React, { Fragment, useState } from 'react';
import { useLocalStorage } from 'react-use';

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
  NotificationPreferenceOverlay,
  NotificationPreferenceBackButton,
  NotificationPreferenceModal,
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
  webPushState: globalThis.PermissionState;
  showPreferences: boolean;
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
  webPushState,
  setRoute,
  panelOffsetProps,
  footerContent,
  renderNotificationContent,
  renderEmptyPlaceholderImage,
  togglePanelVisibility,
  visible = false,
  showPreferences,
  enableWebPush,
}: NotificationPanelProps) {
  const label = route === 'home' ? 'Notifications' : 'Preferences';

  const setRouteAsHome = () => {
    setRoute('home');
  };

  const [preferenceModal, showPreferenceModal] = useState(true);
  const [showNotificationOverlay, setLocalStorageValue, remove] =
    useLocalStorage('showNotificationOverlay', 'true');

  const closeModal = () => {
    showPreferenceModal(false);
    setLocalStorageValue('false');
  };

  const allowNotifications = () => {
    showPreferenceModal(false);
    enableWebPush();
    setLocalStorageValue('false');
  };

  const renderPreferenceModal = () => {
    if (
      preferenceModal &&
      showPreferences &&
      showNotificationOverlay == 'true'
    ) {
      return (
        <Fragment>
          <NotificationPreferenceOverlay className="overlay" />
          <NotificationPreferenceModal
            allowNotifications={allowNotifications}
            closeModal={closeModal}
          />
        </Fragment>
      );
    }
    return null;
  };

  const renderRoute = (route: Route) => {
    if (route === 'home') {
      return (
        <NotificationFeed
          notifications={notifications}
          empty={notifications.length === 0}
          renderCustomNotificationContent={renderNotificationContent}
          renderCustomPlaceholderContent={renderEmptyPlaceholderImage}
        />
      );
    }
    if (route === 'preference') {
      return (
        <NotificationPreference
          enableWebPush={enableWebPush}
          webPushState={webPushState}
        />
      );
    }
    return null;
  };

  const renderHeader = (route: Route, label: string) => {
    return (
      <NotificationHeader>
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
    );
  };

  return (
    <NotificationPanelPopper {...(panelProps() as PanelProps)}>
      <NotificationPanelArrowStyled {...(arrowProps() as ArrowProps)} />
      <NotificationPanelStyled {...panelOffsetProps()} visible={visible}>
        {renderPreferenceModal()}
        {renderHeader(route, label)}
        {renderRoute(route)}
        <NotificationFooter
          footerContent={footerContent}
          showPreferences={showPreferences}
        />
      </NotificationPanelStyled>
    </NotificationPanelPopper>
  );
}
