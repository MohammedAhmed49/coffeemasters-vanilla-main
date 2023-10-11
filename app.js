import { loadMenuData } from "./services/Menu.js";
import Router from "./services/Routet.js";
import Store from "./services/Store.js";

// Links to my web components
import { DetailsPage } from "./components/DetailsPage.js";
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";

window.app = {}
app.store = Store;
app.router = Router;
// We listen to the window to make sure all the DOM content is ready
window.addEventListener("DOMContentLoaded", ()=>{
    loadMenuData();
    app.router.init();
});