//login class
class LoginPage {
    constructor() {
        this.url = 'https://opensource-demo.orangehrmlive.com';
        this.LoginB = 'button[type="submit"]';
        this.username = 'input[name="username"]';
        this.password = 'input[name="password"]';
        this.errorMessage = '.oxd-alert-content-text';
        
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
}
getErrorMessage(expectedMessage) {
    cy.get(this.errorMessage).should('have.text',expectedMessage);
    


}






}

module.exports = LoginPage;
//export default LoginPage;