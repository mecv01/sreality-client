module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'config/**/*.js',
    'src/**/*.js',
    'index.js',
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
};
