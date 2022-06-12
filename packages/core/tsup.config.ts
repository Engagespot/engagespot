import { defineConfig } from 'tsup';

export default defineConfig(options => {
  return {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    platform: 'browser',
    replaceNodeEnv: true,
    minify: options.minify || true,
    clean: true,
    metafile: options.metafile,
    dts: true,
    sourcemap: options.sourcemap,
  };
});
