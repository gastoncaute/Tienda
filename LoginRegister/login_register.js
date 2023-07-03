// Movimiento de los formularios
{
    const containerLoginRegister = document.querySelector(".container_login_register")
    const formLogin = document.querySelector(".form_login")
    const formRegister = document.querySelector(".form_register")
    const boxTraseraLogin = document.querySelector(".box_trasera_login")
    const boxTraseraRegister = document.querySelector(".box_trasera_register")
    const btnLogin = document.getElementById("btn-login")
    const btnRegister = document.getElementById("btn-register")

    function widthPage() {
        if(window.innerWidth > 850) {
            boxTraseraLogin.style.display = "block";
            boxTraseraRegister.style.display = "block";
        } else {
            boxTraseraRegister.style.display = "block";
            boxTraseraRegister.style.opacity = "1";
            boxTraseraLogin.style.display = "none";
            formLogin.style.display = "block";
            formRegister.style.display = "none";
            containerLoginRegister.style.left = "0px"
        }
    }

    function login () {
        if(window.innerWidth > 850){
            formRegister.style.display = "none";
            containerLoginRegister.style.left = "10px";
            formLogin.style.display = "block";
            boxTraseraRegister.style.opacity = "1";
            boxTraseraLogin.style.opacity = "0";
        } else {
            formRegister.style.display = "none";
            containerLoginRegister.style.left = "0px";
            formLogin.style.display = "block";
            boxTraseraRegister.style.display = "block";
            boxTraseraLogin.style.display = "none";
        }
    }
    btnLogin.addEventListener("click", login)

    function register () {
        if(window.innerWidth > 850){
            formRegister.style.display = "block";
            containerLoginRegister.style.left = "410px";
            formLogin.style.display = "none";
            boxTraseraRegister.style.opacity = "0";
            boxTraseraLogin.style.opacity = "1";
        } else {
            formRegister.style.display = "block";
            containerLoginRegister.style.left = "0px";
            formLogin.style.display = "none";
            boxTraseraRegister.style.display = "none";
            boxTraseraLogin.style.display = "block";
            boxTraseraLogin.style.opacity = "1";
        }
        
    }
    btnRegister.addEventListener("click", register)
    window.addEventListener("resize", widthPage)
    widthPage()
}
// Funcionalidad de los formularios
{

const formularioDeRegistro = document.getElementById("form-register")
const usernameInput = document.getElementById("username-input")
const passwordInput = document.getElementById("password-input")
const fullnameInput = document.getElementById("fullname-input")
const emailInput = document.getElementById("email-input")

const formularioDeLogin = document.getElementById("form-login")
const loginIdentifier = document.getElementById("login-identifier-input")
const loginPassword = document.getElementById("login-password-input")

const alertsLogin = document.getElementById('alerts_1')
const alertsRegister = document.getElementById('alerts_2')

async function llamarUsuarios() {
  const res = await fetch("http://localhost:3000/usuarios")
  let datos = await res.json()
  return datos
} 

async function subirDatosADB(usuario) {
  const res = await fetch("http://localhost:3000/registrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(usuario)
  })
  const datos = await res.json()
  return datos
}

async function iniciarSesion(identifier, password) {
  const res = await fetch("http://localhost:3000/iniciar-sesion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ identifier, password})
  })
  const datos = await res.json()
  return datos
}

formularioDeRegistro.addEventListener("submit", async (evento) => {
  evento.preventDefault()
  const usuario = {
    username: usernameInput.value,
    password: passwordInput.value,
    fullname: fullnameInput.value,
    email: emailInput.value
  }
  const usuariosSubidos = await llamarUsuarios()
  if(usernameInput.value == '' || passwordInput.value == '' || fullnameInput.value == '' || emailInput.value == ''){
    const agregarDatos = document.createElement('div')
    agregarDatos.className = 'agregarDatosRegister'
    const pAgregarDatos = document.createTextNode('Por favor, completar todos los datos')
    alertsRegister.appendChild(agregarDatos)
    agregarDatos.appendChild(pAgregarDatos)
    setTimeout(() => {
      alertsRegister.removeChild(agregarDatos)
    }, 3000);
  } else {
    const usuarioExistente = usuariosSubidos.some((user) => user.email === usuario.email && user.username === usuario.username);
    if (usuarioExistente) {
      const elUsuarioExiste = document.createElement('div')
      elUsuarioExiste.className = 'elUsuarioExiste'
      const pElUsuarioExiste = document.createTextNode('El Usuario o Correo Electrónico ingresado ya existe')
      alertsRegister.appendChild(elUsuarioExiste)
      elUsuarioExiste.appendChild(pElUsuarioExiste)
      setTimeout(() => {
        alertsRegister.removeChild(elUsuarioExiste)
      }, 3000);
    } else {
    const usuarioSubido = await subirDatosADB(usuario)
    if(usuarioSubido) {
      const usuarioAgregado = document.createElement('div')
      usuarioAgregado.className = 'usuarioAgregado'
      const pUsuarioAgregado = document.createTextNode('Usuario registrado exitosamente')
      alertsRegister.appendChild(usuarioAgregado)
      usuarioAgregado.appendChild(pUsuarioAgregado)
      setTimeout(() => {
        alertsRegister.removeChild(usuarioAgregado)
      }, 3000);
    }}
  usernameInput.value = '';
  passwordInput.value = '';
  fullnameInput.value = '';
  emailInput.value = '';

}})

formularioDeLogin.addEventListener("submit", async (evento) => {
  evento.preventDefault()
  if(loginIdentifier.value == '' || loginPassword == '') {
    const agregarDatos = document.createElement('div')
    agregarDatos.className = 'agregarDatosRegister'
    const pAgregarDatos = document.createTextNode('Por favor, completar todos los datos')
    alertsLogin.appendChild(agregarDatos)
    agregarDatos.appendChild(pAgregarDatos)
    setTimeout(() => {
        alertsLogin.removeChild(agregarDatos)
    }, 3000);
    return
  }
  const usuarioEsValido = await iniciarSesion(loginIdentifier.value, loginPassword.value)
  if(usuarioEsValido.messsage) {
    const agregarDatos = document.createElement('div')
    agregarDatos.className = 'agregarDatosRegister'
    const pAgregarDatos = document.createTextNode('Contraseña o Mail incorrectos')
    alertsLogin.appendChild(agregarDatos)
    agregarDatos.appendChild(pAgregarDatos)
    setTimeout(() => {
        alertsLogin.removeChild(agregarDatos)
    }, 3000);
    return
  }
  if(usuarioEsValido.username) {
    window.location.href = "../Pagina_principal/Pagina_principal.html";
    localStorage.setItem("datos-de-usuario", JSON.stringify(usuarioEsValido))
  }
  loginIdentifier.value = '';
  loginPassword.value = '';
})
}