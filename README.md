<h1> 🧪 Cypress E2E Automation – SauceDemo </h1>

End-to-End test automation project built with Cypress, using the demo e-commerce application
https://www.saucedemo.com
.

The goal of this project is to validate the main purchase flow of an e-commerce, from login to checkout completion, applying best practices in test automation and Page Object Model (POM) architecture.

🚀 Tech Stack

Cypress

JavaScript

Node.js

Page Object Model (POM)

📂 Project Structure
cypress/
├── e2e/
│   ├── loginPage.cy.js
│   ├── inventory.cy.js
│   ├── cart.cy.js
│   ├── checkout.cy.js
│   ├── checkoutOverview.cy.js
│   └── checkoutComplete.cy.js
│
├── pages/
│   ├── loginPage.js
│   ├── inventoryPage.js
│   ├── cartPage.js
│   ├── checkoutPage.js
│   ├── checkoutOverviewPage.js
│   └── checkoutCompletePage.js
│
├── support/
│   └── commands.js

🧠 Design Pattern

This project uses Page Object Model (POM) to:

Separate test logic from UI interaction logic

Improve test readability

Increase maintainability

Promote code reuse

🧪 Automated Test Scenarios
🔐 Login

Login with valid credentials

Error validation with invalid credentials

📦 Inventory

Inventory page validation

Product list validation

Product structure validation

Sorting validation:

Name (A → Z / Z → A)

Price (Low → High / High → Low)

🛒 Cart

Add products to cart

Validate cart badge quantity

Remove products from cart

Validate cart updates correctly

💳 Checkout

Step One (Your Information)

Required fields validation

Step Two (Overview)

Products and prices validation

Complete

Order completion validation

Return to products page

▶️ How to Run the Project
Install dependencies
npm install

Open Cypress Test Runner
npx cypress open

Run tests in headless mode
npx cypress run

📌 Notes

Project focused on QA Automation best practices

Clean and scalable architecture

Ready to be expanded with API tests or CI pipelines

Suitable for QA Automation Engineer portfolio

👨‍💻 Author

Developed by Guilherme (Gui)
QA Automation Engineer
