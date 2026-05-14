const API = "http://127.0.0.1:8000/api/ingredientes";
const POR_PAGINA = 8;

let todosLosIngredientes = [];
let paginaActual = 1;
let modalIngrediente;

document.addEventListener('DOMContentLoaded', () => {
    const rol = sessionStorage.getItem('user_rol');
    if (rol !== 'admin' && rol !== 'cocinero') {
        window.location.href = "http://localhost/PROYECTO_FINAL/frontend/index.php";
        return;
    }

    modalIngrediente = new bootstrap.Modal(document.getElementById('modalIngrediente'));
    cargarIngredientes();

    document.getElementById('btnNuevoIngrediente').addEventListener('click', () => {
        document.getElementById('formularioIngrediente').reset();
        document.getElementById('ingredienteId').value = '';
        document.getElementById('tituloModal').innerText = 'Nuevo Ingrediente';
        ocultarAlerta('alertaModal');
        modalIngrediente.show();
    });

    document.getElementById('formularioIngrediente').addEventListener('submit', guardarIngrediente);
});

async function cargarIngredientes() {
    try {
        const respuesta = await fetch(API, { headers: { 'Accept': 'application/json' } });
        todosLosIngredientes = await respuesta.json();
        renderTabla();
        renderPaginacion();
    } catch (err) {
        mostrarAlerta('alertaGlobal', 'Error al cargar los ingredientes', 'danger');
    }
}

function renderTabla() {
    const tbody = document.getElementById('tablaIngredientes');
    const inicio = (paginaActual - 1) * POR_PAGINA;
    const fin = inicio + POR_PAGINA;
    const pagina = todosLosIngredientes.slice(inicio, fin);

    if (pagina.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center">No hay ingredientes</td></tr>';
        return;
    }

    tbody.innerHTML = pagina.map(ing => `
        <tr>
            <td>${ing.id}</td>
            <td>${ing.nombre}</td>
            <td>${parseFloat(ing.stock_actual).toFixed(2)}</td>
            <td>${ing.unidad_medida ?? '-'}</td>
            <td>
                <button class="btn btn-sm btn-warning me-1" onclick="abrirEditar(${ing.id})">Editar</button>
                <button class="btn btn-sm btn-danger" onclick="borrarIngrediente(${ing.id})">Borrar</button>
            </td>
        </tr>
    `).join('');
}

function renderPaginacion() {
    const totalPaginas = Math.ceil(todosLosIngredientes.length / POR_PAGINA);
    const ul = document.getElementById('paginacion');
    if (totalPaginas <= 1) { ul.innerHTML = ''; return; }

    let html = `<li class="page-item ${paginaActual === 1 ? 'disabled' : ''}"><a class="page-link" href="#" onclick="cambiarPagina(${paginaActual - 1})">Anterior</a></li>`;
    for (let i = 1; i <= totalPaginas; i++) {
        html += `<li class="page-item ${i === paginaActual ? 'active' : ''}"><a class="page-link" href="#" onclick="cambiarPagina(${i})">${i}</a></li>`;
    }
    html += `<li class="page-item ${paginaActual === totalPaginas ? 'disabled' : ''}"><a class="page-link" href="#" onclick="cambiarPagina(${paginaActual + 1})">Siguiente</a></li>`;
    ul.innerHTML = html;
}

window.cambiarPagina = function(pagina) {
    const totalPaginas = Math.ceil(todosLosIngredientes.length / POR_PAGINA);
    if (pagina < 1 || pagina > totalPaginas) return;
    paginaActual = pagina;
    renderTabla();
    renderPaginacion();
}

window.abrirEditar = function(id) {
    const ing = todosLosIngredientes.find(i => i.id === id);
    if (!ing) return;

    document.getElementById('ingredienteId').value = ing.id;
    document.getElementById('nombreIngrediente').value = ing.nombre;
    document.getElementById('stockIngrediente').value = ing.stock_actual;
    document.getElementById('unidadIngrediente').value = ing.unidad_medida ?? '';
    document.getElementById('tituloModal').innerText = 'Editar Ingrediente';
    ocultarAlerta('alertaModal');
    modalIngrediente.show();
}

async function guardarIngrediente(evento) {
    evento.preventDefault();

    const id = document.getElementById('ingredienteId').value;
    const datos = {
        nombre: document.getElementById('nombreIngrediente').value.trim(),
        stock_actual: parseFloat(document.getElementById('stockIngrediente').value),
        unidad_medida: document.getElementById('unidadIngrediente').value.trim()
    };

    const metodo = id ? 'PUT' : 'POST';
    const url = id ? `${API}/${id}` : API;

    try {
        const respuesta = await fetch(url, {
            method: metodo,
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(datos)
        });

        if (respuesta.ok) {
            modalIngrediente.hide();
            cargarIngredientes();
        } else {
            const data = await respuesta.json();
            mostrarAlerta('alertaModal', 'Error: ' + JSON.stringify(data), 'danger');
        }
    } catch (err) {
        mostrarAlerta('alertaModal', 'Error de conexión', 'danger');
    }
}

window.borrarIngrediente = async function(id) {
    if (!confirm('¿Seguro que quieres borrar este ingrediente?')) return;
    try {
        const respuesta = await fetch(`${API}/${id}`, { method: 'DELETE', headers: { 'Accept': 'application/json' } });
        if (respuesta.ok) {
            cargarIngredientes();
        } else {
            mostrarAlerta('alertaGlobal', 'Error al borrar el ingrediente', 'danger');
        }
    } catch (err) {
        mostrarAlerta('alertaGlobal', 'Error de conexión', 'danger');
    }
}

function mostrarAlerta(elementoId, mensaje, tipo) {
    const alerta = document.getElementById(elementoId);
    alerta.textContent = mensaje;
    alerta.className = `alert alert-${tipo} mt-3`;
    alerta.classList.remove('d-none');
}

function ocultarAlerta(elementoId) {
    document.getElementById(elementoId).classList.add('d-none');
}