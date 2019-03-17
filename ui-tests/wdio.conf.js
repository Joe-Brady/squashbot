exports.config = {
  runner: "local",
  specs: ["./ui-tests/features/**/*.js"],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "firefox"
    }
  ],
  logLevel: "warn",
  deprecationWarnings: true,
  bail: 0,
  baseUrl: `https://better.legendonlineservices.co.uk`,
  path: "/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: "jasmine",
  reporters: ["spec"],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  }
};
