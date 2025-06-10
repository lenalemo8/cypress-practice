class FuelExpensesPage {

    get navSidebarExpenses () {
        return cy.get('a[routerlink="expenses"].sidebar_btn');
    }

    get addExpenseHeader() {
        return cy.get('.modal-header');

    }

    get pageHeader() {

        return cy.contains('h1', 'Fuel expenses');
    }

    get addExpenseButton() {
        return cy.get('div.panel-page_heading .btn-primary');
    }

    get vehicleBrandDropdown() {
        return cy.get('#addExpenseCar');
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
        return cy.get('#addExpenseTotal');
    }

    get submitExpenseButton() {
        return cy.get('div.modal-content .btn-primary');
    }

    visit() {
        cy.visit('panel/expenses');
    }

    addExpense(brand, currentDate, mileage, numberLiters, numberTotal) {
        this.addExpenseButton.click();
        this.vehicleBrandDropdown.select(brand);
        this.addReportDatePicker.click();
        this.setCurrentDate.select(currentDate);
        this.mileageField.type(mileage);
        this.numberLitersField.type(numberLiters);
        this.numberTotalField.type(numberTotal);
        this.submitExpenseButton.click();
    }

    verifyLastAddedExpense (carName) {
        this.addedCarNames.first().should('have.text', carName)
}
}

export default new FuelExpensesPage();