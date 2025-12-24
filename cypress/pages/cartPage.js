class CartPage {

    // Navega para a página do carrinho clicando no ícone
    visit() {
        cy.get('.shopping_cart_link').click()
    }

    // Retorna todos os itens do carrinho
    getCartItems() {
        return cy.get('.cart_item')
    }

    // Valida que a página do carrinho foi carregada corretamente
    validateCartPage() {
        cy.get('.title')
            .should('be.visible')
            .and('have.text', 'Your Cart')
    }

    // Valida que existem produtos no carrinho
    validateProductsAreDisplayed() {
        this.getCartItems().should('have.length.greaterThan', 0)
    }

    // Valida a estrutura de cada produto no carrinho
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

    // Remove produto pelo nome
    removeProductByName(productName) {
        cy.contains('.cart_item', productName)
          .find('button')
          .click()
    }

    // Valida o badge do carrinho (quantidade de itens)
    validateCartBadge(quantity) {
        cy.get('.shopping_cart_badge')
            .should('be.visible')
            .and('have.text', quantity)
    }
}

export default CartPage
