import { describe, it, expect } from 'vitest';
import { waitFor, screen } from '@testing-library/react';
import { renderNotificationPanel } from './utils/renderPanel';
import React from 'react';

describe('Render Props', () => {
  describe('renderEmptyPlaceholderImage', () => {
    it('should allow changing the empty placeholder using jsx', async () => {
      renderNotificationPanel({
        renderEmptyPlaceholderImage() {
          return <h1>This is a custom placeholder</h1>;
        },
      });

      await waitFor(() => screen.getByText('Powered by Engagespot'));
      expect(screen.getByText(`This is a custom placeholder`)).toBeVisible();
    });

    it('should allow changing the empty placeholder message using raw html string', async () => {
      renderNotificationPanel({
        renderEmptyPlaceholderImage() {
          return `<h1>This is an html placeholder</h1>`;
        },
      });

      await waitFor(() => screen.getByText('Powered by Engagespot'));
      expect(screen.getByText(`This is an html placeholder`)).toBeVisible();
    });
  });
});
