const Router = {
    init: () => {
        // Make all links clicks to be silent
        document.querySelectorAll('.navlink').forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const url = event.target.getAttribute("href");
                Router.go(url);
            });
        });

        // Handle URL changes for cases like back and forward arrows
        window.addEventListener("popstate", event => {
            // event.state.route is the first parameter in history.pushState
            Router.go(event.state.route, false);
        })

        // Render the initial component for the initial load
        Router.go(location.pathname)
    },
    go: (route, addToHistory=true) => {
        if(addToHistory) {
            history.pushState({route}, null, route);
        }

        let pageElement = null;
        switch(route) {
            // Handle Home page
            case '/':
                pageElement = document.createElement('menu-page');
                break;
            // Handle cart page
            case '/order':
                pageElement = document.createElement('order-page');
                break;
            default:
                // Handle product details page with id param like /product-123
                if(route.startsWith('/product-')) {
                    pageElement = document.createElement('details-page');
                    const paramId = route.substring(route.lastIndexOf('-') + 1);
                    pageElement.dataset.id = paramId;
                }
        }
        if(pageElement){
            const mainElement = document.querySelector("main");
            mainElement.innerHTML = "";
            mainElement.appendChild(pageElement);
        }
    }
}

export default Router;