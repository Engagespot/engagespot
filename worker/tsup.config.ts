import { defineConfig } from 'tsup';

export default defineConfig(options => {
  return {
    entry: ['src/index.ts'],
    format: ['iife'],
    platform: 'browser',
    replaceNodeEnv: true,
    minify: options.minify || true,
    clean: options.clean || true,
    metafile: options.metafile,
    dts: true,
    sourcemap: options.sourcemap,
    legacyOutput: true,
    watch: options.watch || false,
  };
});
