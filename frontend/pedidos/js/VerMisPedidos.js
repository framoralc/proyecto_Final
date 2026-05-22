import config from "../../config/config.json" with { type: "json" };

const url = config.apiURL;
const web = config.URLWeb;

let idUser;

let rol = sessionStorage.getItem("user_rol");

async function init() {

    idUser = sessionStorage.getItem('user_id');

    if (idUser != null) {

        let pedidos = await recogerPedidos();

        if (pedidos) {
            cargarListas(pedidos);
        }
    }
    else {
        window.location.href = `${web}/index.php`;
    }

}

async function recogerPedidos() {
    try {
        const response = await fetch(`${url}/pedido/${idUser}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const respuesta = await response.json();

        return respuesta.pedidos;
    }
    catch (err) {
        console.error('Error al recoger los pedidos:', err);
    }
}

async function recogerLineasPedido(idPedido) {
    try {

        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const response = await fetch(`${url}/lineaPedido/${idPedido}`, options);

        const respuesta = await response.json();

        return respuesta.lineaPedido;
    }
    catch (err) {
        console.error('Error al recoger las líneas del pedido:', err);
    }
}

async function recogerPlato(idPlato) {
    try {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const response = await fetch(`${url}/platos/${idPlato}`)

        const respuesta = await response.json();
        return respuesta;
    }
    catch (err) {
        console.error(err);
    }
}

function cargarListas(pedidos) {
    debugger;

    const template = document.getElementById("ContentPedido");
    const tbody = document.getElementById("listaPedidos");

    tbody.innerHTML = '';

    pedidos.forEach(pedido => {
        const contentPedido = template.content.cloneNode(true);

        contentPedido.querySelector('.numeroPedido').textContent = pedido.id;
        contentPedido.querySelector('.estadoPedido').textContent = pedido.estado;
        contentPedido.querySelector('.totalPedido').textContent = `${parseFloat(pedido.total).toFixed(2)} €`;

        const btnVerLineas = contentPedido.querySelector('.btn-ver-lineas');
        btnVerLineas.addEventListener('click', () => abrirModalLineas(pedido.id));

        tbody.appendChild(contentPedido);
    });
}

async function abrirModalLineas(idPedido) {

    const lineas = await recogerLineasPedido(idPedido);

    const templateLinea = document.getElementById("ContentLineaPedido");
    const tbodyLineas = document.getElementById("listaLineasPedido");

    tbodyLineas.innerHTML = '';

    if (lineas && lineas.length > 0) {
        for (const linea of lineas) {
            const contentLinea = templateLinea.content.cloneNode(true);

            console.log(linea)

            const plato = await recogerPlato(linea.idPlato);

            console.log(plato)

            contentLinea.querySelector('.nombrePlato').textContent = plato.nombre;
            contentLinea.querySelector('.cantidadPlato').textContent = linea.cantidad;

            tbodyLineas.appendChild(contentLinea);
        };
    } else {
        tbodyLineas.innerHTML = '<tr><td colspan="2" class="text-center">No hay productos en este pedido.</td></tr>';
    }

    document.getElementById('modalLineaPedidoLabel').textContent = `Detalle del pedido #${idPedido}`;

    const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('modalLineaPedido'));
    modal.show();
}

init();