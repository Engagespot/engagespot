import { defineConfig } from 'vitest/config';

type Config = Parameters<typeof defineConfig>[0];

export const baseConfig: Config = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['../../config/setupTests.ts'],
  },
};
