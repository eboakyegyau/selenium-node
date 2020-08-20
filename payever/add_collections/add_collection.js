const { By } = require('selenium-webdriver');

const addCollection = async (d) => {

	let driver = d;

  try {
	await driver.findElement(By.xpath("//mat-button-toggle[@ng-reflect-value='collections']")).click();
	await driver.findElement(By.xpath("//button[@id='mat-button-toggle-2-button']/div")).click();
    await driver.findElement(By.xpath("//os-commerce[@id='os-app-main']/os-commerce-root/div[3]/div/app-products-standalone/app-products-list/pf-products-list/pe-data-grid-layout/div[3]/div/pe-grid/mat-grid-list/div/mat-grid-tile/figure/mat-card/div/button/pe-progress-button-content/div")).click();
    await driver.findElement(By.id("mat-input-0")).click();
	await driver.findElement(By.id("mat-input-0")).sendKeys('Title');
	await driver.findElement(By.xpath("//mat-select[@id='mat-select-0']/div/div/span/span")).click();
	await driver.findElement(By.xpath("//mat-option[@id='mat-option-1']/span/div")).click();
	await driver.findElement(By.id("mat-input-2")).click();
	await driver.findElement(By.id("mat-input-2")).sendKeys('1');
	await driver.findElement(By.xpath("//os-commerce[@id='os-app-main']/os-commerce-root/div/platform-header-component/pe-platform-header/pe-navbar/mat-toolbar/div[3]/button[2]/span/span")).click();
	} finally {
    //  await driver.quit();
  }
};

// addCollection();

module.exports = addCollection; 