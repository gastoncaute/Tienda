export function setupCategorias() {
    const btnCategorias = document.getElementById('btn-categorias');
    const categoriasMenu = document.getElementById('categorias-menu')
    const preciosMenu = document.getElementById('precios-menu')
    btnCategorias.addEventListener("click", () => {
        categoriasMenu.classList.toggle('toggle');
        preciosMenu.classList.remove('toggle')
    })
}