export function setUpProductos() {
    const btnAbrirLista = document.getElementById("btn-lista-productos")
    btnAbrirLista.addEventListener("click", () => {
        window.location.href="./productos/productos.html"
    })

    class ProductCard extends HTMLElement {
        constructor() {
            super()
            this.title = this.getAttribute("title") ?? "Nombre desconocido"
            this.price = this.getAttribute("price") ?? "Precio descopmocido"
            this.description = this.getAttribute("description") ?? "Descripción desconocida"
            this.category = this.getAttribute("category") ?? "Categoría descopmocida"
            this.image = this.getAttribute("image") ?? "Imagen desconocida"
            this.rating = this.getAttribute("rating") ?? "Valoración descopmocida"
            const html = `
                <li>
                    <p class="product-title">Título: ${this.title}</p>
                    <p class="product-image">${this.image}</p>
                    <p class="product-description">Descripción: ${this.description}</p>
                    <p class="product-category">Categoría: ${this.category}</p>
                    <p class="product-price">Precio: ${this.price}</p>
                    <p class="product-rating">Valoración: ${this.rating}</p>
                </li>
            `   
            this.insertAdjacentHTML("beforeend", html)
        }
    }
    customElements.define("product-card", ProductCard)

    const listaProductos = document.getElementById('lista-productos');
    let contenidoDelProducto = []

    fetch(`https://fakestoreapi.com/products/category/electronics`)
        .then((res) => res.json())
        .then((datos) => {
            contenidoDelProducto = datos
            console.log(contenidoDelProducto)
            obtenerProductos()
        })
        .catch((err) => console.log(err))

    function obtenerProductos() {
        contenidoDelProducto.forEach((datos) => {
            const ul = document.createElement("ul")
            for(const dato of Object.values(datos)) {
                const li= document.createElement("li")
                li.innerHTML = `<product-card title="${datos.title}" price="${datos.price}" description="${datos.description}" category="${datos.category}" image="${datos.image}" rating="${datos.rating.rate}"/>`
                ul.appendChild(li)
                listaProductos.appendChild(ul)
            }
        })
    }
    obtenerProductos()
}