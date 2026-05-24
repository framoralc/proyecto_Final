import config from "../../config/config.json" with { type: "json" };

const url = config.apiURL;

let listaCarrito = document.getElementById("listaCarrito");

let btnCrearPedido = document.getElementById("btnCrearPedido");

let precio = 0;
let idUser;
let direccion;
let carrito;

async function init() {
    idUser = sessionStorage.getItem("user_id")
    carrito = await CargarCarrito(idUser);
    await CargarPlatos(carrito);

    direccion = sessionStorage.getItem("user_puertaEntrega");
}

init();

async function CargarCarrito(idUser) {

    try {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const response = await fetch(`${url}/recogerCarrito/${idUser}`, options)

        const result = await response.json();

        return result;
    }
    catch (err) {
        console.error(err);
        return [];
    }
}

async function CargarPlatos(carrito) {

    listaCarrito.innerHTML = '';
    precio = 0;

    const template = document.getElementById("ContentPlato");

    for (const elementoCarrito of carrito) {

        const plato = await CargarPlato(elementoCarrito.idPlato);

        const contentPlato = template.content.cloneNode(true);

        contentPlato.querySelector(".nombrePlato").textContent = plato.nombre;
        contentPlato.querySelector(".precioPlato").textContent = plato.precio + "€";
        contentPlato.querySelector(".cantidadPlato").textContent = elementoCarrito.cantidad;

        contentPlato.querySelector("button").addEventListener("click", () => {
            EliminarDelCarrito(elementoCarrito.id);
        });

        listaCarrito.append(contentPlato);

        CalcularPrecio(plato.precio);
    }
}

async function CargarPlato(plato) {

    try {

        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const response = await fetch(`${url}/platos/${plato}`, options);

        const result = await response.json();

        return result;
    }
    catch (err) {
        console.error(err);
        return null;
    }

}

function CalcularPrecio(precioPlato) {

    precio += parseFloat(precioPlato);

    let precioTotal = document.getElementById("precioTotal");

    precioTotal.innerHTML = "";

    precioTotal.textContent = "Total: " + precio + "€";

}

async function EliminarDelCarrito(id) {

    try {
        const options = {
            method: "DELETE"
        };

        await fetch(`${url}/carrito/${id}`, options);

        carrito = await CargarCarrito(idUser);
        await CargarPlatos(carrito);
    }
    catch (err) {
        console.error(err);
    }
}

async function crearPedido() {

    try {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                idUsuario: idUser,
                estado: "pendiente",
                total: precio,
                carrito: carrito
            })
        }

        const response = await fetch(`${url}/pedido`, options);
        const data = await response.json();
    }
    catch (err) {
        console.error(err);
    }
}

btnCrearPedido.addEventListener('click', async () => {

    let sinDireccion = document.getElementById("sinDireccion");

    if (!direccion || direccion === "null") {
        sinDireccion.classList.add("d-block");
        sinDireccion.classList.remove("d-none");
    }
    else {
        sinDireccion.classList.add("d-none");
        sinDireccion.classList.remove("d-block");

        await crearPedido();
    }
})