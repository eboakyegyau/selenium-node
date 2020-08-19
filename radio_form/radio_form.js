const {Builder, By } = require('selenium-webdriver');

module.exports = radioForm = async () =>{
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form');
    await driver.findElement(By.id("title")).click();
    await driver.findElement(By.id("title")).sendKeys('Develop Test Automation in Continuous Integration and Continuous Delivery Environments for Open Source Systems');
    await driver.findElement(By.id("description")).click();
    await driver.findElement(By.id("description")).sendKeys('Yybdhfbcsbdf fsdjfbuidfuidfubsf fdhgiuhuifghiudsgiuhdxg gdiojdiofjsgidfgfd');
    await driver.findElement(By.xpath("//label/span")).click();
    await driver.findElement(By.id("submit")).click();
  } finally {
    await driver.quit();
  }
};

//  radioForm();