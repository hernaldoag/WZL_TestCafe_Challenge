import {Selector, t} from 'testcafe'
//import {CheckoutStepTwoPage, FinishButton} from '../pages/CheckoutStepTwoPage'


class CheckoutPage{
    constructor(){
        this.firstName = Selector('#first-name')
        this.lastName = Selector('#last-name')
        this.zipCode = Selector('#postal-code')
        this.continueButton = Selector('#continue')
        this.cancel = Selector('#cancel')
        this.errorMessage = Selector('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3')
        CheckoutStepTwoPage = new CheckoutStepTwoPage();
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

    async FillCheckOutFormFull(firstname, lastname, zipcode){
        await t.typeText(this.firstName, firstname, {paste:true})
        await t.typeText(this.lastName, lastname,{paste:true})
        await t.typeText(this.zipCode, zipcode,{paste:true})
        await t.click(this.continueButton)
        .click(CheckoutStepTwoPage.finishButton)
    } 

    async FillCheckOutFormAssertion(firstname, lastname, zipcode){
        await t.typeText(this.firstName, firstname, {paste:true})
        await t.typeText(this.lastName, lastname,{paste:true})
        await t.typeText(this.zipCode, zipcode,{paste:true})
        await t.click(this.continueButton)
        .expect(CheckoutStepTwoPage.checkoutLbl.innerText).contains('CHECKOUT: OVERVIEW')
        .expect(CheckoutStepTwoPage.shippingInformation.innerText).contains('FREE PONY EXPRESS DELIVERY!')
        //await t.expect(this.item_onesie.innerText).contains('Sauce Labs Onesie')
    }
}

class CheckoutStepTwoPage{
    constructor(){
        this.cancel = Selector('#cancel')
        this.finishButton = Selector('#finish')
        this.checkoutLbl = Selector('#header_container > div.header_secondary_container > span')
        this.shippingInformation = Selector('#checkout_summary_container > div > div.summary_info > div:nth-child(4)')
    }  
}

export default new CheckoutPage()