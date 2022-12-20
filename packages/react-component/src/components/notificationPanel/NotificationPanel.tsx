import { Fragment, useState } from 'react';
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
import { DropdownMenu, DropdownMenuProps } from '../dropdownMenu';
import themeConfig from '../../theme/themeConfig';

export type Route = 'home' | 'preference';

export interface NotificationPanelProps {
  notifications: NotificationFeedItemProps[];
  visible: boolean;
  panelType?: 'normal' | 'floating';
  route: Route;
  headerText?: string;
  setRoute: (route: Route) => void;
  hideFooter?: boolean;
  footerContent: FooterContent;
  headerDropdownItems: DropdownMenuProps['items'];
  enableWebPush: () => void;
  webPushState: globalThis.PermissionState;
  showPreferences: boolean;
  panelProps: useEngagespotReturnType['floatingPanel']['getPanelProps'];
  arrowProps: useEngagespotReturnType['floatingPanel']['getArrowProps'];
  panelOffsetProps: useEngagespotReturnType['floatingPanel']['getPanelOffsetProps'];
  renderNotificationContent?: customNotificationContentType;
  renderNotificationBody?: customNotificationContentType;
  renderEmptyPlaceholderImage?: customPlaceholderContentType;
  togglePanelVisibility: (
    panelUpdateFn?: ((visibility: boolean) => boolean) | undefined
  ) => void;
}

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
  renderNotificationBody,
  renderEmptyPlaceholderImage,
  togglePanelVisibility,
  visible = false,
  showPreferences,
  enableWebPush,
  headerDropdownItems = [],
  headerText = 'Notifications',
}: NotificationPanelProps) {
  const label = route === 'home' ? headerText : 'Preferences';

  const setRouteAsHome = () => {
    setRoute('home');
  };

  const setRouteAsPreferences = () => {
    setRoute('preference');
  };

  const preferences = showPreferences
    ? [{ name: 'Preferences', action: setRouteAsPreferences }]
    : webPushState === 'prompt'
    ? [
        {
          name: 'Enable Desktop Notifications',
          action: enableWebPush,
        },
      ]
    : [];
  const dropDownItems = preferences.concat(headerDropdownItems);

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
    if (preferenceModal && showNotificationOverlay == 'true') {
      return (
        <Fragment>
          <NotificationPreferenceOverlay />
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
          renderNotificationBody={renderNotificationBody}
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
        {dropDownItems.length > 0 ? (
          <DropdownMenu
            items={dropDownItems}
            isVisible={true}
            theme={themeConfig.headerDropdown}
          />
        ) : null}

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
    <NotificationPanelPopper {...panelProps()}>
      <NotificationPanelArrowStyled {...arrowProps()} />
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
