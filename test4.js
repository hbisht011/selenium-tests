var webdriver = require('selenium-webdriver');

var capabilities = {
 'browserName' : 'firefox'
}

var driver = new webdriver.Builder().
  usingServer('http://localhost:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://stormy-beyond-9729.herokuapp.com/');

// In the input box titled 'Name', type 'BrowserStack'

// In the input box titled 'Email', type 'support@bstack.com'

// Select the 'Checkbox'

// Click the 'Color' dropdown and select 'yellow'

// In the 'Colors' section select 'red' and 'gray'

// Click 'Submit'

// Verifies if the body contains the text --> {""testname""=>""BrowserStack"", ""testemail""=>""support@bstack.com"", ""testcheckbox""=>""true"", ""testcolor""=>""yellow"", ""testmultiple""=>[""red"", ""gray""]}"

driver.quit();