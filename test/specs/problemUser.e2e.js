import loginPage from '../pageobjects/login.page.js';
import page from '../pageobjects/page.js';
import menuPage from '../pageobjects/menu.js';

describe('Login process of problem user.', () => {
  beforeAll('Open browser', () => {
    browser.setWindowSize(1920, 1080);
    browser.url('https://www.saucedemo.com');
  });

  it('Verify login process of problem user.', async () => {
    await expect(loginPage.loginLogo).toBeDisplayed();
    await expect(loginPage.userNameInput).toBeDisplayed();
    await expect(loginPage.passwordInput).toBeDisplayed();
    await loginPage.login('problem_user', 'secret_sauce');
    await loginPage.bttnLoginClick();
  });

  it('Verify if this user can enter to the home page.', async () => {
    await expect(page.wrongImage).toBeDisplayed();
    expect(await page.rightImage.isExisting()).toBe(true);
  });

  it('Checking Sidebar log-out.', async () => {
    await menuPage.menuBttn.click();
    await browser.pause(2000);
    await menuPage.logOutBttn.click();
    await browser.pause(2000);
    await browser.refresh();
  });
});
