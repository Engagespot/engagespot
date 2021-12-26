import React from 'react';
import {
  NotificationHeaderStyled,
  NotificationHeaderCloseButtonStyled,
  NotificationHeaderTextStyled,
} from './NotificationHeader.styled';
import { useEngagespotContext } from '../engagespotProvider';
export interface NotificationHeaderProps {
  label: string;
}

export function NotificationHeader({ label }: NotificationHeaderProps) {
  const { togglePanelVisibility } = useEngagespotContext();

  return (
    <NotificationHeaderStyled>
      <NotificationHeaderTextStyled>{label}</NotificationHeaderTextStyled>
      <NotificationHeaderCloseButtonStyled
        onClick={() => {
          togglePanelVisibility?.();
        }}
      >
        &times;
      </NotificationHeaderCloseButtonStyled>
    </NotificationHeaderStyled>
  );
}
