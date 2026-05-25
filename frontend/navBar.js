let rol = sessionStorage.getItem("user_rol") || "";

const url = "http://localhost/";

document.addEventListener('DOMContentLoaded', () => {

    if (!rol) {
        rol = "";
    }

    let nav = document.getElementById("navBar");

    nav.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand" href="${url}index.php">Flashfood</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" id="NavDer">

                </ul>
                <ul class="navbar-nav ms-auto" id="NavIzq">

                </ul>
            </div>
        </div>
    `;

    cargarNavBar();

    let cerrar = document.getElementById("cerrar");

    if(cerrar){
        cerrar.addEventListener('click', cerrarSesion)
    }
})

function cargarNavBar() {
    let navDer = document.getElementById("NavDer");
    let navIzq = document.getElementById("NavIzq");

    switch (rol) {
        case "user":
            navDer.innerHTML = `
            <a class='nav-link' href='${url}escaparate/escaparate.php'>Carta</a>
            `;
            navIzq.innerHTML = `
            <a class='nav-link' href='${url}pedidos/VerMisPedidos.php'>Mis Pedidos</a>
            <a class='nav-link' href='${url}carrito/VerMiCarrito.php'>Carrito</a>
            <a class='nav-link' href='${url}sesion/MisDatos.php'>Mis Datos</a>
            <button class='nav-link' id="cerrar">Cerrar Sesión</button>
            `;
            break;
        case "admin":
            navIzq.innerHTML = `
            <a class='nav-link' href='${url}pedidos/VerMisPedidos.php'>Mis Pedidos</a>
            <a class='nav-link' href='${url}carrito/VerMiCarrito.php'>Carrito</a>
            <a class='nav-link' href='${url}sesion/MisDatos.php'>Mis Datos</a>
            <button class='nav-link' id="cerrar">Cerrar Sesión</button>
            `;
            break;
        case "repartidor":
            navIzq.innerHTML = `
            <a class='nav-link' href='${url}sesion/MisDatos.php'>Mis Datos</a>
            <button class='nav-link' id="cerrar">Cerrar Sesión</button>
            `;
            break;
        case "cocinero":
            navIzq.innerHTML = `
            <a class='nav-link' href='${url}sesion/MisDatos.php'>Mis Datos</a>
            <button class='nav-link' id="cerrar">Cerrar Sesión</button>
            `;
            break;
        default:
            navDer.innerHTML = `
            <a class='nav-link' href='${url}escaparate/escaparate.php'>Carta</a>
            `;
            navIzq.innerHTML = `
            <a class='nav-link' href='${url}sesion/registrarse.php'>Registrarse</a>
            <a class='nav-link' href='${url}sesion/iniciarSesion.php'>Iniciar Sesion</a>
            `;
    }
    
    cargarCategorias();
};

async function cargarCategorias() {
    const r = await fetch("http://127.0.0.1:8000/api/platos");
    const platos = await r.json();

    const categorias = [...new Set(platos.map(p => p.categoria).filter(c => c))];
    const menus = document.querySelectorAll(".dropdown-menu");

    menus.forEach(menu => {
        menu.innerHTML = categorias.map(c => `
            <li><a class="dropdown-item" href="${url}escaparate/escaparate.php?categoria=${c}">${c}</a></li>
        `).join('');
    });
}
function cerrarSesion() {
    sessionStorage.clear();
    window.location.href = url + "index.php";
}