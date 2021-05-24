import LoginPage from '../pom/Pages/LoginPage'
import InventoryPage from '../pom/Pages/InventoryPage'
import { CREDENTIALS, MESSAGES, TEST_DATA, URLS } from '../pom/data/Constants'
import CartPage from '../pom/pages/CartPage';
import CheckoutPage from '../pom/pages/CheckoutPage';
import CheckoutStepTwoPage from '../pom/pages/CheckoutStepTwoPage';

fixture ('Wizeline Challenge')
    .page(`${URLS.LOGIN_PAGE}`)

test('My login Test', async t => {
    await t.
         typeText(LoginPage.userNameField, "standard_user", {paste:true})
        .typeText(LoginPage.passwordField, "secret_sauce",{paste:true})
        .click(LoginPage.loginButton)
});

test('My login Test with data', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
});

test.only('Login with Invalid User', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.wrongLogin.innerText).contains(`${MESSAGES.ERROR_MESSAGES.WRONG_LOGIN}`)
});

test('Login with Invalid User', async t => {
    await t.
         typeText(LoginPage.userNameField, "standard_user", {paste:true})
        .typeText(LoginPage.passwordField, "secret_sauces",{paste:true})
        .click(LoginPage.loginButton)
        await t.expect(LoginPage.wrongLogin.innerText).contains(`${MESSAGES.ERROR_MESSAGES.WRONG_LOGIN}`)
});

test('My login logout Test', async t => {
    await t.
         typeText(LoginPage.userNameField, "standard_user", {paste:true})
        .typeText(LoginPage.passwordField, "secret_sauce",{paste:true})
        .click(LoginPage.loginButton)
        
        .click(InventoryPage.menu)
        await t.click(InventoryPage.logout)
});



test('FULL PURCHASE', async t => {
    await t.
         typeText(LoginPage.userNameField, "standard_user", {paste:true})
        .typeText(LoginPage.passwordField, "secret_sauce",{paste:true})
        .click(LoginPage.loginButton)
        await t.click(InventoryPage.addToCartButton)
        .click(InventoryPage.cartButton)
        await t.click(CartPage.checkoutButton)
        await t.typeText(CheckoutPage.firstName,'HErny')
        await t.typeText(CheckoutPage.lastName,'Pescador')
        await t.typeText(CheckoutPage.zipCode, '90210')
        .click(CheckoutPage.continueButton)
        await t.click(CheckoutStepTwoPage.FinishButton)
});


test.only('FULL PURCHASE WITH DATA', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(InventoryPage.addToCartButton)
    .click(InventoryPage.cartButton)
    await t.click(CartPage.checkoutButton)
    await CheckoutPage.FillCheckOutForm(TEST_DATA.CHECKOUT_DATA.FIRSTNAME,TEST_DATA.CHECKOUT_DATA.LASTNAME,TEST_DATA.CHECKOUT_DATA.ZIPCODE)
    await t.click(CheckoutStepTwoPage.FinishButton)
});