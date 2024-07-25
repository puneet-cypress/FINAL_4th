const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io/",
    //baseUrl: "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

//baseUrl: 'https://opensource-demo.orangehrmlive.com',

//module.exports = { //execute hota hain. har ek test mein call hoga...same with reporting s¥stem. this is to set configruation..
//   e2e: {
//     baseUrl: "https://opensource-demo.orangehrmlive.com",
//     supportFile: "cypress/support/e2e.js"

//   }
// };
