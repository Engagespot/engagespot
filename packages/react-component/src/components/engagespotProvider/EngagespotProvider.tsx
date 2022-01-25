import React, { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme, Mode, SystemTheme, ThemeOverrides } from '../../theme/theme';
import { useEngagespot } from '@engagespot/react-hooks';
import { onFeedItemClickType } from '../notificationFeedItem/NotificationFeedItem';

export interface EngagespotProviderProps {
  mode?: Mode;
  theme?: ThemeOverrides;
  systemTheme: SystemTheme;
  state: object;
  children: React.ReactNode;
}

export interface EngagespotContextProps
  extends Partial<ReturnType<typeof useEngagespot>> {
  placeholderImage?: string;
  preference?: boolean;
  togglePreference?: React.Dispatch<React.SetStateAction<boolean>>;
  onFeedItemClick?: onFeedItemClickType;
}

const EngagespotContext = createContext<EngagespotContextProps>({});

export const useEngagespotContext = () => {
  return useContext(EngagespotContext);
};

export function EngagespotProvider({
  theme,
  mode,
  systemTheme,
  state,
  children,
}: EngagespotProviderProps) {
  return (
    <EngagespotContext.Provider value={state}>
      <ThemeProvider theme={getTheme(mode, theme, systemTheme)}>
        {children}
      </ThemeProvider>
    </EngagespotContext.Provider>
  );
}
