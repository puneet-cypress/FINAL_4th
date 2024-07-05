// <reference types="cypress" />


//import LoginPage from "../pages/loginpage.cy.js";
import LoginPage from "../pages/loginpage.cy.js";

describe('Login Test', () => {

    const loginpage = new LoginPage();

beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com');
    });


    it('Login Test', () => {
        loginpage.loginbuttonexist().contains('Login').should('be.visible');
    })

    it('Enter Username', () => {
        loginpage.enterUsername("Admin");
        loginpage.enterPassword("admin123");
        loginpage.clickLogin();
        cy.url().should('include', '/web/index.php/dashboard/index');
    })

    it('Enter wrong email and password', () => {
        loginpage.enterUsername("Admin123");
        loginpage.enterPassword("wrongpassword");
        loginpage.clickLogin();
        cy.url().should('not.include' , '/web/index.php/dashboard/index');
        loginpage.getErrorMessage("Invalid credentials");
       })
});
