const { After } = require('@cucumber/cucumber');
const { getDriver } = require('./world');

After(async function () {
  const driver = getDriver();
  if (driver) await driver.quit();
});
