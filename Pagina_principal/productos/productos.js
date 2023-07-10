export function setUpProductos() {
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
                <li class="product-articules">
                    <p class="product-title">Título: ${this.title}</p>
                    <p class="product-description">Descripción: ${this.description}</p>
                    <p class="product-category">Categoría: ${this.category}</p>
                    <p class="product-price">Precio: ${this.price}</p>
                    <button class="btn-cart" id="btn-cart">Agregar al Carrito</button>
                    <p class="product-rating">Valoración: ${this.rating}</p>
                    <img src="${this.image}" alt="Imagen del producto" class="product-image">
                </li>
            `   
            this.insertAdjacentHTML("beforeend", html)
        }
    }
    customElements.define("product-card", ProductCard)

    const listaProductos = document.getElementById('lista-productos');
    let contenidoDelProducto = []



    fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((datos) => {
            contenidoDelProducto = datos
            obtenerTodosLosProductos()
            obtenerProductos()
        })
        .catch((err) => console.log(err))

    function obtenerTodosLosProductos() {
        const ul = document.createElement("ul");
        contenidoDelProducto.forEach((datos) => {
            const li = document.createElement("li");
            li.innerHTML = `<product-card title="${datos.title}" price="${datos.price}" description="${datos.description}" category="${datos.category}" image="${datos.image}" rating="${datos.rating.rate}"/>`;
            ul.appendChild(li);
        });
        listaProductos.appendChild(ul);
    }
    obtenerTodosLosProductos()
    function obtenerProductos(categoria) {
        fetch(`https://fakestoreapi.com/products/category/${categoria}`)
            .then((res) => res.json())
            .then((datos) => {
                const ul = document.createElement("ul");
                datos.forEach((producto) => {
                    const li = document.createElement("li");
                    li.innerHTML = `<product-card title="${producto.title}" price="${producto.price}" description="${producto.description}" category="${producto.category}" image="${producto.image}" rating="${producto.rating.rate}"/>`;
                    ul.appendChild(li);
                });
                listaProductos.appendChild(ul);
            })
            .catch((err) => console.log(err));
    }
    const btnCategorias = document.querySelectorAll(".btn-categoria");
    btnCategorias.forEach((btn) => {
        btn.addEventListener("click", (evento) => {
            const categoria = evento.target.getAttribute("data-categoria");
            listaProductos.innerHTML = "";
            obtenerProductos(categoria);
        });
    });

    const btnPrecioMayor = document.getElementById('btn-precio-mayor')
    const btnPrecioMenor = document.getElementById('btn-precio-menor')
    btnPrecioMayor.addEventListener("click", () => {
        ordenarProductos(true);
        });
    btnPrecioMenor.addEventListener("click", () => {
        ordenarProductos(false);
    });

    function ordenarProductos(deMayorAMenor) {
        listaProductos.innerHTML = "";
        const productosOrdenados = contenidoDelProducto.sort((a, b) => {
            if (deMayorAMenor) {
                return b.price - a.price;
            } else {
                return a.price - b.price;
            }
        });
        const ul = document.createElement("ul");
        productosOrdenados.forEach((producto) => {
            const li = document.createElement("li");
            li.innerHTML = `<product-card title="${producto.title}" price="${producto.price}" description="${producto.description}" category="${producto.category}" image="${producto.image}" rating="${producto.rating.rate}"/>`;
            ul.appendChild(li);
        });
    listaProductos.appendChild(ul);
    }

    const inputBusqueda = document.getElementById('input-busqueda')
    inputBusqueda.addEventListener("input", () => {
        const terminoBusqueda = inputBusqueda.value.trim().toLowerCase();
        buscarProductos(terminoBusqueda);
    });
    function buscarProductos(termino) {
        listaProductos.innerHTML = "";
        const productosFiltrados = contenidoDelProducto.filter((producto) => {
            const titulo = producto.title.toLowerCase();
            return titulo.includes(termino);
        });
        const ul = document.createElement("ul");
        productosFiltrados.forEach((producto) => {
            const li = document.createElement("li");
            li.innerHTML = `<product-card title="${producto.title}" price="${producto.price}" description="${producto.description}" category="${producto.category}" image="${producto.image}" rating="${producto.rating.rate}"/>`;
            ul.appendChild(li);
        });
        listaProductos.appendChild(ul);
    }
}