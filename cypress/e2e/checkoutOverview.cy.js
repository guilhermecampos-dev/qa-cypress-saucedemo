import InventoryPage from '../pages/inventoryPage'
import CartPage from '../pages/cartPage'
import CheckoutPage from '../pages/checkoutPage'
import CheckoutOverviewPage from '../pages/checkoutOverviewPage'

describe('Checkout - Step Two (Overview)', ()=>{

    const inventoryPage = new InventoryPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()
    const overviewPage = new CheckoutOverviewPage()

    beforeEach(()=>{
        cy.login()

        inventoryPage.addProductToCartByName('Sauce Labs Backpack')
        inventoryPage.addProductToCartByName('Sauce Labs Bike Light')
        
        cartPage.visit()
        cy.get('[data-test="checkout"]').click()

        checkoutPage.fillCheckoutForm('John', 'Doe','12345')
    })

    it('should display checkout overview page',()=>{
        overviewPage.validateOverviewPage()
    })

    it('should display product and correct prices',()=>{
        overviewPage.validateProductsAreDisplayed()
        overviewPage.validatePrices()
    })

    it('should finish checkout sucessfully',()=>{
        overviewPage.finishCheckout()
        cy.url().should('include','checkout-complete')
    })
})