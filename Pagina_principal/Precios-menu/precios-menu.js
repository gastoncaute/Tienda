export function setupPrecios() {
    const btnPrecios = document.getElementById('btn-precios');
    const preciosMenu = document.getElementById('precios-menu')
    const categoriasMenu = document.getElementById('categorias-menu')
    btnPrecios.addEventListener("click", () => {
        preciosMenu.classList.toggle('toggle')
        categoriasMenu.classList.remove('toggle')
    })
}