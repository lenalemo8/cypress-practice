import RegistrationForm from '../forms/RegistrationForm';

class RegistrationPage {
  constructor() {
    this.form = new RegistrationForm();
  }

  open() {
    cy.visit('/');
    cy.get('.hero-descriptor_btn').click();
  }

  submit() {
    this.form.registerButton.click();
  }

  verifySuccessfulRegistration() {
    cy.url().should('include', '/garage');
  }
}

export const registrationPage = new RegistrationPage();
