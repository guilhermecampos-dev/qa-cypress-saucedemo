import InventoryPage from "../pages/inventoryPage"


describe('Inventory Page',() => {
    const inventoryPage = new InventoryPage()

    beforeEach(()=>{
        cy.login()
    })

    it('should display inventory page', ()=>{
        inventoryPage.validateInventoryPage()
    })

    it('should display products list',()=>{
        inventoryPage.validateProductsAreDisplayed()
    })

    it('should display correct product structure', ()=>{
        inventoryPage.validateProductStructure()
    })

    it('should sort products by price low to high', ()=>{
        inventoryPage.selectSortOption('lohi')

        inventoryPage.validateProductsSortByPriceLowToHigh()
    })

    it('should sort products by price high to low', ()=>{
        inventoryPage.selectSortOption('hilo')

        inventoryPage.validateProductsSortByPriceHighToLow()
    })

    it('should sort products by name A to Z', ()=>{
        inventoryPage.selectSortOption('az')
        inventoryPage.validateProductsSortedByNameAToZ()
    })

     it('should sort products by name Z to A', ()=>{
        inventoryPage.selectSortOption('za')
        inventoryPage.validateProductsSortedByNameZToA()
    })


    it('should update cart badge when adding a product', ()=>{
        inventoryPage.addProductToCartByName('Sauce Labs Backpack')
        inventoryPage.validateCartBadge('1')
    })


})
