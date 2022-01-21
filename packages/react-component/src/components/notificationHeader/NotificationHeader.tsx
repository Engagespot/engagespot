import React from 'react';
import {
  NotificationHeaderStyled,
  NotificationHeaderCloseButtonStyled,
  NotificationHeaderTextStyled,
} from './NotificationHeader.styled';
import { useEngagespotContext } from '../engagespotProvider';
import { Route } from '../notificationPanel/NotificationPanel';
export interface NotificationHeaderProps {
  children: React.ReactNode;
  route: Route;
}

export function NotificationHeader({
  children,
  route,
}: NotificationHeaderProps) {
  return (
    <NotificationHeaderStyled route={route}>
      {children}
    </NotificationHeaderStyled>
  );
}
