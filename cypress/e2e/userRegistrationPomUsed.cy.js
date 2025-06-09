/// <reference types="cypress" />
import { registrationPage } from "../pom/pages/RegistrationPage";
import { fillValidRegistrationForm } from "../pom/utils/userGenerator";

  

describe("User registration", () => {
    beforeEach(() => {
      registrationPage.open();
    });

    it("should be disabled when form is invalid", () => {
      registrationPage.form.registerButton
      .should('be.visible')
      .and('be.disabled');
    })

    it("should be enabled when all fields are valid", () => {
      const { firstName, lastName, email, password } = fillValidRegistrationForm();
      registrationPage.form.fillForm({ firstName, lastName, email, password });
      registrationPage.form.registerButton
      .should('not.be.disabled');
    
    });

    it("should submit form when clicked and valid", () => {
      const { firstName, lastName, email, password } = fillValidRegistrationForm();
      registrationPage.form.fillForm({ firstName, lastName, email, password });
      registrationPage.submit();
      registrationPage.verifySuccessfulRegistration();
    });
  });
