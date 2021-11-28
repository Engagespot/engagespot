import { defineConfig } from 'tsup';
import svgrPlugin from 'esbuild-plugin-svgr';


export default defineConfig({
  // esbuildPlugins: [svgrPlugin({typescript: true, expandProps: true})],
  entryPoints: ['src/index.ts'],
  dts: true,
  minify: true,
  outDir: 'lib',
  format: ['esm', 'cjs', 'iife'],
  external: ['react'],
  legacyOutput: true,
  clean: true
});
