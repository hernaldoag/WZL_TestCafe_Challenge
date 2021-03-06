import LoginPage from '../pom/Pages/LoginPage'
import InventoryPage from '../pom/Pages/InventoryPage'
import { CREDENTIALS, MESSAGES, TEST_DATA, URLS } from '../pom/data/Constants'
import CartPage from '../pom/pages/CartPage';
import CheckoutPage from '../pom/pages/CheckoutPage';
import CheckoutStepTwoPage from '../pom/pages/CheckoutStepTwoPage';

fixture ('Wizeline Challenge')
    .page(`${URLS.LOGIN_PAGE}`)

    
test('Test 1 - Correct Login', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
});

test('Test 1.1 - Correct Login with role', async t => {
    await LoginPage.LoginWithRole()
});

test('Test 2 - Login with Invalid User', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.wrongLogin.innerText).contains(`${MESSAGES.ERROR_MESSAGES.WRONG_LOGIN}`)
});

/*Pending to fix this test
test.only('Test 2.1 - Login with Invalid User using role', async t => {
    await LoginPage.WrongLoginWithRole()
    //await t.expect(LoginPage.wrongLogin.innerText).contains(`${MESSAGES.ERROR_MESSAGES.WRONG_LOGIN}`)
});
*/

test('Test 3 - Log in and log out', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await InventoryPage.logout()
});

test('Test 3.1 - Log in and log out - Usign Role', async t => {
    await LoginPage.LoginWithRole()
    await InventoryPage.logout()
});

test('Test 4 - Navigate to Shopping Cart', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

});

test('Test 5 - Add a Single Item to Cart', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await InventoryPage.addSingleItemToCart()
    await InventoryPage.checkCart()
    await CartPage.itemPresentOnCart()
});

test('Test 6 - Add multiple Item to Cart ', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await InventoryPage.addItemsToCart()
    await InventoryPage.checkCart()
    await CartPage.presenceOnCartPage()

});

test('Test 7 - Continue wih missing mail information', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await InventoryPage.addSingleItemToCart()
    await InventoryPage.checkCart()
    await CartPage.presenceOnCartPageAndCheckout()
    await t.click(CheckoutPage.continueButton)
    await t.expect(CheckoutPage.errorMessage.innerText).contains(`${MESSAGES.ERROR_MESSAGES.FIRSTNAME_MISSING}`)
});

test('Test 8 - Fill User Information', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await InventoryPage.addItemsToCart()
    await InventoryPage.checkCart()
    await t.click(CartPage.checkoutButton)
    await CheckoutPage.FillCheckOutForm(TEST_DATA.CHECKOUT_DATA.FIRSTNAME,TEST_DATA.CHECKOUT_DATA.LASTNAME,TEST_DATA.CHECKOUT_DATA.ZIPCODE)
    await t.click(CheckoutStepTwoPage.FinishButton)
});

test('Test 8.1 - Fill User Information', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await InventoryPage.addSingleItemToCart()
    await InventoryPage.checkCart()
    await CartPage.presenceOnCartPageAndCheckout()
    await CheckoutPage.FillCheckOutFormAssertion(TEST_DATA.CHECKOUT_DATA.FIRSTNAME,TEST_DATA.CHECKOUT_DATA.LASTNAME,TEST_DATA.CHECKOUT_DATA.ZIPCODE)
});

test('Test 9 - Final Order Items', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await InventoryPage.addSingleItemToCart()
    await InventoryPage.checkCart()
    await CartPage.presenceOnCartPageAndCheckout()
    await CheckoutPage.FillCheckOutFormAssertion(TEST_DATA.CHECKOUT_DATA.FIRSTNAME,TEST_DATA.CHECKOUT_DATA.LASTNAME,TEST_DATA.CHECKOUT_DATA.ZIPCODE)
});

test('Test 10 - FULL PURCHASE', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await InventoryPage.addSingleItemToCart()
    await InventoryPage.checkCart()
    await CartPage.presenceOnCartPageAndCheckout()
    await CheckoutPage.FillCheckOutFormFull(TEST_DATA.CHECKOUT_DATA.FIRSTNAME,TEST_DATA.CHECKOUT_DATA.LASTNAME,TEST_DATA.CHECKOUT_DATA.ZIPCODE)
});

test('Test 10.1 - FULL PURCHASE WITH DATA', async t => {
    await LoginPage.LoginMethod(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(InventoryPage.addToCartButton)
    .click(InventoryPage.cartButton)
    await t.click(CartPage.checkoutButton)
    await CheckoutPage.FillCheckOutForm(TEST_DATA.CHECKOUT_DATA.FIRSTNAME,TEST_DATA.CHECKOUT_DATA.LASTNAME,TEST_DATA.CHECKOUT_DATA.ZIPCODE)
    await t.click(CheckoutStepTwoPage.FinishButton)
});