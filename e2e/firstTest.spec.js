const { reloadApp } = require('detox-expo-helpers');

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp();
    await timeout(30000);
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
    await element(by.id('login_button')).tap();
    await expect(element(by.id('email'))).toBeVisible();
    await element(by.id('email')).replaceText("email_is_here");
    await expect(element(by.label('Login!!!'))).toBeVisible();
  });
});
