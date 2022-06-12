import { EngagespotProps, Engagespot } from '../../src';
import {
  render,
  fireEvent,
  waitFor,
  screen,
  act,
} from '@testing-library/react';

export const renderNotificationPanel = async (
  props?: Partial<EngagespotProps>
) => {
  render(
    <Engagespot apiKey="shiynklpz18l3ktqyy6d9a" userId="anand" {...props} />
  );
  fireEvent.click(
    screen.getByRole('button', {
      name: 'Notifications',
    })
  );
};
