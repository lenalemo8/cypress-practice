/// <reference types="cypress" />

describe('API testing', () => {

  const timestamp = Date.now();
  const email = `Lena${timestamp}@test.com`;
  const password = 'Qwerty123';

  const user = {
    name: "Helen",
    lastName: "Elkin",
    email,
    password,
    repeatPassword: password
  };

  it('Signup/Signin. Create new user and login by registered email, password', () => {
    cy.request('POST', '/api/auth/signup', user).then((signupResponse) => {
      expect(signupResponse.status).to.eq(201);
      expect(signupResponse.body).to.have.property('status', 'ok');
      expect(signupResponse.body.data).to.have.property('userId');

      const cookies = signupResponse.headers['set-cookie'];
      expect(cookies).to.exist;
      const sid = cookies[0].split(';')[0];
      expect(sid).to.include('sid');
      cy.log(`Generated email: ${email}`);
      cy.log(`SID token: ${sid}`);
      return cy.request('POST','/api/auth/signin',{email,password});
    })
      .then((loginResponse) => {
      expect(loginResponse.status).to.eq(200);
      expect(loginResponse.body).to.have.property('status', 'ok');
      expect(loginResponse.body.data).to.have.property('userId');
      cy.log(`Login successful with userId: ${loginResponse.body.data.userId}`);
    });
  });

  
})
