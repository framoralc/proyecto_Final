import config from "../config/config.json" with { type: "json" };

const url = config.apiURL;
const web = config.URLWeb;

const API_PLATOS = "http://127.0.0.1:8000/api/platos";
const API_INGREDIENTES = "http://127.0.0.1:8000/api/ingredientes";
const PLATOS_POR_PAGINA = 5;

let todosLosPlatos = [];
let todosLosIngredientes = [];
let paginaActual = 1;
let modalPlato;

document.addEventListener('DOMContentLoaded', async () => {
    const rol = sessionStorage.getItem('user_rol');
    if (rol !== 'admin' && rol !== 'cocinero') {
        window.location.href = `${web}/index.php`;
        return;
    }

    modalPlato = new bootstrap.Modal(document.getElementById('modalPlato'));

    const respIng = await fetch(API_INGREDIENTES, { headers: { 'Accept': 'application/json' } });
    todosLosIngredientes = await respIng.json();

    cargarPlatos();

    document.getElementById('btnNuevoPlato').addEventListener('click', () => {
        document.getElementById('formularioPlato').reset();
        document.getElementById('platoId').value = '';
        document.getElementById('tituloModal').innerText = 'Nuevo Plato';
        renderIngredientesModal([]);
        ocultarAlerta('alertaModal');
        modalPlato.show();
    });

    document.getElementById('formularioPlato').addEventListener('submit', guardarPlato);
});

async function cargarPlatos() {
    try {
        const respuesta = await fetch(API_PLATOS, { headers: { 'Accept': 'application/json' } });
        todosLosPlatos = await respuesta.json();
        renderTabla();
        renderPaginacion();
    } catch (err) {
        mostrarAlerta('alertaGlobal', 'Error al cargar los platos', 'danger');
    }
}

function renderTabla() {
    const tbody = document.getElementById('tablaPlatos');
    const inicio = (paginaActual - 1) * PLATOS_POR_PAGINA;
    const fin = inicio + PLATOS_POR_PAGINA;
    const platosPagina = todosLosPlatos.slice(inicio, fin);

    if (platosPagina.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center">No hay platos</td></tr>';
        return;
    }

    tbody.innerHTML = platosPagina.map(plato => `
        <tr>
            <td>${plato.id}</td>
            <td>${plato.nombre}</td>
            <td>${plato.categoria}</td>
            <td>${plato.descripcion || '-'}</td>
            <td>${parseFloat(plato.precio).toFixed(2)} €</td>
            <td><span class="badge ${plato.disponible ? 'bg-success' : 'bg-danger'}">${plato.disponible ? 'Sí' : 'No'}</span></td>
            <td>
                <button class="btn btn-sm btn-warning me-1" onclick="abrirEditar(${plato.id})">Editar</button>
                <button class="btn btn-sm btn-danger" onclick="borrarPlato(${plato.id})">Borrar</button>
            </td>
        </tr>
    `).join('');
}

function renderPaginacion() {
    const totalPaginas = Math.ceil(todosLosPlatos.length / PLATOS_POR_PAGINA);
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
    const totalPaginas = Math.ceil(todosLosPlatos.length / PLATOS_POR_PAGINA);
    if (pagina < 1 || pagina > totalPaginas) return;
    paginaActual = pagina;
    renderTabla();
    renderPaginacion();
}

function renderIngredientesModal(ingActuales) {
    const contenedor = document.getElementById('listaIngredientesModal');

    if (todosLosIngredientes.length === 0) {
        contenedor.innerHTML = '<p class="text-muted small">No hay ingredientes creados todavía.</p>';
        return;
    }

    contenedor.innerHTML = todosLosIngredientes.map(ing => {
        const actual = ingActuales.find(a => a.id === ing.id);
        const checked = actual ? 'checked' : '';
        const cantidad = actual ? actual.pivot.cantidad_necesaria : 1;

        return `
        <div class="d-flex align-items-center gap-2 mb-2">
            <input type="checkbox" class="form-check-input ing-check" id="ing_${ing.id}" value="${ing.id}" ${checked}>
            <label class="form-check-label flex-grow-1" for="ing_${ing.id}">${ing.nombre} (${ing.unidad_medida ?? '-'})</label>
            <input type="number" class="form-control form-control-sm w-25 ing-cantidad" id="cantidad_${ing.id}"
                min="0.01" step="0.01" value="${cantidad}" style="max-width:80px">
        </div>`;
    }).join('');
}

window.abrirEditar = function(id) {
    const plato = todosLosPlatos.find(p => p.id === id);
    if (!plato) return;

    document.getElementById('platoId').value = plato.id;
    document.getElementById('nombrePlato').value = plato.nombre;
    document.getElementById('categoriaPlato').value = plato.categoria || '';
    document.getElementById('descripcionPlato').value = plato.descripcion || '';
    document.getElementById('precioPlato').value = plato.precio;
    document.getElementById('disponiblePlato').checked = plato.disponible;
    
    let nombreFoto = '';
    if (plato.imagen_url) {
        nombreFoto = plato.imagen_url.replace('http://imagenes.test/', '');  
    }
    document.getElementById('imagenPlato').value = nombreFoto;
    
    document.getElementById('tituloModal').innerText = 'Editar Plato';

    renderIngredientesModal(plato.ingredientes || []);
    ocultarAlerta('alertaModal');
    modalPlato.show();
}

async function guardarPlato(evento) {
    evento.preventDefault();

    const id = document.getElementById('platoId').value;

    const ingredientes = [];
    document.querySelectorAll('.ing-check:checked').forEach(checkbox => {
        const ingId = parseInt(checkbox.value);
        const cantidad = parseFloat(document.getElementById(`cantidad_${ingId}`).value) || 1;
        ingredientes.push({ id: ingId, cantidad_necesaria: cantidad });
    });

    let textoImagen = document.getElementById('imagenPlato').value.trim();
    let rutaFinal = textoImagen ? 'http://localhost/PROYECTO_FINAL/frontend/imagenes/' + textoImagen : null;

    const datos = {
    nombre: document.getElementById('nombrePlato').value.trim(),
    categoria: document.getElementById('categoriaPlato').value,
    descripcion: document.getElementById('descripcionPlato').value.trim(),
    precio: parseFloat(document.getElementById('precioPlato').value),
    disponible: document.getElementById('disponiblePlato').checked,
    imagen_url: 'http://imagenes.test/' + document.getElementById('imagenPlato').value.trim(),
    ingredientes: ingredientes
    };

    const metodo = id ? 'PUT' : 'POST';
    const url = id ? `${API_PLATOS}/${id}` : API_PLATOS;

    try {
        const respuesta = await fetch(url, {
            method: metodo,
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(datos)
        });

        if (respuesta.ok) {
            modalPlato.hide();
            cargarPlatos();
        } else {
            const data = await respuesta.json();
            mostrarAlerta('alertaModal', 'Error: ' + JSON.stringify(data), 'danger');
        }
    } catch (err) {
        mostrarAlerta('alertaModal', 'Error de conexión', 'danger');
    }
}

window.borrarPlato = async function(id) {
    if (!confirm('¿Seguro que quieres borrar este plato?')) return;
    try {
        const respuesta = await fetch(`${API_PLATOS}/${id}`, { method: 'DELETE', headers: { 'Accept': 'application/json' } });
        if (respuesta.ok) {
            cargarPlatos();
        } else {
            mostrarAlerta('alertaGlobal', 'Error al borrar el plato', 'danger');
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