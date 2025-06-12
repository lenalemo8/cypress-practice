import GaragePage from "./GaragePage";
import { incrementFieldValueString } from "../utils/increasedMileage";

class FuelExpensesPage {

  get navSidebarExpenses() {
    return cy.get('a[routerlink="expenses"].sidebar_btn');
  }

  get addExpenseHeader() {
    return cy.get(".modal-header");
  }

  get pageHeaderFuel() {
    return cy.contains("h1", "Fuel expenses");
  }

  get carSelectDropdownButton() {
    return cy.get("#carSelectDropdown");
  }

  get carsDropdownMenu() {
    return cy.get('ul[aria-labelledby="carSelectDropdown"]');
  }

  get addAnExpenseButton() {
    return cy.get("div.panel-page_heading .btn-primary");
  }

  get vehicleBrandDropdown() {
    return cy.get("#addExpenseCar");
  }
  get reportDateField() {
    return cy.get("#addExpenseDate");
  }
  get addReportDatePicker() {
    return cy.get(".btn.date-picker-toggle");
  }

  get setCurrentDate() {
    return cy.get("div[ngbdatepickerdayview].bg-primary");
  }

  get mileageField() {
    return cy.get("#addExpenseMileage");
  }

  get numberLitersField() {
    return cy.get("#addExpenseLiters");
  }

  get numberTotalField() {
    return cy.get("#addExpenseTotalCost");
  }

  get submitExpenseButton() {
    return cy.get("div.modal-content .btn-primary");
  }

  get fuelExpensesCarsDropdownMenu() {
    return cy.get("div .car-select-dropdown");
  }

  get modalHederAddExpense() {
    return cy.get(".modal-header");
  }

  visit() {
    cy.visit("panel/expenses");
  }

  addingCarDataForTestFuel() {
    GaragePage.visitAsLoggedUser();
    GaragePage.garagePageHeader.should("be.visible");
    GaragePage.addMultipleCarsToGarage();
    this.navSidebarExpenses.click();
    this.pageHeaderFuel.should("be.visible");
    this.carSelectDropdownButton.should("be.visible");
    this.randomAddedCarForExpense();
  }

  randomAddedCarForExpense() {
    this.fuelExpensesCarsDropdownMenu
      .find(".dropdown-item")
      .should("be.visible")
      .then((items) => {
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
        const expectedCarName = randomItem.innerText;
        cy.wrap(randomItem).click();
        cy.wrap(expectedCarName).as('selectedCarName');
        // cy.log(expectedCarName);
      })
  }
   
  openAddExpenseModal() {
    this.pageHeaderFuel.should('be.visible');
    this.submitExpenseButton.should("be.disabled").click();
    this.modalHederAddExpense.should("be.visible");
  }

  verifyDefaultExpenseFormState(formattedDate) {
  cy.get('@selectedCarName').then((carName) => {
    this.vehicleBrandDropdown
      .should("contain.text", carName)
      .should("be.visible");
    this.reportDateField
      .should("be.visible")
      .and("have.value", formattedDate);
  });
}

  fillExpenseFormWithValidData() {
  this.mileageField.invoke('val').then((val) => {
    const newValue = incrementFieldValueString(val);
    this.mileageField.clear().type(newValue).should('have.value', newValue);
    this.numberLitersField.clear().type('50').should('have.value', '50');
    this.numberTotalField.clear().type('55').should('have.value', '55');
    this.submitExpenseButton.should('be.visible').click();
   });
}  

export default new FuelExpensesPage();
