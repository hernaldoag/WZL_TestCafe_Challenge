import {Selector, t} from 'testcafe'


class CheckoutPage{
    constructor(){
        this.firstName = Selector('#first-name')
        this.lastName = Selector('#last-name')
        this.zipCode = Selector('#postal-code')
        this.continueButton = Selector('#continue')
        this.cancel = Selector('#cancel')
    }
    async FillCheckOutForm(firstname, lastname, zipcode){
        await t.typeText(this.firstName, firstname, {paste:true})
        await t.typeText(this.lastName, lastname,{paste:true})
        await t.typeText(this.zipCode, zipcode,{paste:true})
        await t.click(this.continueButton)
    }
}



export default new CheckoutPage()