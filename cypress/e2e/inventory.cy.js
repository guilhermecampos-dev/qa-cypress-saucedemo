import InventoryPage from "../pages/inventoryPage"


describe('Inventory',() => {
    const inventoryPage = new InventoryPage()

    beforeEach(()=>{
        cy.login()
    })

    it('should display inventory page', ()=>{
        inventoryPage.validateInventoryPage()
    })
})
