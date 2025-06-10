import GaragePage from "../pom/pages/GaragePage";

describe('Adding new cars', () => {

    beforeEach(() => {
        GaragePage.visitAsLogedUser();
        GaragePage.pageHeader.should('be.visible');
    })

    it('Add [Audi] [A6] car ', () => {
        GaragePage.addNewCar('Audi','R8','200');
        GaragePage.verifyLastAddedCar('Audi R8');
    });

    it('Add [BMW] [X5] car ', () => {
        GaragePage.addNewCar('BMW', 'X5', '200')
        GaragePage.verifyLastAddedCar('BMW X5')
    });

    it('Add [Ford] [Fiesta] car ', () => {
        GaragePage.addNewCar('Ford', 'Focus', '200');
        GaragePage.verifyLastAddedCar('Ford Focus');
    });

    it('Add [Porsche] [Panamera] car ', () => {
        GaragePage.addNewCar('Porsche','Cayenne','200');
        GaragePage.verifyLastAddedCar('Porsche Cayenne');
    });

    it('Add [Fiat] [Panda] car ', () => {
        GaragePage.addNewCar('Fiat','Ducato','200');
        GaragePage.verifyLastAddedCar('Fiat Ducato');
    });

})

