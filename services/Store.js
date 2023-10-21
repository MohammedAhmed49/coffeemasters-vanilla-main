const Store = {
    menu: null,
    cart: []
}

// Proxy is created so we can make data binding and make our app store reactive
const proxiedStore = new Proxy(Store, {
    set(target, prop, value) {
        target[prop] = value;
        if(prop === "menu") {
            // Firing an event to make the app trigger the change
            window.dispatchEvent(new Event("appmenuchange"));
        }
        if(prop === "cart") {
            // Firing an event to make the app trigger the change
            window.dispatchEvent(new Event("appcartchange"));
        }
        return true;
    }
})

export default proxiedStore;