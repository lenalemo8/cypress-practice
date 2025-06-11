import HomePage from "./HomePage";
import SignInForm from "../forms/SignInForm";
import { cars } from "../../support/data/cars";

class GaragePage {

    get pageHeader() {
        return cy.contains('h1', 'Garage');
    }

    get addNewCarButton() {
        return cy.get('div.panel-page_heading .btn-primary');
    }

    get brandDropDown() {
        return cy.get('#addCarBrand');
    }

    get modelDropDown() {
        return cy.get('#addCarModel');
    }
    get mileageField() {
        return cy.get('#addCarMileage');
    }

    get submitAddingFormButton() {
        return cy.get('app-add-car-modal .btn-primary');
    }

    get addNewCarFormHeader() {
        return cy.get('.modal-header');
    }
     
    get addedCarNames () {
        return cy.get('p.car_name');
    }

    // get addFuelExpenseAtGarageButton () {
    //     return cy.get('app-car .car_add-expense');
    // }

    visit() {
        cy.visit('/panel/garage');
    }

    visitAsLoggedUser() {
        HomePage.visit();
        HomePage.openSignInForm();
        SignInForm.loginWithCredentials(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'));
    }

    addNewCar(brand, model, mileage) {
        this.addNewCarButton.click();
        this.brandDropDown.select(brand);
        this.modelDropDown.select(model);
        this.mileageField.type(mileage);
        this.submitAddingFormButton.click();

    }

    verifyLastAddedCar (carName) {
        this.addedCarNames.first().should('have.text', carName)
    }

    addMultipleCarsToGarage () {
        cars.forEach(({ brand, model}) => {
            this.addNewCar(brand, model, '200');
            this.verifyLastAddedCar(`${brand} ${model}`);
        })
    }

}

export default new GaragePage();