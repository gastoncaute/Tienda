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