const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
    video: true,
    projectId: '7tyfmt',
  },
  env: {
    AUTH_USERNAME: 'guest',
    AUTH_PASSWORD: 'welcome2qauto',
    TEST_USER_EMAIL: 'Yellowscarf8@gmail.com',
    TEST_USER_PASSWORD: 'Qwerty123',
  },
});
