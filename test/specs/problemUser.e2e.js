import LoginPage from '../pageobjects/login.page.js';
import Page from '../pageobjects/page.js';
import MenuPage from '../pageobjects/menu.js';

describe('Login process of problem user.', () => {
  beforeAll('Open browser', () => {
    browser.setWindowSize(1920, 1080);
    browser.url('https://www.saucedemo.com');
  });

  it('Verify login process of problem user.', async () => {
    await expect(LoginPage.loginLogo).toBeDisplayed();
    await expect(LoginPage.userNameInput).toBeDisplayed();
    await expect(LoginPage.passwordInput).toBeDisplayed();
    await LoginPage.login('problem_user', 'secret_sauce');
    await LoginPage.bttnLoginClick();
  });

  it('Verify if this user can enter to the home page.', async () => {
    await expect(Page.wrongImage).toBeDisplayed();
    expect(await Page.rightImage.isExisting()).toBe(true);
  });

  it('Checking Sidebar log-out.', async () => {
    await MenuPage.menuBttn.click();
    await browser.pause(2000);
    await MenuPage.logOutBttn.click();
    await browser.pause(2000);
    await browser.refresh();
  });
});
