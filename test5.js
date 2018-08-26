var webdriver = require('selenium-webdriver');

var capabilities = {
 'browserName' : 'chrome'
}

var driver = new webdriver.Builder().
  usingServer('http://localhost:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('https://the-internet.herokuapp.com/dynamic_controls');

// Click 'Remove' button

// Verify if text 'It's gone!' exist

// Click the 'Add' button

// Verify if text 'It's back!' exist

driver.quit();