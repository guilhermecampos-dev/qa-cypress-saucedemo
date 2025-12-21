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

    selectSortOption(option){
        cy.get('.product_sort_container').select(option)
    }

    getProductPrices(){
        return cy.get('.inventory_item_price')
    }

    validateProductsSortByPriceLowToHigh(){
        const prices = []

        this.getProductPrices().each(($price)=>{
            prices.push(Number($price.text().replace('$', '')))
        }).then(()=>{
            const sortedPrices = [...prices].sort((a,b)=>a-b)

            expect(prices).to.deep.equal(sortedPrices)
        })
    }

} export default InventoryPage

