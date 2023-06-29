import LoginPage from '../pageobjects/login.page.js';

describe('Login with unauthorized users.', () => {
  beforeAll('Open browser', () => {
    browser.setWindowSize(1920, 1080);
    browser.url('https://www.saucedemo.com');
  });

  it('Verify login process of locked out user login process.', async () => {
    await expect(LoginPage.loginLogo).toBeDisplayed();
    await expect(LoginPage.userNameInput).toBeDisplayed();
    await expect(LoginPage.passwordInput).toBeDisplayed();
    await LoginPage.login('locked_out_user', 'secret_sauce');
    await LoginPage.bttnLoginClick();
  });

  it('Verify error message.', async () => {
    await expect(LoginPage.errorMessage).toBeDisplayed();
    await expect(LoginPage.errorMessage).toHaveTextContaining(
      'Epic sadface: Sorry, this user has been locked out.',
    );
    await browser.pause(2000);
    await browser.refresh();
  });
});
