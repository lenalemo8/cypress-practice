
import FuelExpensesPage from "../pom/pages/FuelExpensesPage";

describe("Adding Fuel Expenses", () => {
  beforeEach(() => {
  FuelExpensesPage.addingCarDataForTestFuel();
  });


  it.only('Add an expense for car', () => {
    FuelExpensesPage.addExpense();
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


