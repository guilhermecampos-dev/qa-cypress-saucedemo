import LoginPage from '../pages/loginPage'


describe('Login', () => {
  const loginPage = new LoginPage()

beforeEach(() =>{
    loginPage.visit()
})

  it('should display login fields', () => {
    loginPage.validateLoginPage()
  })

  it('should login with valid credentials', () => {
    loginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory')
  })
  it('should not login with invalid credentials', () =>{
    loginPage.login('wrong_user', 'wrong_password')
    loginPage.validateErrorMessage()
    cy.url().should('include','saucedemo.com')
  })



})
