import GaragePage from '../pom/pages/GaragePage';

describe('Adding new cars', () => {

  beforeEach(() => {
    GaragePage.visitAsLoggedUser();
    GaragePage.pageHeader.should('be.visible');
  });

  it('Add [Audi] [R8] car ', () => {
    GaragePage.addNewCar('Audi', 'R8', '200');
    GaragePage.verifyLastAddedCar('Audi R8');
  });

  it('Add [BMW] [X5] car ', () => {
    GaragePage.addNewCar('BMW', 'X5', '200');
    GaragePage.verifyLastAddedCar('BMW X5');
  });

  it('Add [Ford] [Focus] car ', () => {
    GaragePage.addNewCar('Ford', 'Focus', '200');
    GaragePage.verifyLastAddedCar('Ford Focus');
  });

  it('Add [Porsche] [Cayenne] car ', () => {
    GaragePage.addNewCar('Porsche', 'Cayenne', '200');
    GaragePage.verifyLastAddedCar('Porsche Cayenne');
  });

  it('Add [Fiat] [Ducato] car ', () => {
    GaragePage.addNewCar('Fiat', 'Ducato', '200');
    GaragePage.verifyLastAddedCar('Fiat Ducato');
  });

  it.only('should add several cars and verify last added car', () => {
    GaragePage.addMultipleCarsToGarage();
  });
});
