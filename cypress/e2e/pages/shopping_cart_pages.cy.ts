export class ShoppingCartPage{
    link_shoppingCart = 'Shopping Cart'

    btn_add_to_cart = '#shopping_cart_container'
    btn_checkout = '#checkout'

    txt_firstname = '#first-name'
    txt_lastname = '#last-name'
    txt_zip = '#postal-code'
    btn_continue = '#continue'

    clickShoppingCart(){
        cy.get(this.btn_add_to_cart).click()
    }

    clickCheckout() {
        cy.get(this.btn_checkout).click()
    }

    inputFirstname(firstname: string){
        cy.get(this.txt_firstname).type(firstname)
    }
    inputLastname(lastname: string){
        cy.get(this.txt_lastname).type(lastname)
    }
    inputZip(zip: string){
        cy.get(this.txt_zip).type(zip)
    }
    clickContinue(){
        cy.get(this.btn_continue).click()
    }


    shoppingCart(firstname : string,lastname : string,zip : string){
        this.clickShoppingCart()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
        this.clickCheckout()
        this.inputFirstname(firstname)
        this.inputLastname(lastname)
        this.inputZip(zip)
        this.clickContinue()
        cy.contains('Checkout: Overview').should('be.visible') 

    }
}