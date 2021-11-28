import React from 'react';
import {
  NotificationPanelPopper,
  NotificationPanelStyled,
} from './NotificationPanel.styled';
import { NotificationHeader } from '../notificationHeader';
import { NotificationFeed } from '../notificationFeed';
import { NotificationFooter } from '../notificationFooter';
import { NotificationFeedItemProps } from '../notificationFeedItem';
import { useEngagespotReturnType } from '../engagespot/Engagespot';

export interface NotificationPanelProps {
  notifications: NotificationFeedItemProps[];
  visible: boolean;
  panelType?: 'normal' | 'floating';
  panelProps: useEngagespotReturnType['getPanelProps'];
  panelOffsetProps: useEngagespotReturnType['getPanelOffsetProps'];
}

type PanelProps = {
  ref: React.RefObject<HTMLDivElement>;
  style: React.CSSProperties;
};

export function NotificationPanel({
  notifications = [],
  panelProps,
  panelOffsetProps,
  visible = false,
}: NotificationPanelProps) {
  return (
    <NotificationPanelPopper {...panelProps() as PanelProps}>
      <NotificationPanelStyled {...panelOffsetProps()} visible={visible}>
        <NotificationHeader label="Notifications" />
        <NotificationFeed
          notifications={notifications}
          empty={notifications.length === 0}
        />
        <NotificationFooter label="Powered by Engagespot" />
      </NotificationPanelStyled>
    </NotificationPanelPopper>
  );
}
