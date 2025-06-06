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
     
    get addedCarNames() {
        return cy.get('p.car-item')
    }
    visit() {
        cy.visit('/panel/garage');
    }

    addNewCar(brand, model, mileage) {
        this.addNewCarButton.click();
        this.brandDropDown.select(brand);
        this.modelDropDown.select(model);
        this.mileageField.type(mileage);

    }

    verifyLastAddedCar (carName) {
        this.addedCarNames.first().should('have.text', carName)
    }

}

export default new GaragePage();