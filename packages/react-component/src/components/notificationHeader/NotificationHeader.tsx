import type { ReactNode } from 'react';

import { NotificationHeaderStyled } from './NotificationHeader.styled';

export interface NotificationHeaderProps {
  children: ReactNode;
}

export function NotificationHeader({ children }: NotificationHeaderProps) {
  return <NotificationHeaderStyled>{children}</NotificationHeaderStyled>;
}
