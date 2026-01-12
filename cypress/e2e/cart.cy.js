import CartPage from '../pages/cartPage'
import InventoryPage from '../pages/inventoryPage'
import LoginPage from '../pages/loginPage'

describe('Cart Page', () => {

  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()
  const cartPage = new CartPage()

  beforeEach(() => {
    cy.login()
  })

  it('should add products to cart and validate badge', () => {

    inventoryPage.addProductToCartByName('Sauce Labs Backpack')
    inventoryPage.addProductToCartByName('Sauce Labs Bike Light')

    inventoryPage.validateCartBadge('2')

    cartPage.visit()

    cartPage.validateCartPage()
    cartPage.validateProductsAreDisplayed()
    cartPage.validateProductStructure()
    cartPage.validateCartBadge('2')
    
  })

  it('should remove a product from cart and update badge', () => {

    inventoryPage.addProductToCartByName('Sauce Labs Backpack')
    inventoryPage.addProductToCartByName('Sauce Labs Bike Light')

    cartPage.visit()

    cartPage.removeProductByName('Sauce Labs Backpack')
    cartPage.validateCartBadge('1')
    cartPage.getCartItems().should('have.length', 1)
  })

})
