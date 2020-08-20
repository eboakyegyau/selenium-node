const {Builder, By } = require('selenium-webdriver');

module.exports = dropdownForm = async () =>{
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form');

    const select1 = await driver.findElement(By.xpath("//button[@type='button']"));

    await select1.click();

    await driver.findElement(By.xpath("//nb-option[@value='1']")).click();

    await select1.click();
    
    await driver.findElement(By.xpath("//option[text()='Volvo']")).click();
    await driver.findElement(By.xpath("(//button[@type='button'])[2]")).click();
    await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="0: 'volvo'"]`)).click();
    await driver.findElement(By.xpath("(//select[@id='selectCar'])[2]")).click();
    await driver.findElement(By.xpath("(//select[@formcontrolname='select4'])/option[@value='saab']")).click()
    await driver.findElement(By.id("submit")).click();
  
  } finally {
     await driver.quit();
  }
};

// dropdown();