

async function obetenerProductos () {
    const res = fetch(`https://fakestoreapi.com/products/category/electronics`)
    const datos = await res.json() 
    return datos
}

const listaDeProductos = document.getElementById("listadeproductos")
obetenerProductos()
.then( (productos) =>{
    productos.foreach((producto) => {
        const itemProducto= document.createElement("li")
        itemProducto.innerHTML= `<productcard nombre= "${producto.title}"/>` 
        listaDeProductos.appendChild(itemProducto)
    })
})