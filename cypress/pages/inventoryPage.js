class InventoryPage{
    validateInventoryPage(){
        cy.get('.inventory_item')
            .should('have.length.greaterThan',0)
    }
}export default InventoryPage