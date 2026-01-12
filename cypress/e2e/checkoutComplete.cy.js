import CartPage from "../pages/cartPage"
import CheckoutCompletePage from "../pages/checkoutCompletePage"
import CheckoutOverviewPage from "../pages/checkoutOverviewPage"
import CheckoutPage from "../pages/checkoutPage"
import InventoryPage from "../pages/inventoryPage"



describe('Checkout - Complete', ()=>{

    const inventoryPage = new InventoryPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()
    const overviewPage = new CheckoutOverviewPage()
    const completePage = new CheckoutCompletePage()


    beforeEach(() =>{
        cy.login()

        inventoryPage.addProductToCartByName('Sauce Labs Backpack')
        inventoryPage.addProductToCartByName('Sauce Labs Bike Light')

        cartPage.visit()
        cartPage.clickCheckout()

        checkoutPage.fillCheckoutForm(
            'Gui',
            'Tester',
            '70000'
        )

        overviewPage.finishCheckout()

    })

    it('should complete checkout successfully',()=>{
        completePage.validateCheckoutCompletePage()
        completePage.validateSuccessMessage()
        completePage.validateSuccessDescription()
    })

    it('should return to inventory page after finishing checkout', ()=>{
        completePage.backProducts()
        inventoryPage.validateInventoryPage()
    })

})