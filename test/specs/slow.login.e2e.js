import loginPage from '../pageobjects/login.page.js';
import page from '../pageobjects/page.js';

describe('Login with unexpected and unauthorized users.', () => {
  beforeAll('Open browser', () => {
    browser.setWindowSize(1920, 1080);
    browser.url('https://www.saucedemo.com');
  });

  it('Verify slow login process.', async () => {
    await expect(loginPage.userNameInput).toBeDisplayed();
    await expect(loginPage.passwordInput).toBeDisplayed();
    await expect(loginPage.loginLogo).toBeDisplayed();
    const startTime = Date.now();
  });

  it('Verify slow login process.', async () => {
    await expect(loginPage.userNameInput).toBeDisplayed();
    await expect(loginPage.passwordInput).toBeDisplayed();
    await expect(loginPage.loginLogo).toBeDisplayed();
    const startTime = Date.now();

    await loginPage.login('performance_glitch_user', 'secret_sauce');
    await loginPage.bttnLoginClick();

    const endTime = Date.now();
    const executionTime = endTime - startTime;
    console.log(`Login execution time: ${executionTime} ms`);

    await expect(page.wrongImage).toBeDisplayed();
    await expect(executionTime).toBeLessThan(2000);
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

  it('The information related to the complete purchase process should be displayed correctly.', async () => {
    await browser.pause(1000);
    await expect(checkout.title).toHaveTextContaining('Checkout: Overview');
    await expect(checkout.paymentInfo).toBeDisplayed();
    await expect(checkout.elementDescr).toBeDisplayed();
    await expect(checkout.total).toBeDisplayed();
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
});
