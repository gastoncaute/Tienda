export function setupPrecios() {
    const btnPrecios = document.getElementById('btn-precios');
    const preciosMenu = document.getElementById('precios-menu')
    const categoriasMenu = document.getElementById('categorias-menu')
    btnPrecios.addEventListener("click", () => {
        preciosMenu.classList.toggle('toggle')
        categoriasMenu.classList.remove('toggle')
    })

    const btnPrecioMayor = document.getElementById('btn-precio-mayor')
    const btnPrecioMenor = document.getElementById('btn-precio-menor')

    let listaDeProductos = [
    { nombre: "Producto 1", precio: 10 },
    { nombre: "Producto 2", precio: 5 },
    { nombre: "Producto 3", precio: 8 },
    { nombre: "Producto 4", precio: 3 },
    { nombre: "Producto 5", precio: 12 }
    ]

    btnPrecioMayor.addEventListener("click", () => {
        // Ordenar de mayor a menor
        const preciosOrdenados = listaDeProductos.sort((a, b) => b.precio - a.precio)
        console.log(preciosOrdenados)
    })
    btnPrecioMenor.addEventListener("click", () => {
        // Ordenar de menor a mayor
        const preciosOrdenados = listaDeProductos.sort((a, b) => a.precio - b.precio)
        console.log(preciosOrdenados)
    })
}