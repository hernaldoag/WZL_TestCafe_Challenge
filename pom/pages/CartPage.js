import { Selector } from 'testcafe'

class CartPage{
    constructor(){
        this.continueShopping = Selector('#continue-shopping')
        this.checkoutButton = Selector('#checkout')
        this.removeButton = Selector('#remove-sauce-labs-backpack')
    }

}

export default new CartPage()