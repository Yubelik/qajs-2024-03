module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.js'],
  collectCoverageFrom: ['tests/*.js'],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  // testMatch: ['**/specs/*.spec.*'],
  testMatch: ['**/tests/*.test.*'],
  globals: {
    testTimeout: 50000,
  },
  verbose: true,
}
