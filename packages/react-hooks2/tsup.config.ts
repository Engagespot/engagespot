import { defineConfig } from 'tsup';

export default defineConfig(options => {
  return {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    platform: 'browser',
    replaceNodeEnv: true,
    minify: options.minify || true,
    clean: options.clean || true,
    metafile: options.metafile,
    dts: true,
    watch: options.watch || false,
    sourcemap: options.sourcemap,
    legacyOutput: true,
  };
});
