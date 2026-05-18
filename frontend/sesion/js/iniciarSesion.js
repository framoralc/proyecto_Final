import config from "../../config/config.json" with { type: "json" };

const url = config.apiURL;
const web = config.URLWeb;

let formulario = document.querySelector("form");

async function iniciar(nombre, password) {

    let usuario = {
        nombre: nombre,
        password: password
    }

    try {
        debugger;

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(usuario)
        }

        const respuesta = await fetch(`${url}/iniciarSesion`, options)
        const data = await respuesta.json()

        console.log(data)

        if (!respuesta.ok) {
            throw new Error("No se ha podido enviar. " + JSON.stringify(data))
        }

        sessionStorage.setItem('user_rol', data.rol)
        sessionStorage.setItem('user_name', data.usuario)
        sessionStorage.setItem('user_direccion', data.direccion)
        sessionStorage.setItem('user_email', data.email)
        sessionStorage.setItem('user_id', data.id)
        window.location.href = `${web}/index.php`;

    } catch(err) {
        console.error(err)
    }
}

formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    let nombre = formulario.elements["nombre"];
    let password = formulario.elements["passw"];

    if(nombre.value != null || password.value != null){
        iniciar(nombre.value, password.value);
    } else {
        nombre.classList.add("is-invalid");
        password.classList.add("is-invalid");
    }
})