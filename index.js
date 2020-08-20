const {Builder, Key } = require('selenium-webdriver');

const logIn = require('./payever/login/login');
const addCollection = require('./payever/add_collections/add_collection');
const editCollection = require('./payever/edit_collection/edit_collection');
const addProducts = require('./payever/add_products/add_products');
const deleteCollection = require('./payever/delete_collection/delete_collection');


async function main() {
  
  var driver = await new Builder().forBrowser('chrome').build();

  try {
  
  
    // Add Collection 
    await logIn(driver); 
    await driver.manage().setTimeouts( { implicit: 10000 } );
    
    await addCollection(driver);
    let close_button = driver.actions().sendKeys(Key.ESCAPE);
    await close_button.perform();

    // Edit Collection
    await editCollection(driver);
    await close_button.perform();
   

    // Add Products
    await addProducts(driver);
    await close_button.perform();

    // Delete Coleection
    await deleteCollection(driver);
    await close_button.perform();

  } finally {
     await driver.quit();
  }
};

 main();