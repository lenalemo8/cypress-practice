import { fillValidRegistrationForm } from "../pom/utils/userGenerator";

describe('API testing', () => {

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
  auth: {
    username: 'guest',
    password: 'welcome2qauto',
  }
})
})
    describe('User registration', () => {
  it('should register a user using POST', () => {
    const timestamp = Date.now();
    const email = `test+${timestamp}@test.com`;

    cy.request({
      method: 'POST',
      url: 'https://qauto.forstudy.space/auth/signup',
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      },
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        name: 'John',
        lastName: 'Dou',
        email: email,
        password: 'Qwerty12345',
        repeatPassword: 'Qwerty12345'
      },
      failOnStatusCode: false
    })
      .then((response) => {
      cy.log('Status: ' + response.status);
      cy.log('Body: ' + JSON.stringify(response.body));
      expect(response.status).to.eq(201);
    })
})
})
})