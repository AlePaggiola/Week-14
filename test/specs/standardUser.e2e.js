import loginPage from '../pageobjects/login.page.js';
import productsPage from '../pageobjects/productsPage.js';
import checkout from '../pageobjects/checkout.js';

describe('Accessing the web page correct user but not completing the purchase', () => {
  beforeAll(async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url('https://www.saucedemo.com');
  });

  it('Successfully login process.', async () => {
    await expect(loginPage.userNameInput).toBeDisplayed();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.bttnLoginClick();
  });

  it('Adding products to cart', async () => {
    await productsPage.addBackpack.click();
    await browser.pause(1000);
    await productsPage.addBikelight.click();
    await browser.pause(1000);

    await productsPage.cartBttn.click();
    await browser.pause(2000);

    await checkout.checkBttn.click();
    await browser.pause(1000);
  });

  it('Filling blanks incorrectly.', async () => {
    await checkout.cancelBttn.click();
    await checkout.checkBttn.click();
    await checkout.firstNameInput.setValue('Ale');
    await checkout.lastNameInput.setValue('Pashi');
    await checkout.zipCodeInput.setValue('');
    await checkout.continueBttn.click();

    await expect(checkout.errorMsg).toHaveTextContaining(
      'Error: Postal Code is required',
    )();
    await browser.pause(1000);
  });
});
