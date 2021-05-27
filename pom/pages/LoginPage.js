import { Selector, t } from 'testcafe'
import { standardUser, incorrectUser2 } from '../data/Roles'
import { MESSAGES } from '../data/Constants'

class LoginPage {
    constructor(){
        this.userNameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.wrongLogin = Selector('#login_button_container > div > form > div.error-message-container.error > h3')
    }

    async LoginMethod(username, password){
        await t.typeText(this.userNameField, username, {paste:true})
        await t.typeText(this.passwordField, password,{paste:true})
        await t.click(this.loginButton)
    }

    async LoginWithRole(){
        await t.useRole(standardUser)
    }

    //Need Fixing this
    async WrongLoginWithRole(){
        //const wrongLogin = Selector('#login_button_container > div > form > div.error-message-container.error > h3')
        await t.useRole(incorrectUser2)
        //.expect(wrongLogin().innerText).contains(`${MESSAGES.ERROR_MESSAGES.WRONG_LOGIN}`)
    }



}


export default new LoginPage()