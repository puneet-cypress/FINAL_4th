//login class
class LoginPage {
  constructor() {
    this.url = "/"; //base url is saved in cpress.config.js

    this.LoginB = 'button[type="submit"]';
    this.username = 'input[name="username"]';
    this.password = 'input[name="password"]';
    this.errorMessage = ".oxd-alert-content-text";
    this.logout = ".oxd-userdropdown-tab";

    //this.password =
  }
  openUrl() {
    cy.visit(this.url);
  }
  loginbuttonexist() {
    //cy.get(this.LoginB).contains('Login').should('be.visible');
    return cy.get(this.LoginB);
  }
  enterUsername(un) {
    cy.get(this.username).type(un);
  }
  enterPassword(psw) {
    cy.get(this.password).type(psw);
  }
  clickLogin() {
    cy.get(this.LoginB).click();
    // NO USE HERE WE ARE USING BELOW....cy.get('.oxd-topbar-header-breadcrumb').contains('Dashboard').should('be.visible');
  }
  usr_logged_in() {
    cy.get(".oxd-topbar-header-breadcrumb")
      .contains("Dashboard")
      .should("be.visible");
  }
  getErrorMessage(expectedMessage) {
    cy.get(this.errorMessage).should("have.text", expectedMessage);
  }

  user_logout() {
    cy.get(this.logout).click();
    cy.get('[role="menuitem"]').eq(3).click();
    cy.get(this.LoginB).contains("Login").should("be.visible");

  }
}

module.exports = LoginPage;
