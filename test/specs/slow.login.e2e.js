import LoginPage from '../pageobjects/login.page.js';
import Page from '../pageobjects/page.js';
import ProductsPage from '../pageobjects/ProductsPage.js';
import Checkout from '../pageobjects/checkout.js';

describe('Login with slow login process.', () => {
  beforeAll('Open browser', () => {
    browser.setWindowSize(1920, 1080);
    browser.url('https://www.saucedemo.com');
  });

  it('Verify slow login process.', async () => {
    await expect(LoginPage.userNameInput).toBeDisplayed();
    await expect(LoginPage.passwordInput).toBeDisplayed();
    await expect(LoginPage.loginLogo).toBeDisplayed();
    const startTime = Date.now();
  });

  it('Verify slow login process.', async () => {
    await expect(LoginPage.userNameInput).toBeDisplayed();
    await expect(LoginPage.passwordInput).toBeDisplayed();
    await expect(LoginPage.loginLogo).toBeDisplayed();
    const startTime = Date.now();

    await LoginPage.login('performance_glitch_user', 'secret_sauce');
    await LoginPage.bttnLoginClick();

    const endTime = Date.now();
    const executionTime = endTime - startTime;
    console.log(`Login execution time: ${executionTime} ms`);

    await expect(Page.wrongImage).toBeDisplayed();
    await expect(executionTime).toBeLessThan(2000);
  });

  it('Adding products to cart', async () => {
    await ProductsPage.addBackpack.click();
    await browser.pause(1000);
    await ProductsPage.addBikelight.click();
    await browser.pause(1000);

    await ProductsPage.cartBttn.click();
    await browser.pause(2000);

    await Checkout.checkBttn.click();
    await browser.pause(1000);
  });

  it('Filling blanks correctly.', async () => {
    await Checkout.cancelBttn.click();
    await Checkout.checkBttn.click();
    await Checkout.firstNameInput.setValue('Ale');
    await Checkout.lastNameInput.setValue('Pashi');
    await Checkout.zipCodeInput.setValue('1414');
    await Checkout.continueBttn.click();

    await expect(Checkout.errorMsg).not.toExist();
    await browser.pause(1000);
  });

  it('The information related to the complete purchase process should be displayed correctly.', async () => {
    await browser.pause(1000);
    await expect(Checkout.title).toHaveTextContaining('Checkout: Overview');
    await expect(Checkout.paymentInfo).toBeDisplayed();
    await expect(Checkout.elementDescr).toBeDisplayed();
    await expect(Checkout.total).toBeDisplayed();
  });

  it('The information related to the complete purchase process should be displayed correctly.', async () => {
    await browser.pause(1000);
    await expect(Checkout.title).toHaveTextContaining('Checkout: Overview');
    await expect(Checkout.paymentInfo).toBeDisplayed();
    await expect(Checkout.elementDescr).toBeDisplayed();
    await expect(Checkout.total).toBeDisplayed();
  });

  it('Finish button works correctly, leading to a complete-Checkout page.', async () => {
    await Checkout.finishBttn.click();
    await browser.pause(1000);
    await expect(browser).toHaveUrl(
      'https://www.saucedemo.com/checkout-complete.html',
    );
  });
});
