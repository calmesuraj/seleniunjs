const { Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { getDriver } = require('./world');
const locators = require('../pageObjects/GoogleLocators');

Then('the page title should contain {string}', async function (expected) {
  const driver = getDriver();
  await driver.wait(until.titleContains(expected), 5000);
});

Then('the current URL should contain {string}', async function (expected) {
  const driver = getDriver();
  await driver.wait(async () => {
    const url = await driver.getCurrentUrl();
    return url.includes(expected);
  }, 5000);
});

Then('element {string} should be visible', async function (ref) {
  const driver = getDriver();
  const xpath = locators[ref];
  await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  const el = await driver.findElement(By.xpath(xpath));
  await driver.wait(until.elementIsVisible(el), 5000);
});

Then('element {string} should contain text {string}', async function (ref, expectedText) {
  const driver = getDriver();
  const xpath = locators[ref];
  await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  const el = await driver.findElement(By.xpath(xpath));
  const actualText = await el.getText();
  if (!actualText.includes(expectedText)) {
    throw new Error(`Expected element to contain "${expectedText}", but found "${actualText}"`);
  }
});

Then('element {string} should not be present', async function (ref) {
  const driver = getDriver();
  const xpath = locators[ref];
  const elements = await driver.findElements(By.xpath(xpath));
  if (elements.length > 0) {
    throw new Error(`Expected element "${ref}" to not be present, but it exists`);
  }
});
