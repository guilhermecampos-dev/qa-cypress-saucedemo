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

    validateProductsSortByPriceHighToLow(){
        const prices = []

        this.getProductPrices().each(($price)=>{
            prices.push(Number($price.text().replace('$','')))
        }).then(()=>{
            const sortedPricesDesc = [...prices].sort((a,b)=>b-a)

            expect(prices).to.deep.equal(sortedPricesDesc)
        })
    }

    
    getProductsNames(){
        return cy.get('.inventory_item_name')
    }
    
    validateProductsSortedByNameAToZ(){
        const names = []

        this.getProductsNames().each(($name)=>{
            names.push($name.text())
        }).then(()=>{
            const sortedNames = [...names].sort((a,b)=>a.localeCompare(b))
            expect(names).to.deep.equal(sortedNames)

        })
    }

    validateProductsSortedByNameZToA(){
        const names = []

        this.getProductsNames().each(($name)=>{
            names.push($name.text())
        }).then(()=>{
            const sortedNamesDown = [...names].sort((a,b)=>b.localeCompare(a))
            expect(names).to.deep.equal(sortedNamesDown)
        })
    }

    addProductToCartByName(productName){
        cy.contains('.inventory_item', productName)
        .find('button')
        .click()
    }

    getCartBadges(){
        return cy.get('.shopping_cart_badge')
    }

    validateCartBadge(quantity){
        if(quantity === '0'){
            cy.get('.shopping_cart_badge').should('not exist')
        }else{
            cy.get('.shopping_cart_badge')
            .should('be.visible')
            .and('have.text', quantity)
        }
    }    


    } export default InventoryPage
