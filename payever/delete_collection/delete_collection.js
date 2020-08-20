const { Builder, By } = require('selenium-webdriver');
const logIn = require('../login/login');

const deleteCollection = async (d) => {

  var driver = await new Builder().forBrowser('chrome').build();

  try {
	  await logIn(driver); 
    await driver.findElement(By.xpath("//mat-button-toggle[@ng-reflect-value='collections']")).click();
    await driver.findElement(By.xpath("//button[@id='mat-button-toggle-2-button']/div")).click();
    await driver.findElement(By.xpath("//mat-checkbox[@id='mat-checkbox-8']/label/div")).click();
		await driver.findElement(By.xpath("//div[2]/button[3]/span/span")).click();
		await driver.findElement(By.xpath("//button[2]/span")).click();  }
   finally {
    await driver.quit();
  }
};

deleteCollection();

module.exports = deleteCollection; 