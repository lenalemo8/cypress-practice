/// <reference types="cypress" />
import SignInForm from '../pom/forms/SignInForm';
import HomePage from '../pom/pages/HomePage';

describe('Intercept', () => {

    it('Intercept query', () => {
    cy.intercept('GET', '/api/users/profile').as('getProfile');
    HomePage.visit();
    HomePage.openSignInForm();
    SignInForm.loginWithCredentials('Yellowscarf8@gmail.com', 'Qwerty123');
    cy.get('a.sidebar_btn.-profile').click();
    cy.get('h1').should('have.text', 'Profile')
    cy.wait('@getProfile').its('response.statusCode').should('eq',200);
  })

    it('Fake Profile Name', () => {
    const fakeResponce = {
    "status": "ok",
    "data": {
        "userId": 226970,
        "photoFilename": "default-user.png",
        "name": "Polar",
        "lastName": "Bear"
    }
} 
cy.intercept('GET', '/api/users/profile', fakeResponce);
    HomePage.visit();
    HomePage.openSignInForm();
    SignInForm.loginWithCredentials('Yellowscarf8@gmail.com', 'Qwerty123');
    cy.get('a.sidebar_btn.-profile').click();
    cy.get('h1').should('have.text', 'Profile');
  })
})
