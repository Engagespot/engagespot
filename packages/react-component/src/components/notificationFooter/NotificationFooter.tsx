import { Fragment } from 'react';
import type { ReactNode } from 'react';
import {
  NotificationFooterStyled,
  NotificationFooterLinkStyled,
  NotificationFooterTextStyled,
  NotificationFooterGearButtonStyled,
} from './NotificationFooter.styled';
import { EngagespotLogo as EngagespotIcon } from '../icons/EngagespotLogo';
import { Gear } from '../icons/Gear';
import { useEngagespotContext } from '../engagespotProvider';

export type FooterContent = (() => ReactNode) | undefined;

export interface NotificationFooterProps {
  footerContent: FooterContent;
  showPreferences: boolean;
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

export function NotificationFooter({
  footerContent,
  showPreferences,
}: NotificationFooterProps) {
  const { togglePreference } = useEngagespotContext();

  const onPreferenceClick = () => {
    togglePreference?.(preference => !preference);
  };

  return (
    <NotificationFooterStyled>
      {footerContent?.()}
      {showPreferences ? (
        <NotificationFooterGearButtonStyled onClick={onPreferenceClick}>
          <Gear />
        </NotificationFooterGearButtonStyled>
      ) : null}
    </NotificationFooterStyled>
  );
}
