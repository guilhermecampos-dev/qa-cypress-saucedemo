class CartPage{

    visit(){
        cy.get('.shopping_cart_link').click()
    }

    getCartItems(){
        return cy.get('.cart_item')
    }

    validateCartPage(){
        cy.get('.title')
        .should('be.visible')
        .and('have.text','Your Cart')
    }

    validateProductsAreDisplayed(){
        this.getCartItems().should('have.length.greaterThan', 0)
    }

    validateProductStructure(){
        this.getCartItems().each(($item)=>{
            cy.wrap($item).within(()=>{
                cy.get('.inventory_item_name').should('be.visible')
                cy.get('.inventory_item_price').should('be.visible')
                cy.get('.cart_quantity').should('be.visible')
            })
        })
    }


}export default CartPage