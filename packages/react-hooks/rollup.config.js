import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';
import size from 'rollup-plugin-size';
import externalDeps from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';

const external = ['react'];
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const globals = {
  'react/jsx-runtime': 'jsx',
};

const babelConfig = () => ({
  babelHelpers: 'bundled',
  comments: false,
  extensions,
  include: ['src/**/*'],
  exclude: ['node_modules/**', 'src/**/*.test.*'],
});

const config = [
  {
    input: 'src/index.ts',
    output: {
      name: 'EngagespotReact',
      file: 'dist/engagespot-react.development.js',
      format: 'umd',
      sourcemap: true,
      globals,
    },
    external,
    plugins: [
      replace({
        'process.env.NODE_ENV': `"development"`,
        preventAssignment: true,
      }),
      resolve({ extensions }),
      commonjs({
        include: '**/node_modules/**',
      }),
      svgr({ typescript: true, expandProps: false }),
      babel(babelConfig()),
      externalDeps(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      name: 'EngagespotReact',
      file: 'dist/engagespot-react.production.min.js',
      format: 'umd',
      sourcemap: true,
      globals,
    },
    external,
    plugins: [
      replace({
        'process.env.NODE_ENV': `"production"`,
        preventAssignment: true,
      }),
      resolve({ extensions }),
      commonjs({
        include: '**/node_modules/**',
      }),
      svgr({ typescript: true, expandProps: false }),
      babel(babelConfig()),
      terser(),
      size({
        writeFile: false,
      }),
      externalDeps(),
    ],
  },
];

export default config;
