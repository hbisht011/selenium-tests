var webdriver = require('selenium-webdriver');

var capabilities = {
 'browserName' : 'chrome'
}

var driver = new webdriver.Builder().
  usingServer('http://localhost:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('https://the-internet.herokuapp.com/javascript_alerts');

// Click 'Click for JS Alert'.

// Click 'Click for JS Confirm'. Clicks 'OK'. Assert the Result value 'You clicked: Ok'

// Click 'Click for JS Prompt'. Enter 'BrowserStack' in the prompt. Assert the Result value 'You entered: BrowserStack' Screen reader support enabled.

driver.quit();