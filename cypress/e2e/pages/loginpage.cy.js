//login class
class LoginPage {
    constructor() {
        this.url = 'https://opensource-demo.orangehrmlive.com';
        this.LoginB = 'button[type="submit"]';
        this.username = 'input[name="username"]';
        this.password = 'input[name="password"]';
        
        
        //this.password = 
}

openUrl() {
    cy.visit(this.url);

}

loginbuttonexist() {
    //cy.get(this.LoginB).contains('Login').should('be.visible');
    return cy.get(this.LoginB);
}

enterUsername() {
cy.get(this.username).type("Admin");
}

enterPassword() {
cy.get(this.password).type("admin123");
}

clickLogin() {
    cy.get(this.LoginB).click();

}






}

module.exports = LoginPage;
//export default LoginPage;