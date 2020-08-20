const {Builder, By} = require('selenium-webdriver');

module.exports = datePicker = async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form');
    await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys('Aug 12, 2020');
    await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys('Aug 4, 2020 - Aug 19, 2020');
    await driver.findElement(By.id("submit")).click();
  } finally {
    await driver.quit();
  }
};

// datePicker();