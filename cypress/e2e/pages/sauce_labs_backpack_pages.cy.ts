export class SauceLabsBackpackPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    btn_add_to_cart = '#add-to-cart-sauce-labs-backpack'


    clickAddToCart(){
        cy.get(this.btn_add_to_cart).click()
    }

    addCart(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
        this.clickAddToCart()
    }
}

