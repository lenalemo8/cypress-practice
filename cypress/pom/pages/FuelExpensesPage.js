import GaragePage from './GaragePage';
import { incrementFieldValueString } from '../utils/increasedMileage';
import { getFormattedTodayDate } from '../utils/newDate';

class FuelExpensesPage {

  get navSidebarExpenses() {
    return cy.get('a[routerlink="expenses"].sidebar_btn');
  }
  get addExpenseModalHeader() {
    return cy.get('.modal-header');
  }
  get pageHeaderFuel() {
    return cy.contains('h1', 'Fuel expenses');
  }
  get carSelectDropdownButton() {
    return cy.get('#carSelectDropdown');
  }
  get addAnExpenseButton() {
    return cy.get('div.panel-page_heading .btn-primary');
  }
  get vehicleBrandDropdown() {
    return cy.get('#addExpenseCar');
  }
  get reportDateField() {
    return cy.get('#addExpenseDate');
  }
  get addReportDatePicker() {
    return cy.get('.btn.date-picker-toggle');
  }
  get setCurrentDate() {
    return cy.get('div[ngbdatepickerdayview].bg-primary');
  }
  get mileageField() {
    return cy.get('#addExpenseMileage');
  }
  get numberLitersField() {
    return cy.get('#addExpenseLiters');
  }
  get numberTotalField() {
    return cy.get('#addExpenseTotalCost');
  }
  get emptyMileageFieldMessage() {
    return cy.contains('Mileage required')
  }
  get emptyLitersFieldMessage() {
    return cy.contains('Liters required')
  }
  get emptyTotalCostFieldMessage() {
    return cy.contains('Total cost required')
  }
  get submitExpenseButton() {
    return cy.get('div.modal-content .btn-primary');
  }
  get fuelExpensesCarsDropdownMenu() {
    return cy.get('div .car-select-dropdown');
  }
  get modalHederAddExpense() {
    return cy.get('.modal-header');
  }


  visit() {
    cy.visit('panel/expenses');
  }

  addingCarDataForTestFuel() {
    GaragePage.visitAsLoggedUser();
    GaragePage.pageHeader.should('be.visible');
    GaragePage.addMultipleCarsToGarage();
    this.navSidebarExpenses.click();
    this.pageHeaderFuel.should('be.visible');
    this.carSelectDropdownButton.should('be.visible');
    this.randomAddedCarForExpense();
  }

  randomAddedCarForExpense() {
    this.fuelExpensesCarsDropdownMenu.click()
      .find('.dropdown-item')
      .should('be.visible')
      .then((items) => {
        const enabledItems = Cypress._.filter(items,(item) => !item.classList.contains('disabled'));
        expect(enabledItems.length, 'Active car options').to.be.greaterThan(0);
        const randomIndex = Math.floor(Math.random() * enabledItems.length);
        const randomItem = enabledItems[randomIndex];
        cy.wrap(randomItem)
          .invoke('text')
          .then((text) => {
            cy.wrap(text.trim()).as('selectedCarName');
            cy.wrap(randomItem).click();
          });
      });
  }

  isOpenedExpenseModal() {
    this.pageHeaderFuel.should('be.visible');
    this.addAnExpenseButton.should('be.visible').click();
    this.modalHederAddExpense.should('be.visible');
  }

  verifyDefaultExpenseFormState() {
    const formattedDate = getFormattedTodayDate();
    cy.get('@selectedCarName').then((carName) => {
      this.vehicleBrandDropdown.should('contain.text', carName).should('be.visible');
      this.reportDateField.should('be.visible').and('have.value', formattedDate);
    });
  }


  toIncreaseMileageDataField() {
    this.mileageField.invoke('val').then((val) => {
      const newValue = incrementFieldValueString(val);
      this.mileageField.clear().type(newValue).should('have.value', newValue);
    });
  }

  enterLitersField(number) {
    this.numberLitersField.type(number);
  }
  enterTotalCostField(number) {
    this.numberTotalField.type(number);
  }
  enterMileageField() {
    this.mileageField.type('');
  }
  
  triggerErrorMessForField(fieldName) {
    const element = fieldName === 'Number of liters' ? this.numberLitersField : this.numberTotalField;
    element.focus();
    element.blur();
  }

  verifySubmitButtonIsDisabled() {
    this.submitExpenseButton.should('be.disabled');
  }

  verifyIncorrectMileageMessagesIsVisible() {
    this.emptyMileageFieldMessage.should('be.visible');
  }
  verifyIncorrectLitersMessagesIsVisible() {
    this.emptyLitersFieldMessage.should('be.visible');
  }

  verifyIncorrectTotalMessagesIsVisible() {
    this.emptyTotalCostFieldMessage.should('be.visible');
  }

  fillExpenseFormWithAllValidData() {
    this.mileageField.invoke('val').then((val) => {
      const newValue = incrementFieldValueString(val);
      this.mileageField.clear().type(newValue).should('have.value', newValue);
      this.numberLitersField.clear().type('50').should('have.value', '50');
      this.numberTotalField.clear().type('55').should('have.value', '55');
      this.submitExpenseButton.should('be.visible').click();
    });
  }
}
export default new FuelExpensesPage();
