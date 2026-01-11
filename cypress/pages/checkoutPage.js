class CheckoutPage{

    validateCheckoutPage(){
        cy.get('.title')
        .should('be.visible')
        .and('have.text', 'Checkout: Your Information')
    }

    fillFirstName(firstName){
        cy.get('[data-test="firstName"]').type(firstName)
    }

    fillLastName(lastName){
        cy.get('[data-test="lastName"]').type(lastName)
    }

    fillZipCode(zipCode){
        cy.get('[data-test="postalCode"]').type(zipCode)
    }

    submit(){
        cy.get('[data-test="continue"]').click()
    }

   fillCheckoutForm({ firstName, lastName, zipCode }) {

    if (firstName) {
    this.fillFirstName(firstName)
    }

    if (lastName) {
    this.fillLastName(lastName)
    }

    if (zipCode) {
    this.fillZipCode(zipCode)
    }

    this.submit()
    }


    validateErrorMessage(message){
        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', message)
    }
}export default CheckoutPage