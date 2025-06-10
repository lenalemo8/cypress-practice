import FuelExpensesPage from "../pom/pages/FuelExpensesPage";
import GaragePage from "../pom/pages/GaragePage";
import HomePage from"../pom/pages/HomePage";
import SignInForm from "../pom/forms/SignInForm";

describe("Adding Fuel Expenses", () => {

  beforeEach(() => {
    HomePage.visit();
    HomePage.openSignInForm();
    SignInForm.loginWithCredentials(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'));
    GaragePage.pageHeader.should('be.visible');

  it("Open Fuel Expenses ", () => {
    FuelExpensesPage.addExpense('Audi A6' ,)
  });
  })

  it('Add for [Audi] [A6]', () => {

  })

  it('Add for [BMW] [X5]', () => {

  })

  it('Add for [Ford] [Fiesta]', () => {

  })

  it('Add for [Porsche] [Panamera]', () => {

  })

  it('Add for [Fiat] [Panda]', () => {

  })

})
