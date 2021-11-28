module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['**/node_modules/'],
  coverageReporters: ['json', 'text', 'lcov', 'clover', 'html'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
