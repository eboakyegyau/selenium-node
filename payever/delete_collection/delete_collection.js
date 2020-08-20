const { By } = require('selenium-webdriver');

const deleteCollection = async (d) => {

  let driver = d;

  try {
    await driver.findElement(By.xpath("//mat-button-toggle[@ng-reflect-value='collections']")).click();
    await driver.findElement(By.xpath("//button[@id='mat-button-toggle-2-button']/div")).click();
    await driver.findElement(By.xpath("//input[@id='mat-checkbox-21-input']")).click();
		await driver.findElement(By.xpath("//div[@id='micro-content']/app-products-standalone/app-products-list/pf-products-list/pe-data-grid-layout/div[2]/pe-data-grid-select-bar/mat-toolbar/div[2]/button[3]/span/span")).click();
		await driver.findElement(By.xpath("//div[@id='micro-content']/app-products-standalone/ng-component/pe-info-box-confirm/pe-info-box/div/mat-card/mat-card-content/div/div/div/div/button[2]/span")).click();
  }
   finally {
    // await driver.quit();
  }
};

// deleteCollection();

module.exports = deleteCollection; 