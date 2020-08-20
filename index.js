const {Builder, Key } = require('selenium-webdriver');

const logIn = require('./payever/login/login');
const addCollection = require('./payever/add_collections/add_collection');
const editCollection = require('./payever/edit_collection/edit_collection');
const addProducts = require('./payever/add_products/add_products');
const deleteCollection = require('./payever/delete_collection/delete_collection');


async function main() {

  try {

    // Add Collection 
    await addCollection();

    // // Edit Collection
    await editCollection();

    // // Add Products
    await addProducts();

    // // Delete Coleection
    await deleteCollection();

  } finally {

  }
};

 main();