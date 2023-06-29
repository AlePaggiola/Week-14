import LoginPage from '../pageobjects/login.page.js';
import ProductsPage from '../pageobjects/ProductsPage.js';
import Checkout from '../pageobjects/checkout.js';

describe('Accessing the web page correct user but not completing the purchase', () => {
  beforeAll(async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url('https://www.saucedemo.com');
  });

  it('Successfully login process.', async () => {
    await expect(LoginPage.userNameInput).toBeDisplayed();
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

  it('Filling blanks incorrectly.', async () => {
    await Checkout.cancelBttn.click();
    await Checkout.checkBttn.click();
    await Checkout.firstNameInput.setValue('Ale');
    await Checkout.lastNameInput.setValue('Pashi');
    await Checkout.zipCodeInput.setValue('');
    await Checkout.continueBttn.click();

    await expect(Checkout.errorMsg).toHaveTextContaining(
      'Error: Postal Code is required',
    )();
    await browser.pause(1000);
  });
});
