const {Builder, By } = require('selenium-webdriver');

module.exports = fileUpload = async () =>{
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/file-form');
    await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys( __dirname + "//ddd.jpg");
    await driver.findElement(By.id("submit")).click();
  
  } finally {
    await driver.quit();
  }
};

// fileUpload();