describe('API testing', () => {
  let email;
  const password = 'Qwerty12345';
  let user;
  let sid;

  beforeEach(() => {
    const timestamp = Date.now();
    email = `Lena${timestamp}@test.com`;
    user = {
      name: "Helen",
      lastName: "Elkin",
      email,
      password,
      repeatPassword: password
    };

    return cy.request('POST', '/api/auth/signup', user).then((res) => {
      const cookies = res.headers['set-cookie'];
      sid = cookies[0].split(';')[0];
    });
  });
    
it('Signin. Login by registered email, password', () => {
    cy.request('POST','/api/auth/signin',{email,password})
    .then((loginResponse) => {
      expect(loginResponse.status).to.eq(200);
      expect(loginResponse.body).to.have.property('status', 'ok');
      expect(loginResponse.body.data).to.have.property('userId');
      cy.log(`Login successful with userId: ${loginResponse.body.data.userId}`);
    });

  it('should return profile data for authenticated user', () => {
    cy.request({
      method: 'GET',
      url: '/api/users/profile',
      headers: {
        Cookie: sid
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('status', 'ok');
      expect(response.body.data).to.include({
        name: user.name,
        lastName: user.lastName
      });
      expect(response.body.data).to.have.property('userId');
      expect(response.body.data).to.have.property('photoFilename');
    });
  });

   it('should change password and allow login with new password', () => {
    const oldPassword = 'Qwerty12345';
    const newPassword = 'Qwerty12345!';

    cy.request({
      method: 'PUT',
      url: '/api/users/password',
      headers: {
        Cookie: `sid=${sid}`
      },
      body: {
        oldPassword,
        password: newPassword,
        repeatPassword: newPassword
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.status).to.eq('ok');
    });

    // Перевірка, що можна увійти з новим паролем
    cy.request('POST', '/api/auth/signin', {
      email,
      password: newPassword
    }).then((loginRes) => {
      expect(loginRes.status).to.eq(200);
      expect(loginRes.body.status).to.eq('ok');
    });
})
});
})
