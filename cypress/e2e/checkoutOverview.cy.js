import InventoryPage from '../pages/inventoryPage'
import CartPage from '../pages/cartPage'
import CheckoutPage from '../pages/checkoutPage'
import CheckoutOverviewPage from '../pages/checkoutOverviewPage'
import LoginPage from '../pages/loginPage'

describe('Checkout - Step Two (Overview)', ()=>{

    const inventoryPage = new InventoryPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()
    const overviewPage = new CheckoutOverviewPage()
    const loginPage = new LoginPage()

    beforeEach(()=>{
        cy.login()

        inventoryPage.addProductToCartByName('Sauce Labs Backpack')
        inventoryPage.addProductToCartByName('Sauce Labs Bike Light')
        
        cartPage.visit()
        cartPage.clickCheckout()

        checkoutPage.fillCheckoutForm({
            firstName: 'John',
            lastName: 'Doe',
            zipCode:'12345'
        })

        overviewPage.validateOverviewPage()
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