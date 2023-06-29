import LoginPage from '../pageobjects/login.page.js';
import MenuPage from '../pageobjects/menu.js';

describe('Accessing the webpage.', () => {
  beforeAll('Open browser', () => {
    browser.setWindowSize(1920, 1080);
    browser.url('https://www.saucedemo.com');
  });

  it('Successfully login process.', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
    await LoginPage.bttnLoginClick();
  });

  it('Checking Sidebar page and the log-out.', async () => {
    await browser.pause(3000);
    await MenuPage.menuBttn.click();
    await browser.pause(2000);
    await expect(MenuPage.sidebar).toBeDisplayed();
    await expect(MenuPage.menuCrossBttn).toBeDisplayed();
    await expect(MenuPage.allItemsBttn).toBeDisplayed();
    await expect(MenuPage.aboutBttn).toBeDisplayed();
    await expect(MenuPage.resetBttn).toBeDisplayed();
    await MenuPage.logOutBttn.click();
  });
});
