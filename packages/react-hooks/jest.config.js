module.exports = {
  verbose: true,
  collectCoverage: true,
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
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
