exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./test/e2e/**/*.js'],
   capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 360000,
    includeStackTrace: false
  }
};