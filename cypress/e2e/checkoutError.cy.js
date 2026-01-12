import InventoryPage from '../pages/inventoryPage'
import CartPage from '../pages/cartPage'
import CheckoutPage from '../pages/checkoutPage'

describe('Checkout - Error Scenarios', () => {

  const inventoryPage = new InventoryPage()
  const cartPage = new CartPage()
  const checkoutPage = new CheckoutPage()

  beforeEach(() => {
    cy.login()

    inventoryPage.addProductToCartByName('Sauce Labs Backpack')
    cartPage.visit()
    cartPage.clickCheckout()

    checkoutPage.validateCheckoutPage()
  })

  it('should show error when first name is missing', () => {
    checkoutPage.fillLastName('Doe')
    checkoutPage.fillZipCode('12345')
    checkoutPage.submit()

    checkoutPage.validateErrorMessage('First Name is required')
  })

  it('should show error when last name is missing', () => {
    checkoutPage.fillFirstName('John')
    checkoutPage.fillZipCode('12345')
    checkoutPage.submit()

    checkoutPage.validateErrorMessage('Last Name is required')
  })

  it('should show error when zip code is missing', () => {
    checkoutPage.fillFirstName('John')
    checkoutPage.fillLastName('Doe')
    checkoutPage.submit()

    checkoutPage.validateErrorMessage('Postal Code is required')
  })

})