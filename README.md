# 🧪 Cypress E2E Automation – SauceDemo

End-to-End (E2E) test automation project built with **Cypress** for the SauceDemo web application.

This repository showcases **real-world QA automation practices**, focusing on clean architecture, test stability, and CI execution.  
It was developed as a **professional portfolio project** aligned with international QA and SDET standards.

---

## 🚀 Tech Stack

- Cypress
- JavaScript
- Node.js
- Page Object Model (POM)
- GitHub Actions (CI)

---

## 📂 Project Structure
```text
cypress/
├── e2e/
│   ├── loginPage.cy.js
│   ├── inventory.cy.js
│   ├── cart.cy.js
│   ├── checkout.cy.js
│   ├── checkoutError.cy.js
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
└── support/
    ├── commands.js
    └── e2e.js
   ``` 
🧠 Design Pattern
This project follows the Page Object Model (POM) design pattern to:

- Separate test logic from UI interaction logic

- Improve readability and maintainability

- Promote code reuse

- Support scalable test growth

🧪 Test Coverage
The automated test suite covers the main user flows of the application:

🔐 Login
- Login with valid credentials

- Error validation with invalid credentials

📦 Inventory
- Inventory page validation

- Product list and structure validation

- Sorting validation:

- Name (A → Z / Z → A)

- Price (Low → High / High → Low)

🛒 Cart
- Add products to cart

- Validate cart badge quantity

- Remove products from cart

- Validate cart updates correctly

💳 Checkout
- Step One (user information)

- Required fields validation

- Step Two (overview)

- Product and price validation

- Order completion

- Return to products page

All tests are executed end-to-end, simulating real user behavior.

▶️ Running the Project
Install dependencies
- npm ci

Open Cypress Test Runner
- npm run cy:open

Run tests in headless mode
- npm test

🔄 Continuous Integration

This project uses GitHub Actions to automatically run all Cypress tests on:

- Push to main or develop

- Pull requests

- CI configuration file:

    - .github/workflows/cypress.yml

👨‍💻 Author

Guilherme Campos

QA Engineer | Cypress | E2E Automation

GitHub:
https://github.com/guilhermecampos-dev
