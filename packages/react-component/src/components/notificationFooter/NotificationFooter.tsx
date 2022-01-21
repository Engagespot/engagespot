import React, { Fragment } from 'react';
import {
  NotificationFooterStyled,
  NotificationFooterLinkStyled,
  NotificationFooterTextStyled,
  NotificationFooterGearButtonStyled,
} from './NotificationFooter.styled';
import { EngagespotLogo as EngagespotIcon } from '../icons/EngagespotLogo';
import { Gear } from '../icons/Gear';
import { useEngagespotContext } from '../engagespotProvider';

export type FooterContent = (() => React.ReactNode) | undefined;

export interface NotificationFooterProps {
  footerContent: FooterContent;
}

export const defaultFooterContent = () => {
  return (
    <Fragment>
      <NotificationFooterLinkStyled
        href="https://engagespot.co"
        target="__blank"
        aria-label="Engagespot Logo"
      >
        <EngagespotIcon />
      </NotificationFooterLinkStyled>
      <NotificationFooterTextStyled>
        Powered by Engagespot
      </NotificationFooterTextStyled>
    </Fragment>
  );
};

export function NotificationFooter({ footerContent }: NotificationFooterProps) {
  const { togglePreference } = useEngagespotContext();

  const onPreferenceClick = () => {
    console.log('Inside??', togglePreference);
    togglePreference?.(preference => !preference);
  };

  return (
    <NotificationFooterStyled>
      {defaultFooterContent()}
      <NotificationFooterGearButtonStyled onClick={onPreferenceClick}>
        <Gear />
      </NotificationFooterGearButtonStyled>
    </NotificationFooterStyled>
  );
}
