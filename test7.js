var webdriver = require('selenium-webdriver');

var capabilities = {
 'browserName' : 'internet explorer'
}

var driver = new webdriver.Builder().
  usingServer('http://localhost:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('https://the-internet.herokuapp.com/hovers');

// Hover the mouse on first image

// Assert if 'name: user1' exist

driver.quit();