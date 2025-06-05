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


    enterEmail(mail) {
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
}

export default new SignInForm();
