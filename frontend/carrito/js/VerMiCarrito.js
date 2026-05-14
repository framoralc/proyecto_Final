let listaCarrito = document.getElementById("listaCarrito");

let btnCrearPedido = document.getElementById("btnCrearPedido");

let precio = 0;

let idUser;
let carrito;

async function init() {

    idUser = sessionStorage.getItem("user_id")

    carrito = await CargarCarrito(idUser);

    await CargarPlatos(carrito);

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

        const response = await fetch(`http://127.0.0.1:8000/api/recogerCarrito/${idUser}`, options)

        const result = await response.json();

        console.log(result[0])

        return result[0];
    }
    catch (err) {
        console.error(err);
    }
}

async function CargarPlatos(carrito) {

    let cardPlato = document.createElement("ul");
    cardPlato.classList.add("list-group");
    cardPlato.classList.add("list-group-flush");

    for (const elementoCarrito of carrito) {

        console.log(elementoCarrito.idPlato)

        let plato = await CargarPlato(elementoCarrito.idPlato)
        console.log(plato);

        let cardContentPlato = document.createElement("li");
        cardContentPlato.classList.add("list-group-item");
        cardContentPlato.classList.add("d-flex");

        let contentPlato = document.createElement("p");
        contentPlato.textContent = plato.nombre + " " + plato.precio;

        let opcionesPlato = document.createElement("section");

        cardContentPlato.append(contentPlato);
        cardContentPlato.append(opcionesPlato);

        cardPlato.append(cardContentPlato);
        listaCarrito.append(cardPlato);

        CalcularPrecio(plato.precio)
    }
}

async function CargarPlato(plato) {

    console.log(plato)

    try {

        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const response = await fetch(`http://127.0.0.1:8000/api/cargarPlato/${plato}`, options);

        const result = await response.json();

        console.log(result);

        return result;
    }
    catch (err) {
        console.error(err);
    }

}

function CalcularPrecio(precioPlato) {

    precio += precioPlato;

    let precioTotal = document.getElementById("precioTotal");

    precioTotal.innerHTML = "";

    precioTotal.textContent = "Total: " + precio;

}

async function ObtenerRepartidor() {

    try {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const response = await fetch('http://127.0.0.1:8000/api/seleccionarRepartidor', options)

        const result = await response.json();

        return result;
    }
    catch (err) {
        console.error(err)
    }
}

// btnCrearPedido.addEventListener('click', () => {

//     let repartidor = await ObtenerRepartidor();

    

// })