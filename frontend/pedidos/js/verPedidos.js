import config from "../../config/config.json" with { type: "json" };

const url = config.apiURL;
const web = config.URLWeb;

const limite = 10;

let pedidos = [];
let paginaActual = 1;
let pedidoSeleccionadoId = null;
let modalPedido;

async function init() {
    const rol = sessionStorage.getItem('user_rol');
    if (rol !== 'admin' && rol !== 'cocinero' && rol !== 'repartidor') {
        window.location.href = `${web}/index.php`;
        return;
    }

    modalPedido = bootstrap.Modal.getOrCreateInstance(document.getElementById('modalPedido'));

    pedidos = await cargarPedidos();

    renderTabla();
    renderPaginacion();

    document.getElementById('btnGuardarEstado').addEventListener('click', guardarEstado);
}

async function cargarPedidos() {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        const respuesta = await fetch(`${url}/pedido`, options);

        if (!respuesta.ok) throw new Error("Error al cargar pedidos");

        const data = await respuesta.json();
        return data.pedidos;
    } catch (err) {
        console.error(err);
    }
}

async function cargarPlato(id) {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        const response = await fetch(`${url}/platos/${id}`, options);

        if (!response.ok) throw new Error("Error al cargar plato");

        const resultado = await response.json();
        return resultado;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

async function cargarUsuario(id) {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(`${url}/usuario/${id}`, options);

        const resultado = await response.json();

        return resultado;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

async function renderTabla() {
    const tbody = document.getElementById('tablaPedidos');
    tbody.innerHTML = '';

    const inicio = (paginaActual - 1) * limite;
    const fin = inicio + limite;
    const pedidosPagina = pedidos.slice(inicio, fin);

    if (pedidosPagina.length === 0) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = 5;
        td.classList.add('text-center');
        td.textContent = 'No hay pedidos';
        tr.appendChild(td);
        tbody.appendChild(tr);
        return;
    }

    for (const pedido of pedidosPagina) {
        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = pedido.id;

        const usuario = await cargarUsuario(pedido.idUsuario)

        const tdUsuario = document.createElement('td');
        tdUsuario.textContent = usuario.nombre;

        const tdEstado = document.createElement('td');
        const badge = document.createElement('span');

        switch (pedido.estado) {
            case 'pendiente':
                badge.className = 'bg-warning text-dark';
                break;
            case 'en preparacion':
                badge.className = 'bg-info text-dark';
                break;
            case 'en camino':
                badge.className = 'bg-primary';
                break;
            case 'realizado':
                badge.className = 'bg-success';
                break;
            default:
                badge.className = 'bg-secondary';
                break;
        }

        badge.textContent = pedido.estado;
        tdEstado.appendChild(badge);

        const tdTotal = document.createElement('td');
        tdTotal.textContent = parseFloat(pedido.total).toFixed(2) + ' €';

        const tdAcciones = document.createElement('td');
        const btn = document.createElement('button');
        btn.className = 'btn btn-sm btn-primary';
        btn.textContent = 'Ver detalle';
        btn.addEventListener('click', () => abrirDetalle(pedido.id));
        tdAcciones.appendChild(btn);

        tr.appendChild(tdId);
        tr.appendChild(tdUsuario);
        tr.appendChild(tdEstado);
        tr.appendChild(tdTotal);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
}

function renderPaginacion() {
    const totalPaginas = Math.ceil(pedidos.length / limite);
    const ul = document.getElementById('paginacion');
    ul.innerHTML = '';
    if (totalPaginas <= 1) return;

    for (let i = 1; i <= totalPaginas; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        if (i == paginaActual) {
            li.classList.add('active')
        };

        const a = document.createElement('a');
        a.classList.add('page-link');
        a.textContent = i;
        a.addEventListener('click', (event) => {
            event.preventDefault();
            cambiarPagina(i);
        });

        li.appendChild(a);
        ul.appendChild(li);
    }
}

function cambiarPagina(pagina) {
    const totalPaginas = Math.ceil(pedidos.length / limite);
    if (pagina < 1 || pagina > totalPaginas) return;
    paginaActual = pagina;
    renderTabla();
    renderPaginacion();
}

async function abrirDetalle(id) {
    const tabla = document.getElementById('tablaLineas');

    pedidoSeleccionadoId = id;
    const pedido = pedidos.find(p => p.id === id);

    document.getElementById('tituloModal').textContent = `Pedido #${id}`;
    document.getElementById('estadoPedido').value = pedido.estado;
    tabla.innerHTML = '<tr><td colspan="3" class="text-center">Cargando...</td></tr>';

    modalPedido.show();

    try {
        const respLineas = await fetch(`${url}/lineaPedido/${id}`, {
            headers: { 'Accept': 'application/json' }
        });

        if (!respLineas.ok) throw new Error("Error al cargar líneas");

        const dataLineas = await respLineas.json();
        const lineas = dataLineas.lineaPedido;

        tabla.innerHTML = '';

        for (const linea of lineas) {
            const plato = await cargarPlato(linea.idPlato);

            const tr = document.createElement('tr');

            const tdPlato = document.createElement('td');
            tdPlato.textContent = plato ? plato.nombre : linea.idPlato;

            const tdCantidad = document.createElement('td');
            tdCantidad.textContent = linea.cantidad;

            const tdPrecio = document.createElement('td');
            tdPrecio.textContent = linea.precio_unitario
                ? parseFloat(linea.precio_unitario).toFixed(2) + ' €'
                : '-';

            tr.appendChild(tdPlato);
            tr.appendChild(tdCantidad);
            tr.appendChild(tdPrecio);
            tabla.appendChild(tr);
        }

    } catch (err) {
        console.error(err);
    }
}

async function guardarEstado() {
    const nuevoEstado = document.getElementById('estadoPedido').value;

    try {
        const respuesta = await fetch(`${url}/pedido/${pedidoSeleccionadoId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ estado: nuevoEstado })
        });

        if (!respuesta.ok) throw new Error("Error al actualizar el estado");

        const pedido = pedidos.find(p => p.id === pedidoSeleccionadoId);
        if (pedido) pedido.estado = nuevoEstado;

        renderTabla();
        modalPedido.hide();

    } catch (err) {
        console.error(err);
    }
}

init();