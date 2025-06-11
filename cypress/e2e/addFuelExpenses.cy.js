
import FuelExpensesPage from "../pom/pages/FuelExpensesPage";
import { getFormattedTodayDate } from "../pom/utils/newDate";
import { incrementFieldValueString } from "../pom/utils/increasedMileage";

describe("Adding Fuel Expenses", () => {
  beforeEach(() => {
    FuelExpensesPage.addingCarDataForTestFuel();
  });


  it.only('Add an expense for car', () => {
    const formattedDate  = getFormattedTodayDate();
    cy.get('div.panel-page_heading').contains("h1", "Fuel expenses");
    cy.get("div.panel-page_heading .btn-primary").should('be.visible').click();
    cy.get(".modal-header").should('be.visible');
    cy.get("#addExpenseCar").contains('Audi R8').should('be.visible');
    cy.get("#addExpenseDate").should('be.visible')
    .and('have.value', formattedDate);
    cy.get("#addExpenseMileage").invoke('val')
    .then((val) => {
      const newValue = incrementFieldValueString(val);
    cy.get('#addExpenseMileage')
    .clear()
    .type(newValue)
    .should('have.value', newValue);
    cy.get("#addExpenseLiters").type('50');
    cy.get("#addExpenseTotalCost").type('55');
    cy.get("div.modal-content .btn-primary").should('be.visible').click();
    })

    // FuelExpensesPage.carsDropMenuItem()
    // .contains('Audi R8')
    // .should('be.disabled');
    // FuelExpensesPage.addExpense();
  });



  it('Add an expense for car [Audi] [R8]', () => {
    FuelExpensesPage.addingCarDataForTestFuel();
  })

  it('Add for [BMW]  [X5]', () => {

  })

  it('Add for [Ford] [Fiesta]', () => {

  })

  it('Add for [Porsche] [Panamera]', () => {

  })

  it('Add for [Fiat] [Panda]', () => {

  })
})


