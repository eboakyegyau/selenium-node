const {Builder, By } = require('selenium-webdriver');

const registrationForm = async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration');
		await driver.findElement(By.id("email")).click();
		await driver.findElement(By.id("email")).sendKeys('fdefqef@rferf.com');
		await driver.findElement(By.id("password")).click();
		await driver.findElement(By.id("password")).sendKeys('12345678');
		await driver.findElement(By.id("submit")).click();
  } finally {
    await driver.quit();
  }
};

module.exports = registrationForm; 