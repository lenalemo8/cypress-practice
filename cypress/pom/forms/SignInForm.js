class SignInForm {
    
    get emailField() {
        return cy.get('#signinEmail');
    }

    get passwordField() {
        return cy.get('#signinPassword');
    }

    get logInButton() {
        return cy.get('app-signin-modal .btn-primary');
    }

    get wrongDataMessage() {
        return cy.contains('Wrong email or password');
    }
    get incorrectEmailMessage() {
        return cy.contains('Email is incorrect');
    }
    get emptyEmailMessage() {
        return cy.contains('Email required');
    }
    get emptyPasswordMessage() {
        return cy.contains('Password required');
    }


    enterEmail(email) {
        this.emailField.type(email);
    }
    enterPassword(password) {
        this.passwordField.type(password);
    }
    clickLoginButton() {
        this.logInButton.click();
    }
    
    loginWithCredentials(email,password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLoginButton();
    }

    triggerErrorMessForField(fieldName) {
        const element = fieldName === 'email'? this.emailField : this.passwordField;
        element.focus();
        element.blur();
    }

    verifyLoginButtonIsDisabled() {
        this.logInButton.should('be.disabled');
    }

    verifyErrorMessForFieldIsVisible(fieldName) {
        const element = fieldName === 'email'? this.emailField : this.passwordField;
        element.should('be.visible');
    }

    verifyIncorrectEmailMessagesIsVisible() {
        this.incorrectEmailMessage.should('be.visible');
    }
    
    verifyWrongDataMessageIsVisible () {
        this.wrongDataMessage.should('be.visible');
    }  
}

export default new SignInForm();