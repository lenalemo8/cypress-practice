import { fillValidRegistrationForm } from "../pom/utils/userGenerator";

describe('API testing', () => {
  it('should successfully register a new user', () => {
    const userData = fillValidRegistrationForm();

    cy.request({
      method: 'POST',
      url: '/auth/signup',
      body: {
        name: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        repeatPassword: userData.password
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201);
      cy.log(JSON.stringify(response.body.data));
    });
  });
});