// <reference types="cypress" />


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
        loginpage.enterUsername();
        loginpage.enterPassword();
        loginpage.clickLogin();
    })

    // it('Enter Password', () => {
    //     loginpage.enterPassword();
    // })

    // it('Click Login', () => {
    //     loginpage.clickLogin();
    // })

});
