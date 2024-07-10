module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
<<<<<<< HEAD
  collectCoverageFrom: ['tests/**/*.js'],
=======
  // collectCoverageFrom: ['src/**/*.js'],
  collectCoverageFrom: ['tests/*.js'],
>>>>>>> 1f0de733601462c6261f9f0dfbefc26662892f6a
  moduleFileExtensions: ['js', 'json'],
  transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  testMatch: ['**/tests/*.js', '**/?(*.)+(spec|test).[jt]s?(x)'],
  globals: {
    testTimeout: 50000,
  },
  bail: 1,
  verbose: true,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '../reports/html-report',
        filename: 'index.html',
        openReport: !process.env.CI,
      },
    ],
  ],
}
