module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverage: false,
  coverageDirectory: './coverage',
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/config/*',
    '<rootDir>/__tests__/mock/*',
  ],
  transform: {
    '.(ts|tsx|js|jsx)': 'ts-jest',
  },
  testRegex: '.*\\.(test|spec)\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
