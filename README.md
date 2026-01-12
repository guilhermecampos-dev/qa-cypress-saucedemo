<h1> 🧪 Cypress E2E Automation – SauceDemo </h1>

End-to-End test automation project built with Cypress, using the demo e-commerce application
https://www.saucedemo.com
.

The goal of this project is to validate the main purchase flow of an e-commerce, from login to checkout completion, applying best practices in test automation and Page Object Model (POM) architecture.

<h2> 🚀 Tech Stack </h2>

- Cypress

- JavaScript

- Node.js

- Page Object Model (POM)

<h2>📂 Project Structure</h2>

cypress/<br>
├── e2e/<br>
│   ├── loginPage.cy.js<br>
│   ├── inventory.cy.js<br>
│   ├── cart.cy.js<br>
│   ├── checkout.cy.js<br>
│   ├── checkoutError.cy.js<br>
│   ├── checkoutOverview.cy.js<br>
│   └── checkoutComplete.cy.js<br>
│<br>
├── pages/<br>
│   ├── loginPage.js<br>
│   ├── inventoryPage.js<br>
│   ├── cartPage.js<br>
│   ├── checkoutPage.js<br>
│   ├── checkoutOverviewPage.js<br>
│   └── checkoutCompletePage.js<br>
│<br>
├── support/<br>
│   ├── commands.js<br>
│   └── e2e.js<br>
<br>
<br>
<h2>🧠 Design Pattern</h2>

This project uses Page Object Model (POM) to:

- Separate test logic from UI interaction logic

- Improve test readability

- Increase maintainability

- Promote code reuse

<h2>🧪 Automated Test Scenarios</h2>
<h3>🔐 Login</h3>

- Login with valid credentials

- Error validation with invalid credentials

<h3>📦 Inventory</h3>

- Inventory page validation

- Product list validation

- Product structure validation

- Sorting validation:

  - Name (A → Z / Z → A)

  - Price (Low → High / High → Low)

<h3>🛒 Cart</h3>

- Add products to cart

- Validate cart badge quantity

- Remove products from cart

- Validate cart updates correctly

<h3>💳 Checkout</h3>

- Step One (Your Information)

- Required fields validation

- Step Two (Overview)

- Products and prices validation

- Complete

- Order completion validation

- Return to products page

<h2>▶️ How to Run the Project</h2>
- Install dependencies
  - npm install

- Open Cypress Test Runner
  - npx cypress open

- Run tests in headless mode
 - npx cypress run

<h2>📌 Notes</h2>

- Project focused on QA Automation best practices

- Clean and scalable architecture

- Ready to be expanded with API tests or CI pipelines

- Suitable for QA Automation Engineer portfolio

<h2>👨‍💻 Author</h2>

- Developed by Guilherme Campos
- QA Automation Engineer
