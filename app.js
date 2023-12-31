import { loadMenuData } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

// Links to my web components
import { DetailsPage } from "./components/DetailsPage.js";
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { ProductItem } from "./components/ProductItem.js"
import { CartItem } from "./components/CartItem.js";

window.app = {}
app.store = Store;
app.router = Router;
// We listen to the window to make sure all the DOM content is ready
window.addEventListener("DOMContentLoaded", ()=>{
    loadMenuData();
    app.router.init();
});

window.addEventListener("appcartchange", event => {
    const badge = document.getElementById("badge");
    const quantity = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);

    badge.textContent = quantity;
    badge.hidden = quantity === 0;
})