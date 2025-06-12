import FuelExpensesPage from "../pom/pages/FuelExpensesPage";
import { getFormattedTodayDate } from "../pom/utils/newDate";
import { incrementFieldValueString } from "../pom/utils/increasedMileage";

describe("Adding Fuel Expenses", () => {
  beforeEach(() => {
    FuelExpensesPage.addingCarDataForTestFuel();
  });

  it("Add an expense for car", () => {
    const formattedDate = getFormattedTodayDate();
    FuelExpensesPage.openAddExpenseModal();
    FuelExpensesPage.verifyDefaultExpenseFormState(formattedDate);
    FuelExpensesPage.fillExpenseFormWithValidData();

    // // cy.get('div.panel-page_heading').contains("h1", "Fuel expenses");
    // // cy.get("div.panel-page_heading .btn-primary").should('be.visible').click();
    // // cy.get(".modal-header").should('be.visible');
    // FuelExpensesPage.openAddExpenseModal;
    // // cy.get("#addExpenseCar").contains(audi).should('be.visible');
    // // cy.get("#addExpenseDate").should('be.visible')
    // // .and('have.value', formattedDate);
    // cy.get("#addExpenseMileage")
    //   .invoke("val")
    //   .then((val) => {
    //     const newValue = incrementFieldValueString(val);
    //     cy.get("#addExpenseMileage")
    //       .clear()
    //       .type(newValue)
    //       .should("have.value", newValue);
    //     cy.get("#addExpenseLiters").type("50");
    //     cy.get("#addExpenseTotalCost").type("55");
    //     cy.get("div.modal-content .btn-primary").should("be.visible").click();
    //   });
  });
});
