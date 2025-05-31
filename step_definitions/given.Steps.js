// features/step_definitions/givenSteps.js
const { Given } = require('@cucumber/cucumber');
const createDriver = require('../driver/createDriver');
const { setDriver } = require('./world');
const { By, until } = require('selenium-webdriver');
const locators = require('../pageObjects/GoogleLocators');

Given('I open the application', async function () {
  const url = this.parameters.url;
  const browser = this.parameters.browser;

  const driver = await createDriver(browser);
  setDriver(driver);

  await driver.manage().window().maximize(); // ✅ Maximize window
  await driver.get(url);
});

// Given('I open the application', async function () {
//   const url = this.parameters.url || 'https://example.com';
//   const browser = this.parameters.browser || 'chrome';
//   const driver = await createDriver(browser);
//   setDriver(driver);
//   await driver.get(url);
// });

Given('I navigate to {string}', async function (url) {
  const driver = await createDriver(this.parameters.browser || 'chrome');
  setDriver(driver);
  await driver.get(url);
});

Given('I wait for {string} to be visible', async function (ref) {
  const driver = getDriver();
  const xpath = locators[ref];
  await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  const el = await driver.findElement(By.xpath(xpath));
  await driver.wait(until.elementIsVisible(el), 5000);
});

Given('I wait for {string} to be present', async function (ref) {
  const driver = getDriver();
  const xpath = locators[ref];
  await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
});