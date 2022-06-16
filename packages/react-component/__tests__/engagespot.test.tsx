import { waitFor, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderNotificationPanel } from './utils/renderPanel';

it('should show empty message on network error', async () => {
  renderNotificationPanel();

  await waitFor(() => screen.getByText('Powered by Engagespot'));
  expect(screen.getByText(`Shh! It's quiet around here...`)).toBeVisible();
});
