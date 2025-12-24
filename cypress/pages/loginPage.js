class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com')
  }

  fillUsername(username) {
    cy.get('[data-test="username"]').type(username)
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').type(password)
  }

  submit() {
    cy.get('[data-test="login-button"]').click()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }

  validateLoginPage() {
    cy.get('[data-test="username"]').should('be.visible')
    cy.get('[data-test="password"]').should('be.visible')
    cy.get('[data-test="login-button"]').should('be.visible')
  }

  validateErrorMessage(){
    cy.get('[data-test="error]"')
    .should('be.visible')
    .and('contain', 'Username and password do not match')
  }
  

}

export default LoginPage
