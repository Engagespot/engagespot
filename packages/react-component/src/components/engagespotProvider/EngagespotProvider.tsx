import React, { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme, Mode, ThemeOverrides } from '../../theme/theme';
import { useEngagespot } from '@engagespot/react-hooks';

export interface EngagespotProviderProps {
  mode?: Mode;
  theme?: ThemeOverrides;
  state: object;
  children: React.ReactNode;
}

export interface EngagespotContextProps
  extends Partial<ReturnType<typeof useEngagespot>> {
  placeholderImage?: string;
}

const EngagespotContext = createContext<EngagespotContextProps>({});

export const useEngagespotContext = () => {
  return useContext(EngagespotContext);
};

export function EngagespotProvider({
  theme,
  mode,
  state,
  children,
}: EngagespotProviderProps) {
  return (
    <EngagespotContext.Provider value={state}>
      <ThemeProvider theme={getTheme(mode, theme)}>{children}</ThemeProvider>
    </EngagespotContext.Provider>
  );
}
