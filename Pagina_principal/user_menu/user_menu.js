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
}