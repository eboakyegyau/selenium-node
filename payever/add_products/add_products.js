const {Builder, By} = require('selenium-webdriver');
const logIn = require('../login/login');

const addProducts = async () => {

  var driver = await new Builder().forBrowser('chrome').build();

  try {
	await logIn(driver); 
	await driver.findElement(By.xpath("//mat-button-toggle[@ng-reflect-value='collections']")).click();
	await driver.findElement(By.xpath("//button[@id='mat-button-toggle-2-button']/div")).click();
  await driver.findElement(By.xpath("//collection-card[@data-collection-id='acec6911-abce-4f06-9da5-f1b9b77bc4ae']")).click();
	await driver.findElement(By.xpath("//input[@pe-qa-input='control.name']")).clear();
	await driver.findElement(By.xpath("//input[@pe-qa-input='control.name']")).sendKeys('ABC');
	await driver.findElement(By.xpath("//button[@data-pe-navbar-link='save']")).click();

  } finally {
    await driver.quit();
  }
};

// addProducts();

module.exports = addProducts; 