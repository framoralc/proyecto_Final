import config from "../../config/config.json" with { type: "json" };

const url = config.apiURL;
const web = config.URLWeb;

let nombre = sessionStorage.getItem("user_name");
let rol = sessionStorage.getItem("user_rol");

let titulo = document.getElementById("titulo");

let usuarioCount = document.getElementById("usuarioCount");
let empleadoCount = document.getElementById("empleadoCount");
let pedidoCount = document.getElementById("pedidoCount");
let platoCount = document.getElementById("platoCount");

let CocineroPedidoCount = document.getElementById("CocineroPedidoCount");
let CocineroPlatoCount = document.getElementById("CocineroPlatoCount");

let RepartidorPedidoCount = document.getElementById("RepartidorPedidoCount");

let adminPanel = document.getElementById("AdminPanel");
let CocineroPanel = document.getElementById("CocineroPanel");
let RepartidorPanel = document.getElementById("RepartidorPanel");
let UsuarioPanel = document.getElementById("UsuarioPanel");

document.addEventListener("DOMContentLoaded", () => {
    init();
});

async function contarUsuarios(rol) {
    try {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

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
        };

        const respuesta = await fetch(`${url}/contarPedidos`, options);
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
        };

        const respuesta = await fetch(`${url}/contarPlatos`, options);
        const resultado = await respuesta.json();

        return resultado.count;
    }
    catch (err) {
        console.error(err);
    }
}

function ocultarPaneles() {
    adminPanel.classList.remove("d-flex");
    adminPanel.classList.add("d-none");

    CocineroPanel.classList.remove("d-flex");
    CocineroPanel.classList.add("d-none");

    RepartidorPanel.classList.remove("d-flex");
    RepartidorPanel.classList.add("d-none");

    UsuarioPanel.classList.remove("d-flex");
    UsuarioPanel.classList.add("d-none");
}

async function init() {

    console.log(rol);

    ocultarPaneles();

    switch (rol) {
        case "admin": {
            adminPanel.classList.remove("d-none");
            adminPanel.classList.add("d-flex");

            titulo.innerHTML = "Bienvenido " + nombre;

            const usuariosTotales = await contarUsuarios("usuario");
            const empleadosTotales = await contarUsuarios("empleado");
            const platosTotales = await contarPlatos();
            const pedidosTotales = await contarPedidos();

            console.log(usuariosTotales);

            usuarioCount.textContent = usuariosTotales.usuarios;
            empleadoCount.textContent = empleadosTotales.empleados;
            pedidoCount.textContent = pedidosTotales;
            platoCount.textContent = platosTotales;
            break;
        }
        case "cocinero": {
            CocineroPanel.classList.remove("d-none");
            CocineroPanel.classList.add("d-flex");

            titulo.innerHTML = "Bienvenido " + nombre;

            const platosTotales = await contarPlatos();
            const pedidosTotales = await contarPedidos();

            CocineroPedidoCount.textContent = pedidosTotales;
            CocineroPlatoCount.textContent = platosTotales;
            break;
        }
        case "repartidor": {
            RepartidorPanel.classList.remove("d-none");
            RepartidorPanel.classList.add("d-flex");

            titulo.innerHTML = "Bienvenido " + nombre;

            const pedidosTotales = await contarPedidos();

            RepartidorPedidoCount.textContent = pedidosTotales;
            break;
        }
        case "user": {
            UsuarioPanel.classList.remove("d-none");
            UsuarioPanel.classList.add("d-flex");

            titulo.innerHTML = "Bienvenido " + nombre;

            break;
        }
        default: {
            UsuarioPanel.classList.remove("d-none");
            titulo.innerHTML = "Bienvenido";
            break;
        }
    }
}