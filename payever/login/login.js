const { Builder, By} = require('selenium-webdriver');

const logIn = async (d) => {
  let driver =  d; //await new Builder().forBrowser('chrome').build();
  try {
    
    // Apply timeout for 10 seconds
    await driver.manage().setTimeouts( { implicit: 10000 } );   
        
    await driver.get('https://commerceos.staging.devpayever.com/entry/login');

    await driver.findElement(By.id("mat-input-0")).click();
		await driver.findElement(By.id("mat-input-0")).sendKeys('aqa@payever.org');
		await driver.findElement(By.id("mat-input-1")).click();
		await driver.findElement(By.id("mat-input-1")).sendKeys('Aqacool123!');
		await driver.findElement(By.xpath("//os-commerce[@id='os-app-main']/entry-layout-wrapper/entry-layout/div[2]/pe-info-box/div/mat-card/mat-card-content/div/div/login-layout/entry-login/div/form/button/span/pe-progress-button-content/div")).click();
    await driver.findElement(By.xpath("//os-commerce[@id='os-app-main']/switcher-profile-list/div/pe-profile-switcher/div/div/div/div/pe-profile-switcher-card/div/mat-card/mat-card-content/div[2]/div/div/h2")).click();
    await driver.findElement(By.xpath("//os-commerce[@id='os-app-main']/os-commerce-root/div[3]/span/business-dashboard-layout/base-dashboard/div/div/div/widgets-layout/div/apps-widget/widget-card/div/mat-card/div/div[2]/div/div/business-applications/div[3]/div/div")).click();

  }catch (error){
    console.log(error);
  }
};

// logIn();

module.exports = logIn; 