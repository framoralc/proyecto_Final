import config from "../config/config.json" with { type: "json" };

const url = config.apiURL;
const web = config.URLWeb;

const categoria = new URLSearchParams(window.location.search).get('categoria');

let userID = sessionStorage.getItem("user_id");

async function cargarPlatos() {
    const r = await fetch(`${url}/platos`, { headers: { 'Accept': 'application/json' } });
    const platos = await r.json();

    const contenedor = document.getElementById('contenedorPlatos');

    let noTieneCuenta = userID === null || userID === undefined;

    let disponibles = platos.filter(p => p.disponible);
    if (categoria) disponibles = disponibles.filter(p => p.categoria === categoria);

    if (disponibles.length === 0) {
        contenedor.innerHTML = '<p class="text-center">No hay platos disponibles.</p>';
        return;
    }

    contenedor.innerHTML = disponibles.map(p => `
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100">
            <img src="${p.imagen_url}" class="card-img-top" alt="${p.nombre}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${p.nombre}</h5>
                <p class="text-muted small">${p.categoria || ''}</p>
                <p class="card-text">${p.descripcion || ''}</p>
                <p class="fw-bold mt-auto">${parseFloat(p.precio).toFixed(2)} €</p>
                <div class="form-floating">
                    <input type="number" class="form-control" id="cantidad-${p.id}" name="cantidad" placeholder="cantidad" min="1">
                    <label for="cantidad-${p.id}" class="form-label">Cantidad:</label>
                </div>
                <br>
                <button ${noTieneCuenta ? 'disabled' : ''} class="btn btn-success" onclick="añadirAlCarrito(${p.id}, document.getElementById('cantidad-${p.id}'))">
                Añadir al carrito
                </button>
            </div>
        </div>
    </div>
`).join('');
}

async function añadirAlCarrito(id, inputCantidad) {
    let formCantidad = document.getElementById("formCantidad");

    const cantidad = inputCantidad.value;

    console.log(cantidad);

    if (!cantidad || cantidad < 1) {
        alert("Por favor, introduce una cantidad válida.");
        return;
    }

    try {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                    idUsuario: userID,
                    cantidad: cantidad,
                    idPlato: id
                })
        }

        const response = await fetch(`${url}/carrito`, options);

        if (!response.ok) {
            const error = await response.json();
            throw new Error("Error al añadir al carrito: " + JSON.stringify(error));
        }
    }
    catch (err) {
        console.error(err);
    }
}

window.añadirAlCarrito = añadirAlCarrito;

cargarPlatos();