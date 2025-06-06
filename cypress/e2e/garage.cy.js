import GaragePage from "../pom/pages/GaragePage";
import HomePage from"../pom/pages/HomePage";
import SignInForm from "../pom/forms/SignInForm";


describe('Adding new cars', () => {

    beforeEach(() => {
        HomePage.visit();
        HomePage.openSignInForm();
        SignInForm.loginWithCredentials('Yellowscarf8@gmail.com','Qwerty123');
        GaragePage.pageHeader.should('be.visible');

    })

    it('Add [Audi] [A6] car ', () => {
        GaragePage.addNewCar('Audi','A6','150');
        GaragePage.verifyLastAddedCar('Audi A6');
    });

    it('Add [BMW] [X5] car ', () => {
        GaragePage.addNewCar('BMW', 'X5', '150')
        GaragePage.verifyLastAddedCar('BMW X5')
    })

    it('Add [Ford] [Fiesta] car ', () => {
        GaragePage.addNewCar('Ford','Fiesta','150');
        GaragePage.verifyLastAddedCar('Ford Fiesta');
    });

    it('Add [Porsche] [Panamera] car ', () => {
        GaragePage.addNewCar('Porsche','Panamera','150');
        GaragePage.verifyLastAddedCar('Porsche Panamera');
    });

    it('Add [Fiat] [Panda] car ', () => {
        GaragePage.addNewCar('Fiat','Panda','150');
        GaragePage.verifyLastAddedCar('Fiat Panda');
    });

})

