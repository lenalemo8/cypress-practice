import GaragePage from "./GaragePage";

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

  get carsDropMenuItem () {
    return cy.get('li.dropdown-item');
  }

  get addAnExpenseButton() {
    return cy.get("div.panel-page_heading .btn-primary");
  }

  get vehicleBrandDropdown() {
    return cy.get("#addExpenseCar");
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
    return cy.get("#addExpenseTotal");
  }

  get submitExpenseButton() {
    return cy.get("div.modal-content .btn-primary");
  }

  visit() {
    cy.visit("panel/expenses");
  }

  addingCarDataForTestFuel () {
    GaragePage.visitAsLoggedUser();
    GaragePage.pageHeader.should('be.visible');
    GaragePage.addNewCar('Audi','R8','200');
    // GaragePage.addNewCar('Ford', 'Focus', '200'); 
    this.navSidebarExpenses.click();
    this.pageHeaderFuel.should('be.visible');
    this.carSelectDropdownButton.should('be.visible').click();
    this.carsDropMenuItem.should('be.disabled');
    
    this.carsDropdownMenu.select('Ford Focus');
    this.addAnExpenseButton.should('not.be.disabled');
  }
  
  addExpense() {
    this.addAnExpenseButton.click();
    this.vehicleBrandDropdown.select();
    this.addReportDatePicker.click();
    this.setCurrentDate.select();
    this.mileageField.type();
    this.numberLitersField.type();
    this.numberTotalField.type();
    this.submitExpenseButton.click();
  }

  verifyLastAddedExpense(carName) {
    this.addedCarNames.first().should("have.text", carName);
  }


}

export default new FuelExpensesPage();
