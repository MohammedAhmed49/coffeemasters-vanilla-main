import { loadMenuData } from "./services/Menu.js";
import Store from "./services/Store.js";


window.app = {}
app.store = Store;

// We listen to the window to make sure all the DOM content is ready
window.addEventListener("DOMContentLoaded", ()=>{
    loadMenuData();
});