import React from 'react';
import {
  NotificationPanelPopper,
  NotificationPanelStyled,
  NotificationPanelArrowStyled,
} from './NotificationPanel.styled';
import { NotificationHeader } from '../notificationHeader';
import {
  NotificationFeed,
  customNotificationContentType,
  customPlaceholderContentType,
} from '../notificationFeed';
import { NotificationFooter } from '../notificationFooter';
import { NotificationFeedItemProps } from '../notificationFeedItem';
import { useEngagespotReturnType } from '../engagespot/Engagespot';

export interface NotificationPanelProps {
  notifications: NotificationFeedItemProps[];
  visible: boolean;
  panelType?: 'normal' | 'floating';
  hideFooter?: boolean;
  panelProps: useEngagespotReturnType['getPanelProps'];
  arrowProps: useEngagespotReturnType['getArrowProps'];
  panelOffsetProps: useEngagespotReturnType['getPanelOffsetProps'];
  renderNotificationContent?: customNotificationContentType;
  renderEmptyPlaceholderImage?: customPlaceholderContentType;
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
  panelOffsetProps,
  hideFooter = false,
  renderNotificationContent,
  renderEmptyPlaceholderImage,
  visible = false,
}: NotificationPanelProps) {
  return (
    <NotificationPanelPopper {...(panelProps() as PanelProps)}>
      <NotificationPanelArrowStyled {...(arrowProps() as ArrowProps)} />
      <NotificationPanelStyled {...panelOffsetProps()} visible={visible}>
        <NotificationHeader label="Notifications" />
        <NotificationFeed
          notifications={notifications}
          empty={notifications.length === 0}
          renderCustomNotificationContent={renderNotificationContent}
          renderCustomPlaceholderContent={renderEmptyPlaceholderImage}
        />
        {!hideFooter && <NotificationFooter label="Powered by Engagespot" />}
      </NotificationPanelStyled>
    </NotificationPanelPopper>
  );
}
