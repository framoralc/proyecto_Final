import config from "../../config/config.json" with { type: "json" };

const url = config.apiURL;
const web = config.URLWeb;

let formulario = document.querySelector("form");

let rolUsuario = sessionStorage.getItem("user_rol");

async function Registro(username, nombre, apellidos, email, password, rol) {
    let usuario = {
        username: username,
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        password: password,
        rol: rol
    }

    try {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(usuario)
        }

        const respuesta = await fetch(`${url}/registrarUsuario`, options);
        const data = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error("No se ha podido enviar." + data.message);
        } else {
            window.location.href = `${web}/sesion/AdministrarEmpleados.php`;
        }
    } catch (err) {
        console.error("error: " + err);
        let alert = formulario.getElementsByClassName("alert")[0];
        if (alert) {
            alert.style.display = "block";
        }
    }
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    let username = formulario.elements["username"];
    let nombre = formulario.elements["name"];
    let apellidos = formulario.elements["apellidos"];
    let eMail = formulario.elements["eMail"];
    let passwd = formulario.elements["passwd"];
    let repPasswd = formulario.elements["repPasswd"];
    let rol = formulario.elements["selectedRol"];

    if (passwd.value == repPasswd.value) {
        passwd.classList.add("is-valid");
        repPasswd.classList.add("is-valid");
        passwd.classList.remove("is-invalid");
        repPasswd.classList.remove("is-invalid");

        Registro(username.value, nombre.value, apellidos.value, eMail.value, passwd.value, rol.value);
    } else {
        passwd.classList.add("is-invalid");
        repPasswd.classList.add("is-invalid");
        passwd.classList.remove("is-valid");
        repPasswd.classList.remove("is-valid");
    }
});

function init() {
    if (rolUsuario != "admin") {
        window.location.href = `${web}/index.php`;
    }
}

init();