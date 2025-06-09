class RegistrationForm {
    get nameField () {
        return cy.get("#signupName");
    }
    get lastNameField () {
        return cy.get("#signupLastName");
    }
    get emailField () {
        return cy.get("#signupEmail");
    }
    get passwordField () {
        return cy.get("#signupPassword");
    }
    get reEnterPasswordField () {
        return cy.get("#signupRepeatPassword");
    }
    get registerButton () {
        return cy.get(".modal-content").find("button").contains("Register");
    }  
  
fillForm({ firstName, lastName, email, password }) {
    this.nameField.type(firstName);
    this.lastNameField.type(lastName);
    this.emailField.type(email);
    this.passwordField.type(password);
    this.reEnterPasswordField.type(password);
  }
}

export default RegistrationForm;
