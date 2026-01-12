class CheckoutOverviewPage{

    validateOverviewPage(){
        cy.get('.title')
        .should('be.visible')
        .and('have.text','Checkout: Overview')
    }

    getCartItems(){
        return cy.get('.cart_item')
    }

    validateProductsAreDisplayed(){
        this.getCartItems().should('have.length.greaterThan', 0)
    }

    getItemTotal(){
        return cy.get('.summary_subtotal_label')
    }

    getTax(){
        return cy.get('.summary_tax_label')
    }

    getTotal(){
        return cy.get('.summary_total_label')
    }

    validatePrices(){
        let itemTotal
        let tax
        let total

        this.getItemTotal().invoke('text').then(text => {
            itemTotal = Number(text.replace('Item total: $',''))
        })

        this.getTax().invoke('text').then(text => {
            tax=Number(text.replace('Tax: $',''))
        })

        this.getTotal().invoke('text').then(text =>{
            total=Number(text.replace('Total: $',''))
        })
        .then(()=>{
            expect(total).to.be.closeTo(itemTotal+tax,0.01)
        })
    }

    finishCheckout(){
        cy.get('[data-test="finish"]').click()
    }
    } export default CheckoutOverviewPage