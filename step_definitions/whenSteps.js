const { When } = require('@cucumber/cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { getDriver } = require('./world');
const locators = require('../pageObjects/GoogleLocators');

When('I enter {string} into {string}', async function (text, ref) {
  const driver = getDriver();
  const xpath = locators[ref];
  await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  const input = await driver.findElement(By.xpath(xpath));
  await input.sendKeys(text);
});

When('I press Enter in {string}', async function (ref) {
  const driver = getDriver();
  const xpath = locators[ref];
  await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  const input = await driver.findElement(By.xpath(xpath));
  await input.sendKeys(Key.RETURN);
});

When('I click on {string}', async function (ref) {
  const driver = getDriver();
  const xpath = locators[ref];
  await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  const element = await driver.findElement(By.xpath(xpath));
  await driver.wait(until.elementIsVisible(element), 5000);
  await element.click();
});

When('I clear {string}', async function (ref) {
  const driver = getDriver();
  const xpath = locators[ref];
  await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  const input = await driver.findElement(By.xpath(xpath));
  await input.clear();
});

When('I select {string} from {string}', async function (optionText, ref) {
  const driver = getDriver();
  const xpath = locators[ref];
  await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  const select = await driver.findElement(By.xpath(xpath));
  const options = await select.findElements(By.tagName('option'));
  for (let option of options) {
    const text = await option.getText();
    if (text === optionText) {
      await option.click();
      return;
    }
  }
  throw new Error(`Option "${optionText}" not found in "${ref}"`);
});
