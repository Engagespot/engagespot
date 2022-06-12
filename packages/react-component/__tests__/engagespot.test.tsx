import React from 'react';
import { setupServer } from 'msw/node';
import {
  render,
  fireEvent,
  waitFor,
  screen,
  act,
} from '@testing-library/react';

import { Engagespot } from '../src/';
import { handlers } from './handlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('handles server error', async () => {
  render(<Engagespot apiKey="shiynklpz18l3ktqyy6d9a" userId="anand" />);

  fireEvent.click(
    screen.getByRole('button', {
      name: 'Notifications',
    })
  );

  await waitFor(() => screen.getByText('Powered by Engagespot'));
  expect(screen.getByText(`Shh! It's quiet around here...`)).toBeVisible();
});
