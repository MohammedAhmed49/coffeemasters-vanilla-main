export class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: "open"});
        const style = document.createElement("style");
        this.root.appendChild(style);

        async function loadCSS () {
            const req = await fetch("/components/MenuPage.css");
            const cssText = await req.text();
            style.textContent = cssText;
        }

        loadCSS();
    }

    // When the component is attached to DOM
    connectedCallback(){
        const template = document.getElementById("menu-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
        window.addEventListener("appmenuchange", () => {
            this.render();
        });
        this.render();
    }

    render(){
        if(app.store.menu) {
            this.root.querySelector("#menu").innerHTML = "";
            for(let category of app.store.menu) {
                const liCategory = document.createElement("li");
                liCategory.innerHTML = `
                    <h3>${category.name}</h3>
                    <ul class='category'>
                    </ul>
                `;
                this.root.querySelector('#menu').appendChild(liCategory);

                category.products.forEach(product => {
                    const productItem = document.createElement("product-item");
                    productItem.dataset.product = JSON.stringify(product);
                    liCategory.querySelector("ul").appendChild(productItem);
                })
            }
        } else {
            this.root.querySelector("#menu").innerHTML = "Loading menu ...";
        }
    }
}

customElements.define("menu-page", MenuPage);