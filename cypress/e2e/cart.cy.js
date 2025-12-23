import CartPage from "../pages/cartPage"
import InventoryPage from "../pages/inventoryPage"

describe('Cart Page', ()=>{
    const inventoryPage = new InventoryPage()
    const cartPage = new CartPage()

beforeEach(()=>{
    cy.login()
    inventoryPage.addProductToCartByName('Sauce Labs Backpack')
    inventoryPage.validateCartBadge('1')
    cartPage.visit()
    cartPage.validateCartPage()
    cartPage.validateProductsAreDisplayed()
})

it('should display cart page correctly',()=>{
    cartPage.validateCartPage()
})

it('should display added products in cart', ()=>{
    cartPage.validateProductsAreDisplayed()
    cartPage.validateProductStructure()
})

})