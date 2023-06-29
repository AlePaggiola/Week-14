import loginPage from '../pageobjects/login.page.js';

describe('Login with unexpected and unauthorized users.', () => {
  beforeAll('Open browser', () => {
    browser.setWindowSize(1920, 1080);
    browser.url('https://www.saucedemo.com');
  });

  it('Verify login process of locked out user login process.', async () => {
    await expect(loginPage.loginLogo).toBeDisplayed();
    await expect(loginPage.userNameInput).toBeDisplayed();
    await expect(loginPage.passwordInput).toBeDisplayed();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.bttnLoginClick();
  });

  it('Verify error message.', async () => {
    await expect(loginPage.errorMessage).toBeDisplayed();
    await expect(loginPage.errorMessage).toHaveTextContaining(
      'Epic sadface: Sorry, this user has been locked out.',
    );
    await browser.pause(2000);
    await browser.refresh();
  });
});
