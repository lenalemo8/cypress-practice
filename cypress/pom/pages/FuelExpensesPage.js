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

  // get carsDropMenuItem () {
  //   return cy.get('li.dropdown-item');
  // }

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

  visit() {
    cy.visit("panel/expenses");
  }

  // randomAddFromFuelDropDown() {
  //   cy.get('div.car-select-dropdown.show.dropdown')
  //     .find('dropdown-item btn btn-link car-select-dropdown_item -active disabled')
  //     .then(items => {
  //       const randomIndex = Math.floor(Math.random() * items.length);
  //       const randomItem = items[randomIndex];
  //       const carMake = randomItem.innerText;
  //       const carModel = randomItem.innerText;
  //   cy.wrap(randomItem).click();
  //   this.addNewCar(carMake, carModel, '200');  
  //     })
  // }










  addingCarDataForTestFuel() {
    GaragePage.visitAsLoggedUser();
    GaragePage.pageHeader.should('be.visible');
    GaragePage.addNewCar('Audi', 'R8', '200');
    // GaragePage.addNewCar('Ford', 'Focus', '200'); 
    this.navSidebarExpenses.click();
    this.pageHeaderFuel.should('be.visible');
    this.carSelectDropdownButton.should('be.visible').click();
    // this.carsDropMenuItem.should('not.be.available');
    // this.carsDropdownMenu.select('Ford Focus');
    // this.addAnExpenseButton.should('not.be.disabled');
  }



  addExpense() {
    this.addAnExpenseButton.click();
    this.vehicleBrandDropdown.focus().blur();
    // .select();
    this.addReportDatePicker.focus().blur();
    // .click();
    // this.setCurrentDate.select();
    this.mileageField.type('205');
    this.numberLitersField.type('50');
    this.numberTotalField.type('60');
    this.submitExpenseButton.click();
  }

  verifyLastAddedExpense(carName) {
    this.addedCarNames.first().should("have.text", carName);
  }


}

export default new FuelExpensesPage();
