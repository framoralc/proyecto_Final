const API = "http://127.0.0.1:8000/api/platos";
const categoria = new URLSearchParams(window.location.search).get('categoria');

async function cargarPlatos() {
    const r = await fetch(API, { headers: { 'Accept': 'application/json' } });
    const platos = await r.json();

    const contenedor = document.getElementById('contenedorPlatos');

    let disponibles = platos.filter(p => p.disponible);
    if (categoria) disponibles = disponibles.filter(p => p.categoria === categoria);

    if (disponibles.length === 0) {
        contenedor.innerHTML = '<p class="text-center">No hay platos disponibles.</p>';
        return;
    }

    contenedor.innerHTML = disponibles.map(p => `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100">
            <img src="../imagenes/${p.imagen_url || 'beemo.jpg'}"    
            <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="text-muted small">${p.categoria || ''}</p>
                    <p class="card-text">${p.descripcion || ''}</p>
                    <p class="fw-bold mt-auto">${parseFloat(p.precio).toFixed(2)} €</p>
                    <button class="btn btn-success" onclick="añadirAlCarrito(${p.id}, '${p.nombre}', ${p.precio})">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function añadirAlCarrito(nombre) {
    alert(`"${nombre}" añadido al carrito`);
}

cargarPlatos();