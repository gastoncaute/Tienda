export function setupUser() {
    const btnUser = document.getElementById('user-btn');
    const userMenu = document.getElementById('user-menu');
    btnUser.addEventListener("click", () => {
        userMenu.classList.toggle('toggle');
    })
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            userMenu.classList.remove('toggle');
        }
    })
    const datosDeUsuario = localStorage.getItem("datos-de-usuario");
    if (datosDeUsuario) {
        const usuario = JSON.parse(datosDeUsuario);
        const nombreUsuario = usuario.completeName;
        const usernameUsuario = usuario.username
        const emailUsuario = usuario.email;
        const nombreUsuarioElement = document.getElementById("user-menu-fullname");
        const usernameUsuarioElemnt = document.getElementById("user-menu-username")
        const emailUsuarioElement = document.getElementById("user-menu-email");
        nombreUsuarioElement.textContent = nombreUsuario;
        usernameUsuarioElemnt.textContent = usernameUsuario;
        emailUsuarioElement.textContent = emailUsuario;
    }

}