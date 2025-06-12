import FuelExpensesPage from '../pom/pages/FuelExpensesPage';

describe('Adding Fuel Expenses', () => {
  beforeEach(() => {
    FuelExpensesPage.addingCarDataForTestFuel();
    FuelExpensesPage.isOpenedExpenseModal();
  });

  it('Add an expense for one of the available cars', () => {
    FuelExpensesPage.verifyDefaultExpenseFormState();
    FuelExpensesPage.fillExpenseFormWithAllValidData();
  });

  it('Submit without Number of liters', () => {
    FuelExpensesPage.verifyDefaultExpenseFormState();
    FuelExpensesPage.triggerErrorMessForField('Number of liters');
    FuelExpensesPage.enterTotalCostField('50');
    FuelExpensesPage.verifyIncorrectLitersMessagesIsVisible('Number of liters');
    FuelExpensesPage.submitExpenseButton.should('be.disabled');
  })

  it('Submit without Total cost', () => {
    FuelExpensesPage.verifyDefaultExpenseFormState();
    FuelExpensesPage.enterLitersField('50');
    FuelExpensesPage.triggerErrorMessForField('Total cost');
    FuelExpensesPage.verifyIncorrectTotalMessagesIsVisible('Total cost')
    FuelExpensesPage.submitExpenseButton.should('be.disabled');
  })
});
