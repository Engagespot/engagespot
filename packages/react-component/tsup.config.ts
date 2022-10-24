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
    dts: {
      banner: `// Type definitions for @engagespot/react-component
// Project: https://github.com/Engagespot/engagespot
      
/// <reference types="react" />
      `,
    },
    sourcemap: options.sourcemap,
    inject: ['./react-shim.js'],
    watch: options.watch || false,
    legacyOutput: true,
  };
});
