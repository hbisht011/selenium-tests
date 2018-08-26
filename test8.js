var webdriver = require('selenium-webdriver');

var capabilities = {
 'browserName' : 'firefox'
}

var driver = new webdriver.Builder().
  usingServer('http://localhost:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('https://the-internet.herokuapp.com/context_menu');

// Right-click in the square box

// Select the context menu option 'the-internet' with keyboard keys

// Verify if JavaScript alert appears

// Grab the text from the JavaScript alert

// Assert that the text from the alert is 'You selected a context menu'"

driver.quit();