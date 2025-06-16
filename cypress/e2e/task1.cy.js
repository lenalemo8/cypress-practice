/// <reference types="cypress" />

describe('API tests qauto.forstudy.space ', () => {

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
      sid = cookies.find(c => c.startsWith('sid=')).split(';')[0];
      cy.log(`Generated email: ${email}`);
      cy.log(`SID token: ${sid}`);

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
      })

    it('Should return profile data for authenticated user', () => {
      cy.request({
        method: 'GET',
        url: '/api/users/profile',
        headers: {
          Cookie: sid,
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

    it('Should change password and allow login with new password', () => {
      const oldPassword = 'Qwerty12345';
      const newPassword = 'Qwerty12345!';

      cy.request({
        method: 'PUT',
        url: '/api/users/password',
        headers: {
          Cookie: `${sid}`
        },
        body: {
          oldPassword,
          password: newPassword,
          repeatPassword: newPassword
        }
      })
      .then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.status).to.eq('ok');
      
      cy.request('POST', '/api/auth/signin', {
        email,
        password: newPassword
      })
      .then((loginRes) => {
      expect(loginRes.status).to.eq(200);
      expect(loginRes.body.status).to.eq('ok');
      });
    })
  })
    it('Should create a new car for authenticated user and delete it', () => {
    const car = {
      carBrandId: 1,
      carModelId: 1,
      mileage: 122
    };

    cy.request({
      method: 'POST',
      url: '/api/cars',
      headers: {
        Cookie: sid
      },
      body: car
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.status).to.eq('ok');
      expect(res.body.data).to.include({
        carBrandId: car.carBrandId,
        carModelId: car.carModelId,
        initialMileage: car.mileage,
        mileage: car.mileage
      });
      expect(res.body.data).to.have.property('brand');
      expect(res.body.data).to.have.property('model');
      expect(res.body.data).to.have.property('logo');
      expect(res.body.data).to.have.property('id');
      const carId = res.body.data.id;
      cy.request({
        method: 'DELETE',
        url: `/api/cars/${carId}`,
        headers: {
          Cookie: sid
        }
      }).then((deleteRes) => {
        expect(deleteRes.status).to.eq(200);
        expect(deleteRes.body.status).to.eq('ok');
        expect(deleteRes.body.data.carId).to.eq(carId);
      });
    });
  })
})

