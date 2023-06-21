import loginPage from '../pageobjects/login.page.js';
import menuPage from '../pageobjects/menu.js';

describe('Accessing the webpage.', () => {
  beforeAll('Open browser', () => {
    browser.setWindowSize(1920, 1080);
    browser.url('https://www.saucedemo.com');
  });

  it('Successfully login process.', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.bttnLoginClick();
  });

  it('Checking Sidebar page and the log-out.', async () => {
    await browser.pause(3000);
    await menuPage.menuBttn.click();
    await browser.pause(2000);
    await expect(menuPage.sidebar).toBeDisplayed();
    await expect(menuPage.menuCrossBttn).toBeDisplayed();
    await expect(menuPage.allItemsBttn).toBeDisplayed();
    await expect(menuPage.aboutBttn).toBeDisplayed();
    await expect(menuPage.resetBttn).toBeDisplayed();
    await menuPage.logOutBttn.click();
  });
});
