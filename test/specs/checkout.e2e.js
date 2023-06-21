import loginPage from '../pageobjects/login.page.js';
import productsPage from '../pageobjects/productsPage.js';
import checkout from '../pageobjects/checkout.js';

describe('Accessing the web page correct user.', () => {
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

  it('Verify Checkout page is correctly displayed.', async () => {
    await checkout.checkBttn.click();
    await browser.pause(1000);
    await expect(browser).toHaveUrl(
      'https://www.saucedemo.com/checkout-step-one.html',
    );
    await expect(checkout.title).toHaveText('Checkout: Your Information');
  });

  it('Filling blanks correctly.', async () => {
    await checkout.cancelBttn.click();
    await checkout.checkBttn.click();
    await checkout.firstNameInput.setValue('Ale');
    await checkout.lastNameInput.setValue('Pashi');
    await checkout.zipCodeInput.setValue('1414');
    await checkout.continueBttn.click();

    await expect(checkout.errorMsg).not.toExist();
    await browser.pause(1000);
  });

  it('Cancel Button works correctly, redirecting back to inventory page', async () => {
    await checkout.cancelBttn.click();
    await browser.pause(2000);

    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
  });

  it('Adding products and proceed to cart - checkout.', async () => {
    await productsPage.cartBttn.click();
    await browser.pause(1000);

    await checkout.checkBttn.click();
    await browser.pause(1000);
    await checkout.firstNameInput.setValue('Ale');
    await checkout.lastNameInput.setValue('Pashi');
    await checkout.zipCodeInput.setValue('1414');
    await checkout.continueBttn.click();
  });

  it('The information related to the complete purchase process should be displayed correctly.', async () => {
    await browser.pause(1000);
    await expect(checkout.title).toHaveTextContaining('Checkout: Overview');
    await expect(checkout.paymentInfo).toBeDisplayed();
    await expect(checkout.elementDescr).toBeDisplayed();
    await expect(checkout.total).toBeDisplayed();
  });

  it('Finish button works correctly, leading to a complete-checkout page.', async () => {
    await checkout.finishBttn.click();
    await browser.pause(1000);
    await expect(browser).toHaveUrl(
      'https://www.saucedemo.com/checkout-complete.html',
    );
  });

  it('Verify Checkout page is displayed and has this title.', async () => {
    await expect(browser).toHaveUrl(
      'https://www.saucedemo.com/checkout-complete.html',
    );
    await expect(checkout.title).toHaveText('Checkout: Complete!');
    await checkout.goBackBttn.click();
    await browser.pause(1000);
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    await browser.pause(1000);
    await browser.reloadSession();
  });
});
