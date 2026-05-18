import config from "../../config/config.json" with { type: "json" };

const url = config.apiURL;
const web = config.URLWeb;

let nombre = sessionStorage.getItem("user_name")
let titulo = document.getElementById("titulo");
let rol = sessionStorage.getItem("user_rol");

let usuarioCount = document.getElementById("usuarioCount");
let empleadoCount = document.getElementById("empleadoCount");
let pedidoCount = document.getElementById("pedidoCount");
let platoCount = document.getElementById("platoCount");

document.addEventListener("DOMContentLoaded", () => {

    init();

})

async function contarUsuarios(rol) {
    try {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const respuesta = await fetch(`${url}/contarUsuarios/${rol}`, options);
        const resultado = await respuesta.json();

        return resultado.count;
    }
    catch (err) {
        console.error(err);
    }
}

async function contarPedidos() {
    try {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const respuesta = await fetch(`${url}/contarPedidos`, options)
        const resultado = await respuesta.json();

        return resultado.count;
    }
    catch (err) {
        console.error(err);
    }
}

async function contarPlatos() {
    try {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const respuesta = await fetch(`${url}/contarPlatos`, options)
        const resultado = await respuesta.json();

        return resultado.count;
    }
    catch (err) {
        console.error(err);
    }
}

async function init() {

    console.log(rol);

    if (rol == "admin") {

        let usuariosTotales = await contarUsuarios("usuario");
        let empleadosTotales = await contarUsuarios("empleado");
        let platosTotales = await contarPlatos();
        let pedidosTotales = await contarPedidos();

        console.log(usuariosTotales);

        usuarioCount.textContent = usuariosTotales.usuarios;
        empleadoCount.textContent = empleadosTotales.empleados;
        pedidoCount.textContent = pedidosTotales;
        platoCount.textContent = platosTotales;
    }
    else {
        if (nombre) {
            titulo.innerHTML = "Bienvenido " + nombre;
        }
        else {
            titulo.innerHTML = "Bienvenido";
        }
    }
}