module.exports = {
  testEnvironment: 'node',
  testTimeout: 1000000000,
  maxWorkers: 1,
  reporters: [
    'default',
    ['<rootDir>/node_modules/@mpxjs/e2e/report-server/report.js', {banana: 'yes', pineapple: 'no'}],
  ]
}
