import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'

describe('Cart Page', () => {

  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()
  const cartPage = new CartPage()

  beforeEach(() => {
    cy.login()

    inventoryPage.addProductToCartByName('Sauce Labs Backpack')
    inventoryPage.addProductToCartByName('Sauce Labs Bike Light')

    cartPage.visit()
  })

  it('should display cart page correctly', () => {
    cartPage.validateCartPage()
    cartPage.validateProductsAreDisplayed()
    cartPage.validateProductStructure()
  })

})
