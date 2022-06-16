import { defineConfig } from 'vitest/config';
import { baseConfig } from '../../config/vitest.config.base';
import react from '@vitejs/plugin-react';

export default defineConfig({
  ...baseConfig,
  plugins: [react()],
});
