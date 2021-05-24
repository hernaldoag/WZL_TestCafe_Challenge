import { Selector } from 'testcafe'


class CheckoutStepTwoPage{
    constructor(){
        this.cancel = Selector('#cancel')
        this.FinishButton = Selector('#finish')
    }

    
}

export default new CheckoutStepTwoPage()
