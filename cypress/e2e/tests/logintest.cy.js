// <reference types="cypress" />

import LoginPage from "../pages/loginpage.cy.js";

describe("Login Test", () => {
  let testdata;

  const loginpage = new LoginPage();

  beforeEach(() => {
    cy.fixture("credential_file").then((testdata_original) => {
      testdata = testdata_original;
    });
    cy.visit("/"); //we ket it black because we have already defined the url in the loginpage.cy.js
    cy.get('[data-toggle="dropdown"]').eq(3).trigger("mouseover");
    cy.contains("Login").click();
  });

  it("Login Test", () => {
    loginpage.loginbuttonexist();
});

  it("login with valid credentials and logout", () => {
    
    loginpage.enteremailAddress(testdata.email);
    loginpage.enterPassword(testdata.password);
    loginpage.clickLogin();
    cy.url().should('include', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
    loginpage.user_logout();
    cy.url().should('include', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');
       
  });

  it('Enter wrong email and password', () => {
    loginpage.enteremailAddress(testdata.invalid_un);
    loginpage.enterPassword(testdata.invalid_psw);
    loginpage.clickLogin();
    cy.url().should('not.include' , '/web/index.php/dashboard/index');
    loginpage.getErrorMessage();
})

  // it.skip("Enter wrong email and password", () => {
  //   loginpage.enterUsername(testdata.invalid_username);
  //   loginpage.enterPassword(testdata.invalid_password);
  //   loginpage.clickLogin();
  //   cy.url().should("not.include", "/web/index.php/dashboard/index");
  //   loginpage.getErrorMessage("Invalid credentials");
  // });

  // it("Enter empty email and password", () => {
  //   loginpage.clickLogin();
  //   cy.contains("Required").should("be.visible");
  //   cy.url().should("not.include", "/web/index.php/dashboard/index");
  // });

  // it("valid credentials", () => {
  //   loginpage.enterUsername(testdata.username);
  //   loginpage.enterPassword(testdata.password);
  //   loginpage.clickLogin();
  //   cy.url().should("include", "/web/index.php/dashboard/index");
  //   loginpage.searchbar();
  // });
});
