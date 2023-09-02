import {LoginPage} from "./pages/login_pages.cy"
import {DashboardPage} from "./pages/dashboard_pages.cy"
import {SauceLabsBackpackPage} from "./pages/sauce_labs_backpack_pages.cy"
import {ShoppingCartPage} from "./pages/shopping_cart_pages.cy"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let sauceLabsBackpackPage = new SauceLabsBackpackPage()
let shoppingCartPage = new ShoppingCartPage()
const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Test Sauce Demo Add Product', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    sauceLabsBackpackPage.addCart()

})

it('Test Shopping Cart Product', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    sauceLabsBackpackPage.addCart()
    shoppingCartPage.shoppingCart('aa','bb','1234')

})
