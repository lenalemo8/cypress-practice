/// <reference types="cypress" />
import SignInForm from "../pom/forms/SignInForm";
import HomePage from "../pom/pages/HomePage";


describe('Sign In tasts with POM', () => {
    //Успішна авторизація
    //Авторизація без ємейлу
    //Авторизація без паролю
    //Авторизація з некоректним ємейлом
    //Авторизація з невірними даними

    beforeEach(() => {
        HomePage.visit();
        HomePage.openSignInForm();
        // cy.visit("/");
        // cy.get('.header_signin').click();
    })
    it('Successful Sign In', () => {
        SignInForm.loginWithCredentials('Yellowscarf8@gmail.com','Qwerty123');
        cy.url().should("include", "/garage");
        // cy.get('#signinEmail').type('Yellowscarf8@gmail.com');
        // cy.get('#signinPassword').type('Qwerty123');
        // cy.get('app-signin-modal .btn-primary').click();
        // cy.url().should("include", "/garage");
    })

    it('Sign In without email', () => {
        SignInForm.triggerErrorMessForField('email');
        SignInForm.enterPassword('1234567');
        //*SignInForm.logInButton.should('be.disabled');  //можна лишати cypress або виносити 
        SignInForm.verifyLoginButtonIsDisabled();
        SignInForm.verifyErrorMessForFieldIsVisible('email');
        // cy.get('#signinEmail').focus().blur();
        // cy.get('#signinPassword').type('Qwerty123');
        // cy.get('app-signin-modal .btn-primary').should('be.disabled');
        // cy.contains('Email required').should('be.visible');
    })

    it('Sign In without password', () => {
        SignInForm.triggerErrorMessForField('password');
        SignInForm.enterEmail('Yellowscarf8@gmail.com');
        SignInForm.verifyLoginButtonIsDisabled();
        SignInForm.verifyErrorMessForFieldIsVisible('password');
        // cy.get('#signinEmail').type('Yellowscarf8@gmail.com');
        // cy.get('#signinPassword').focus().blur();
        // cy.get('app-signin-modal .btn-primary').should('be.disabled');
        // cy.contains('Password required').should('be.visible');
    })

    it('Sign In with invalid email', () => {
        SignInForm.enterEmail('Yellowscarf8');
        SignInForm.enterPassword('Qwerty123');
        SignInForm.verifyLoginButtonIsDisabled();
        SignInForm.verifyIncorrectEmailMessagesIsVisible();
        // cy.get('#signinEmail').type('Yellowscarf8');
        // cy.get('#signinPassword').type('Qwerty123');
        // cy.get('app-signin-modal .btn-primary').should('be.disabled');
        // cy.contains('Email is incorrect').should('be.visible');
    })

     it('Sign In with incorrect credentials', () => {
        SignInForm.loginWithCredentials('Yellowscarf78@gmail.com','Qwerty1237');
        SignInForm.verifyWrongDataMessageIsVisible();
    //     cy.get('#signinEmail').type('Yellowscarf78@mail.com');
    //     cy.get('#signinPassword').type('Qwerty1237');
    //     cy.get('app-signin-modal .btn-primary').click();
    //     cy.contains('Wrong email or password').should('be.visible');
    // 
     })
})