import LoginPage from '../pageobjects/login.page.js';
import ProductsPage from '../pageobjects/ProductsPage.js';
import Checkout from '../pageobjects/checkout.js';

describe('Accessing the web page correct user.', () => {
  beforeAll(async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url('https://www.saucedemo.com');
  });

  it('Successfully login process.', async () => {
    await expect(loginPage.userNameInput).toBeDisplayed();
    await LoginPage.login('standard_user', 'secret_sauce');
    await LoginPage.bttnLoginClick();
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

  it('Verify Checkout page is correctly displayed.', async () => {
    await Checkout.checkBttn.click();
    await browser.pause(1000);
    await expect(browser).toHaveUrl(
      'https://www.saucedemo.com/checkout-step-one.html',
    );
    await expect(Checkout.title).toHaveText('Checkout: Your Information');
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

  it('Cancel Button works correctly, redirecting back to inventory page', async () => {
    await Checkout.cancelBttn.click();
    await browser.pause(2000);

    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
  });

  it('Adding products and proceed to cart - Checkout.', async () => {
    await ProductsPage.cartBttn.click();
    await browser.pause(1000);

    await Checkout.checkBttn.click();
    await browser.pause(1000);
    await Checkout.firstNameInput.setValue('Ale');
    await Checkout.lastNameInput.setValue('Pashi');
    await Checkout.zipCodeInput.setValue('1414');
    await Checkout.continueBttn.click();
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

  it('Verify Checkout page is displayed and has this title.', async () => {
    await expect(browser).toHaveUrl(
      'https://www.saucedemo.com/checkout-complete.html',
    );
    await expect(Checkout.title).toHaveText('Checkout: Complete!');
    await Checkout.goBackBttn.click();
    await browser.pause(1000);
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    await browser.pause(1000);
    await browser.reloadSession();
  });
});
