import React from 'react';
import {
  NotificationFooterStyled,
  NotificationFooterLinkStyled,
  NotificationFooterTextStyled,
} from './NotificationFooter.styled';
// import { ReactComponent as EngagespotIcon } from '../../assets/icons/engagespotIcon.svg';

export interface NotificationFooterProps {
  label: string;
}

export function NotificationFooter({ label }: NotificationFooterProps) {
  return (
    <NotificationFooterStyled>
      <NotificationFooterLinkStyled
        href="https://engagespot.co"
        target="__blank"
        aria-label="Engagespot Logo"
      >
        {/* <EngagespotIcon /> */}
      </NotificationFooterLinkStyled>
      <NotificationFooterTextStyled>{label}</NotificationFooterTextStyled>
    </NotificationFooterStyled>
  );
}