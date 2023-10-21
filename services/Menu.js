import API from "./API.js";

export async function loadMenuData() {
    app.store.menu = await API.fetchData();
}

export async function getProductById(id) {
    if(!app.store.menu) {
        await loadMenuData();
    }

   
    for(let category of app.store.menu) {
        for(let product of category.products) {
            if(product.id == id) {
                return product;
            }
        }
    }

    return null;
}