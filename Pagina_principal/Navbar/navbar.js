export function setupNavbar() {
    const burgerButton = document.getElementById('burger-button')
    const navbar = document.getElementById('navbar')
    const closeButton = document.getElementById('close-button')
    const inputBusqueda = document.getElementById('input-busqueda')
    const preciosMenu = document.getElementById('precios-menu')
    const categoriasMenu = document.getElementById('categorias-menu')
    burgerButton.addEventListener("click", () => {
        navbar.style.transform = 'translateX(0%)'
        navbar.style.transition = 'all 1.5s ease'
        burgerButton.style.transform = 'translatey(-130%)'
        burgerButton.style.transition = 'all 1s ease'
        inputBusqueda.style.transform = 'translatey(-130%)'
        inputBusqueda.style.transition = 'all 1s ease'
    })
    closeButton.addEventListener("click", () => {
        navbar.style.transform = 'translateX(-100%)'
        burgerButton.style.transform = 'translatey(0%)'
        burgerButton.style.transition = 'all 1s ease'
        inputBusqueda.style.transform = 'translatey(0%)'
        inputBusqueda.style.transition = 'all 1s ease'
        preciosMenu.classList.remove("toggle")
        categoriasMenu.classList.remove("toggle")
    })
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeButton.click()
        }
    })
}