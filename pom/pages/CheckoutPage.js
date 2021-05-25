import {Selector, t} from 'testcafe'


class CheckoutPage{
    constructor(){
        this.firstName = Selector('#first-name')
        this.lastName = Selector('#last-name')
        this.zipCode = Selector('#postal-code')
        this.continueButton = Selector('#continue')
        this.cancel = Selector('#cancel')
        this.errorMessage = Selector('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3')
    }
    async FillCheckOutForm(firstname, lastname, zipcode){
        await t.typeText(this.firstName, firstname, {paste:true})
        await t.typeText(this.lastName, lastname,{paste:true})
        await t.typeText(this.zipCode, zipcode,{paste:true})
        await t.click(this.continueButton)
    }

    async FillCheckOutFormMissing(firstname, lastname, zipcode){
        await t.typeText(this.firstName, firstname, {paste:true})
        await t.typeText(this.lastName, lastname,{paste:true})
        await t.typeText(this.zipCode, zipcode,{paste:true})
        await t.click(this.continueButton)
    }
}



export default new CheckoutPage()