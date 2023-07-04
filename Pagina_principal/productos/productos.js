class ProductCard extends HTMLElement {
    constructor() {
        super()
        this.title = this.getAttribute("title") ?? "Articulo desconocido"
        this.price = this.getAttribute("precie") ?? "Precio desconocido"
        this.description = this.getAttribute("description") ?? "Descripcion desconocida"
        this.category = this.getAttribute("category") ?? "Categoria desconocida"
        this.image = this.getAttribute("image") ?? "Imagen desconocida"
        this.rate = this.getAttribute("rate") ?? "Valoracion desconocida"
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
        this.insertAdjacentHTML("beforeend", ProductCard)
    }
}
async function obtenerProductos() {
    const listaProductos = document.getElementById('lista-productos');
    fetch(`https://fakestoreapi.com/products/category/electronics`)
    .then(response => response.json())
    .then(data => {
    listaProductos.innerHTML = JSON.stringify(data);
})}
const listaDeProductos = document.getElementById("lista-productos")
obtenerProductos()
.then((productos) =>{
    productos.forEach((producto) => {
        const itemProducto = document.createElement("li")
        itemProducto.innerHTML = `<ProductCard nombre="${producto.title}" price="${producto.price}" descripcion="${producto.description}" categoria="${producto.category}" imagen="${producto.image}" rate="${producto.rate}"/>` 
        listaDeProductos.appendChild(itemProducto)
    })
})