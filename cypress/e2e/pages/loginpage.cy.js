//login class
class LoginPage {
  constructor() {
    this.url = "/"; //base url is saved in cpress.config.js


    this.loginButton = '[value="Login"]'; 

      this.emailAddress = '#input-email';

  
    this.password = '#input-password';

    this.logout = ".list-group-item";
    this.editAccount = ".list-group-item";

    //this.password =
  }
  openUrl() {
    cy.visit(this.url);
  }
  loginbuttonexist() {
  cy.get(this.loginButton).contains('Login').should('be.visible');
  return cy.get(this.loginButton);
  }

  enteremailAddress(email) {
    cy.get(this.emailAddress).type(email);
  }



enterPassword(password) {
  cy.get(this.password).type(password);
}

clickLogin() {
  cy.get(this.loginButton).click();

}

user_logout() {
  cy.get(this.logout).eq(13).click();
}

getErrorMessage(){
  cy.contains(' Warning')
};


};


module.exports = LoginPage;
