module.exports = {
  default: {
    require: ['step_definitions/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: process.env.TAGS || '',
    worldParameters: {
      url: process.env.TEST_URL || 'https://www.google.com',
      browser: process.env.BROWSER || 'chrome'
    }
  }
};
