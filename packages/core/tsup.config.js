import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src/index.ts'],
  dts: true,
  minify: true,
  outDir: 'lib',
  format: ['esm', 'cjs', 'iife']
});
