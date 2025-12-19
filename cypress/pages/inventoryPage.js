class InventoryPage{
    validateInventoryPage(){
        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text','Products')
        cy.get('.inventory_item').should('have.length.greaterThan',0)
    }
}export default InventoryPage