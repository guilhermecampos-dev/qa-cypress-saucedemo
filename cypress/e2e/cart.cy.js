import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'

describe('Cart Page', () => {

  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()
  const cartPage = new CartPage()

  beforeEach(() => {
    loginPage.visit()
    cy.login() // login padrão: standard_user / secret_sauce
  })

  it('should add products to cart and validate badge', () => {
    // Adiciona produtos
    inventoryPage.addProductToCartByName('Sauce Labs Backpack')
    inventoryPage.addProductToCartByName('Sauce Labs Bike Light')

    // Valida badge no Inventory
    inventoryPage.validateCartBadge('2')

    // Vai para a página do carrinho
    cartPage.visit()

    // Valida carrinho e produtos
    cartPage.validateCartPage()
    cartPage.validateProductsAreDisplayed()
    cartPage.validateProductStructure()
    cartPage.validateCartBadge('2')
  })

  it('should remove a product from cart and update badge', () => {
    // Adiciona produtos
    inventoryPage.addProductToCartByName('Sauce Labs Backpack')
    inventoryPage.addProductToCartByName('Sauce Labs Bike Light')

    // Vai para a página do carrinho
    cartPage.visit()

    // Remove produto
    cartPage.removeProductByName('Sauce Labs Backpack')

    // Valida badge do carrinho
    cartPage.validateCartBadge('1')

    // Valida que o produto foi removido
    cartPage.getCartItems().should('have.length', 1)
  })

})
