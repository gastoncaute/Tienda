export function setUpProductos() {
    const btnAbrirLista = document.getElementById("btn-lista-productos")
    btnAbrirLista.addEventListener("click", () => {
        window.location.href="./productos/productos.html"
    })
    class UserCard extends HTMLElement {
        constructor() {
            super()
            this.title = this.getAttribute("title") ?? "Articulo desconocido"
            this.price = this.getAttribute("precie") ?? "Precio desconocido"
            const html = `
                <li>
                    <p>Nombre: ${this.title}<p/>
                    <p>Precio: ${this.price}<p/>
                    <p>Descripcion: ${this.description}<p/>
                    <p>Categoria: ${this.category}<p/>
                    <p>Imagen: ${this.image}<p/>
                    <p>Valoracion: ${this.rate}<p/>
                <li/>
            `
            this.insertAdjacentHTML("beforeend", UserCard)
        }
    }
    async function obetenerProductos() {
    const res = fetch(`https://fakestoreapi.com/products/category/electronics`)
    const datos = await res.json() 
    return datos
    }
    const listaDeProductos = document.getElementById("lista-productos")
    obetenerProductos()
    .then((productos) =>{
        productos.foreach((producto) => {
            const itemProducto = document.createElement("li")
            itemProducto.innerHTML = `<productcard nombre="${producto.title}"/>` 
            listaDeProductos.appendChild(itemProducto)
        })
    })
}