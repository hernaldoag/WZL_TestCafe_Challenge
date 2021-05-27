import { Role } from 'testcafe';
import { CREDENTIALS, MESSAGES } from '../data/Constants'
import { LoginPage } from '../pages/LoginPage'

export const standardUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('#user-name', CREDENTIALS.VALID_USER.USERNAME)
        .typeText('#password', CREDENTIALS.VALID_USER.PASSWORD)
        .click('#login-button');
});

export const performanceUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('#user-name', 'performance_glitch_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button');
});


export const incorrectUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('#user-name', CREDENTIALS.INVALID_USER.USERNAME)
        .typeText('#password', CREDENTIALS.INVALID_USER.PASSWORD)
        .click('#login-button')
        //.expect('#login_button_container > div > form > div.error-message-container.error > h3'.innerText).contains(`Epic sadface: Username and password do not match any user in this service`);
});
