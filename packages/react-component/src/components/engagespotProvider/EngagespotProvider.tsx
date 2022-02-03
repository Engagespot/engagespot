import React, { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme, ThemeOverrides } from '../../theme/theme';
import { useEngagespot } from '@engagespot/react-hooks';
import { onFeedItemClickType } from '../notificationFeedItem/NotificationFeedItem';
import { useEngagespotReturnType } from '../engagespot/Engagespot';

export interface EngagespotProviderProps {
  theme?: ThemeOverrides;
  state: object;
  children: React.ReactNode;
}

type BaseProps = Partial<useEngagespotReturnType['floatingPanel']> &
  Partial<useEngagespotReturnType>;

export interface EngagespotContextProps extends BaseProps {
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
  state,
  children,
}: EngagespotProviderProps) {
  return (
    <EngagespotContext.Provider value={state}>
      <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>
    </EngagespotContext.Provider>
  );
}
