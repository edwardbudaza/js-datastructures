module.exports = {
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
      '**/*.js',
      '!**/node_modules/**',
      '!**/vendor/**',
    ],
  };
  