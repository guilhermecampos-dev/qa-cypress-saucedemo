class CartPage {

    
    visit() {
        cy.get('.shopping_cart_link')
        .should('be.visible')
        .click()
    }

   
    getCartItems() {
        return cy.get('.cart_item')
    }

    validateCartPage() {
        cy.get('.title')
            .should('be.visible')
            .and('have.text', 'Your Cart')
    }

    clickCheckout(){
        cy.get('[data-test="checkout"]').click()
    }

    validateProductsAreDisplayed() {
        this.getCartItems().should('have.length.greaterThan', 0)
    }

    validateProductStructure() {
        this.getCartItems().each(($item) => {
            cy.wrap($item).within(() => {
                cy.get('.inventory_item_name').should('be.visible')
                cy.get('.inventory_item_price').should('be.visible')
                cy.get('.cart_quantity').should('be.visible')
                cy.get('button').should('be.visible') // botão remover
            })
        })
    }

    removeProductByName(productName) {
        this.getCartItems().should('exist')

        cy.contains('.cart_item', productName)
          .find('button')
          .should('be.visible')
          .click()
    }

    validateCartBadge(quantity){
        if(Number(quantity) === '0'){
            cy.get('.shopping_cart_badge').should('not.exist')
        }else{
            cy.get('.shopping_cart_badge')
            .should('be.visible')
            .invoke('text')
            .and('eq', quantity)
        }
    }   

    validateProductRemoved(productName){
        cy.contains('.cart_item', productName)
        .should('not.exist')
    }
}

export default CartPage
