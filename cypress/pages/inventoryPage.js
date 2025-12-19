class InventoryPage{
    validateInventoryPage(){
        cy.get('.title')
            .should('be.visible')
            .and('have.text','Products')
    }

    getInventoryItems(){
        return cy.get('.inventory_item')
    }

    validateProductsAreDisplayed(){
        this.getInventoryItems().should('have.length.greaterThan', 0)
    }

    validateProductStructure(){
        this.getInventoryItems().each(($item)=>{
            cy.wrap($item).within(()=>{
                cy.get('.inventory_item_name').should('be.visible')
                cy.get('.inventory_item_price').should('be.visible')
                cy.get('button').should('be.visible')
                }
            )
        })

    }
} export default InventoryPage

