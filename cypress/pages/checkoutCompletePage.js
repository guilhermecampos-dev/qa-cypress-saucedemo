class CheckoutCompletePage{

    validateCheckoutCompletePAge(){
        cy.get('.title')
        .should('be.visible')
        .and('have.text', 'Checkout: Complete!')
    }


    validateSuccessMessage(){
        cy.get('.complete-header')
        .should('be.visible')
        .and('have.text', 'Thank you for your order!')
    }

    validateSuccessDescription(){
        cy.get('.complete-text')
        .should('be.visible')
    }

    backProducts(){
        cy.get('[data-test="back-to-products"]').click()
    }
} export default CheckoutCompletePage