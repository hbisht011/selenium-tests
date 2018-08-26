var webdriver = require('selenium-webdriver');

var capabilities = {
 'browserName' : 'chrome'
}

var driver = new webdriver.Builder().
  usingServer('http://localhost:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://the-internet.herokuapp.com/key_presses');

// Send 'ENTER' key on the page

// Verify if text 'You entered: ENTER' exist

driver.quit();