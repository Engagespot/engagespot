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
}

export function NotificationHeader({ children }: NotificationHeaderProps) {
  return <NotificationHeaderStyled>{children}</NotificationHeaderStyled>;
}
