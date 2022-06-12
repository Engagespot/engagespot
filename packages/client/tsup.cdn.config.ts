import { defineConfig } from 'tsup';

export default defineConfig(options => {
  return {
    entry: ['src/index.ts'],
    format: ['esm', 'iife'],
    platform: 'browser',
    noExternal: [/.*/],
    replaceNodeEnv: true,
    minify: options.minify || true,
    clean: true,
    metafile: options.metafile,
    sourcemap: options.sourcemap,
    inject: ['./react-shim.js'],
    globalName: 'Engagespot',
    outDir: './dist/cdn/',
  };
});
