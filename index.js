// import registrationForm from './registration_form/registration_form'

const {Builder, By } = require('selenium-webdriver');

const registrationForm = require('./registration_form/registration_form');
const datePicker = require('./date_picker/date_picker');
const fileUpload = require('./file_upload/file_upload');
const radioForm = require('./radio_form/radio_form');
const dropdownForm = require('./dropdown_form/dropdown');
const checkboxForm = require('./checkbox_form/checkbox_form');

async function main() {

  try {
  
    await registrationForm();
    await checkboxForm();
    await datePicker();
    await fileUpload();
    await radioForm();
    await dropdownForm();

  } finally {
    // await driver.quit();
  }
};

 main();

 

