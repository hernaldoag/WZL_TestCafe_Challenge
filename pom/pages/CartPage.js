import { Selector, t } from 'testcafe'

class CartPage{
    constructor(){
        this.continueShopping = Selector('#continue-shopping')
        this.checkoutButton = Selector('#checkout')
        this.removeButton = Selector('#remove-sauce-labs-backpack')
        this.title = Selector('#header_container > div.header_secondary_container > span')
        this.item_name = Selector('#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label')
        this.item_onesie = Selector('#cart_contents_container > div > div.cart_list > div:nth-child(5) > div.cart_item_label')
    }

    async presenceOnCartPage(){
        await t.expect(this.title.exists).ok
    }

    async itemPresentOnCart(){
        await t.expect(this.item_onesie.innerText).contains('Sauce Labs Onesie')
    }

}

export default new CartPage()