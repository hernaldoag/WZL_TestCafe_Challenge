import {Selector, t} from 'testcafe'


class InventoryPage {
    constructor(){
        this.menu = Selector('#react-burger-menu-btn')
        this.logout = Selector('#logout_sidebar_link')
 
        this.addToCartButton = Selector('#add-to-cart-sauce-labs-bike-light')

        this.removeButton = Selector('#add-to-cart-sauce-labs-bike-light')

        this.cartButton = Selector('#shopping_cart_container > a')
        this.itemList = Selector('#inventory_container > div')

        this.add_button = Selector('#inventory_container > div > div:nth-child(6) > div.inventory_item_img')
        //All Items
        this.backpack = Selector('#add-to-cart-sauce-labs-backpack')
        this.bikeLight = Selector('#add-to-cart-sauce-labs-bike-light')
        this.boltTee = Selector('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.jacket = Selector('#add-to-cart-sauce-labs-fleece-jacket')
        this.onesie = Selector('#add-to-cart-sauce-labs-onesie')
        this.tee = Selector('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)')
    }

    async checkCart(){
        await t.click(this.cartButton)
        
    }

    async addSingleItemToCart(){
        await t.click(this.onesie)
 
     }

    async addItemsToCart(){
       var numberOfItems =Math.floor(Math.random() * (7 - 1)) + 1;
       const add_buttons = Selector('button').withText('ADD TO CART')      
        for(let i=0; i < numberOfItems; i++){
            await t.click(add_buttons) //click each link
        }

    }

    async logout(){
        await t.click(InventoryPage.menu)
        await t.click(InventoryPage.logout)
    }
        
}   


export default new InventoryPage()