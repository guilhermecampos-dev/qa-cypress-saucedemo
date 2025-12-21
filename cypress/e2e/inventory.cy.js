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

})
