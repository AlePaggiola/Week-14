import loginPage from '../pageobjects/login.page.js';
import page from '../pageobjects/page.js';
import menuPage from '../pageobjects/menu.js';

describe('Login with unexpected and unauthorized users.', () => {
  beforeAll('Open browser', () => {
    browser.setWindowSize(1920, 1080);
    browser.url('https://www.saucedemo.com');
  });

  it('Verify login process of locked out user login process.', async () => {
    await expect(loginPage.loginLogo).toBeDisplayed();
    await expect(loginPage.userNameInput).toBeDisplayed();
    await expect(loginPage.passwordInput).toBeDisplayed();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.bttnLoginClick();
  });

  it('Verify error message.', async () => {
    await expect(loginPage.errorMessage).toBeDisplayed();
    await expect(loginPage.errorMessage).toHaveTextContaining(
      'Epic sadface: Sorry, this user has been locked out.',
    );
    await browser.pause(2000);
    await browser.refresh();
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
});
