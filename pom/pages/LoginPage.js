import {Selector, t} from 'testcafe'

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
}


export default new LoginPage()