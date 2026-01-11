import LoginPage from '../pages/loginPage'
import InventoryPage from '../pages/inventoryPage'
import CartPage from '../pages/cartPage'
import CheckoutPage from '../pages/checkoutPage'

describe('Checkout - Error Scenarios', ()=>{

    const loginPage = new LoginPage()
    const inventoryPage = new InventoryPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()

    beforeEach(()=>{
        loginPage.visit()
        cy.login()

        inventoryPage.addProductToCartByName('Sauce Labs Backpack')
        cartPage.visit()

        cy.get('[data-test="checkout"]').click()
        checkoutPage.validateCheckoutPage()
    })

    it('should show error when first name is missing', ()=>{
        checkoutPage.fillCheckoutForm({
             lastName: 'Doe',
             zipCode: '12345'
    })
        checkoutPage.validateErrorMessage('First Name is required')
    })

    it('should show error when last name is missing', ()=>{
      checkoutPage.fillCheckoutForm({
         firstName: 'John',
        zipCode: '12345'
    })

        checkoutPage.validateErrorMessage('Last Name is required')
    })

    it('should show error when zip code is missing', ()=>{
        checkoutPage.fillCheckoutForm({
            firstName: 'John',
            lastName: 'Doe'
    })

        checkoutPage.validateErrorMessage('Postal Code is required')
    })
})