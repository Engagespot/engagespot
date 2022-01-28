const baseConfig = require('../../jest.config.base');
const packageName = require('./package.json').name.split('@engagespot/').pop();

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...baseConfig,
  name: packageName,
  displayName: packageName,
  roots: [`<rootDir>/packages/${packageName}`],
  rootDir: '../../',
};
