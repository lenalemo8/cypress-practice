/// <reference types="cypress" />
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
    })
    it('Successful Sign In', () => {
        cy.get('#signinEmail').type('Yellowscarf8@gmail.com');
        cy.get('#signinPassword').type('Qwerty123');
        cy.get('app-signin-modal .btn-primary').click();
        cy.url().should("include", "/garage");
    })

    it('Sign In without email', () => {
        cy.get('#signinEmail').focus().blur();
        cy.get('#signinPassword').type('Qwerty123');
        cy.get('app-signin-modal .btn-primary').should('be.disabled');
        cy.contains('Email required').should('be.visible');
    })

    it('Sign In without password', () => {
        cy.get('#signinEmail').type('Yellowscarf8@gmail.com');
        cy.get('#signinPassword').focus().blur();
        cy.get('app-signin-modal .btn-primary').should('be.disabled');
        cy.contains('Password required').should('be.visible');
    })

    it('Sign In wiht invalid email', () => {
        cy.get('#signinEmail').type('Yellowscarf8');
        cy.get('#signinPassword').type('Qwerty123');
        cy.get('app-signin-modal .btn-primary').should('be.disabled');
        cy.contains('Email is incorrect').should('be.visible');
    })

     it('Sign In wiht incorrect credentials', () => {
        cy.get('#signinEmail').type('Yellowscarf78@mail.com');
        cy.get('#signinPassword').type('Qwerty1237');
        cy.get('app-signin-modal .btn-primary').click();
        cy.contains('Wrong email or password').should('be.visible');
    })
})