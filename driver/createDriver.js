// driverUtils/createDriver.js
const { Builder, Browser } = require('selenium-webdriver');

async function createDriver(browserName = 'chrome') {
  const browser = browserName.toLowerCase();
  switch (browser) {
    case 'chrome':
      return await new Builder().forBrowser(Browser.CHROME).build();
    case 'firefox':
      return await new Builder().forBrowser(Browser.FIREFOX).build();
    default:
      throw new Error(`Unsupported browser: ${browser}`);
  }
}

module.exports = createDriver;
