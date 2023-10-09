import { loadMenuData } from "./services/Menu.js";
import Router from "./services/Routet.js";
import Store from "./services/Store.js";


window.app = {}
app.store = Store;
app.router = Router;
// We listen to the window to make sure all the DOM content is ready
window.addEventListener("DOMContentLoaded", ()=>{
    loadMenuData();
    app.router.init();
});