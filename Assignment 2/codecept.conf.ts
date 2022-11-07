import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900',
    }
  },
  include: {},
  gherkin: {
    features: './features/*.feature',   // feature files location
    steps: ['./step_definitions/login.js','./step_definitions/SQL.js']  // step definitions location
  },
  plugins: {
    screenshotOnFail: { // if true take screenshot of failed scenarios
      enabled: true
    },
    retryFailedStep: { // if true rerun failed tests
      enabled: true
    }
  },
  name: 'Assignment 2'
}