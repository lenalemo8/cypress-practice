/// <reference types="cypress" />
describe('API testing', () => {

    it('Registration the new user successfully', () => {
        const user = {
            name: "Helen",
            lastName: "Elkin",
            email: `Lena${Date.now()}@test.com`,
            password: "Qwerty123",
            repeatPassword: "Qwerty123"
        };

        cy.request('POST', '/api/auth/signup', user)
            .then((response) => {
                cy.log(JSON.stringify(response));
                const body = response.body.data;
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('status', 'ok');
                expect(response.body.data).to.have.property('userId');

                const cookies = response.headers['set-cookie'];
                expect(cookies).to.exist;
                expect(cookies[0]).to.include('sid');

                const sid = cookies[0].split(';')[0];
                expect(sid).to.exist;
                cy.log(`Token: ${sid}`);
            });
    });
})
