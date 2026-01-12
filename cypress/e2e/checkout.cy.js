import CheckoutPage from "../pages/checkoutPage"
import InventoryPage from "../pages/inventoryPage"
import CartPage from '../pages/cartPage'


describe('Checkout - Step One', ()=>{

    const checkoutPage = new CheckoutPage()
    const inventoryPage = new InventoryPage()
    const cartPage = new CartPage()

beforeEach(()=>{
    cy.login()

    inventoryPage.addProductToCartByName('Sauce Labs Backpack')
    cartPage.visit()
    cartPage.clickCheckout()
})

it('should display checkout information page', ()=>{
    checkoutPage.validateCheckoutPage()
})

it('should proceed to checkout overview with valid information', ()=>{
    checkoutPage.fillCheckoutForm('John', 'Doe', '12345')

    cy.url().should('include', 'checkout-step-two')
})

it('should show error message when submitting empty form', ()=>{
    checkoutPage.submit()

    checkoutPage.validateErrorMessage('Error: First Name is required')
})

})