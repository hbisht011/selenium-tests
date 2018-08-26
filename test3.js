var webdriver = require('selenium-webdriver');

var capabilities = {
 'browserName' : 'firefox'
}

var driver = new webdriver.Builder().
  usingServer('http://localhost:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://demo.guru99.com/popup.php');

// Click 'Click here'

// Switch to the new window

// In the email id field, enter 'support@bstack.com', click 'Submit'

// Assert if 'This access is valid only for 20 days.' exist

// Switch to first window

// Assert if 'Click here' text exist

driver.quit();