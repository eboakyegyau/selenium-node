const {Builder, By} = require('selenium-webdriver');

module.exports = checkboxForm = async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  try {

        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form');
		await driver.findElement(By.id("name")).click();
		await driver.findElement(By.id("name")).sendKeys('wizterk');
		await driver.findElement(By.id("comment")).click();
		await driver.findElement(By.id("comment")).sendKeys('jknbjfdbhjabsjfdbafdsa');
		await driver.findElement(By.xpath("//label/span")).click();
		await driver.findElement(By.xpath("//nb-checkbox/label/span[2]")).click();
	    await driver.findElement(By.xpath("//nb-checkbox[2]/label/span[2]")).click();
		await driver.findElement(By.xpath("//nb-checkbox[3]/label/span[2]")).click();
        await driver.findElement(By.id("submit")).click();
        
  } finally {
    await driver.quit();
  }
};

// checkboxForm();