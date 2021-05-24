import {Selector} from 'testcafe'


class InventoryPage {
    constructor(){
        this.menu = Selector('#react-burger-menu-btn')
        this.logout = Selector('#logout_sidebar_link')
 
        this.addToCartButton = Selector('#add-to-cart-sauce-labs-bike-light')

        this.removeButton = Selector('#add-to-cart-sauce-labs-bike-light')

        this.cartButton = Selector('#shopping_cart_container > a')
    }
}


export default new InventoryPage()