export default {
  // injectGlobals: true,
  testEnvironment: 'node',
  collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.js'],
  collectCoverageFrom: ['tests/**/*.js'],
  moduleFileExtensions: ['js', 'json'],
  transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    // '\\.css$': 'some-css-transformer',
  },
  // testMatch: ['**/specs/*.spec.*'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  globals: {
    testTimeout: 50000,
  },
  bail: 1,
  verbose: true,
}
