let rol = sessionStorage.getItem("user_rol") || "";

const url = "http://localhost/";


document.addEventListener('DOMContentLoaded', () => {

    if (!rol) {
        rol = "";
    }

    let nav = document.getElementById("navBar");

    nav.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand" href="${url}index.php">Navbar</a>
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

})

function cargarNavBar() {
    let navDer = document.getElementById("NavDer");
    let navIzq = document.getElementById("NavIzq");

    switch (rol) {
        case "user":
            navDer.innerHTML = `
            <li class='nav-item dropdown'>
                <a class='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Carta
                </a>
                <ul class='dropdown-menu'>
                    <li><a class='dropdown-item' href='#'>Marisco</a></li>
                    <li><a class='dropdown-item' href='#'></a></li>
                    <li><a class='dropdown-item' href='#'>Pasta</a></li>
                </ul>
            </li>
            <li class='nav-item'>
                <a class='nav-link' href='#'>Mis Pedidos</a>
            </li>
            <li class='nav-item'>
                <a class='nav-link' href='#'>Mis Datos</a>
            </li>
            <li class='nav-item'>
                <a class='nav-link disabled' aria-disabled='true'>Disabled</a>
            </li>
            `;
            navIzq.innerHTML = `
            <a class='nav-link' href='#'>Mis Datos</a>
            <a class='nav-link' href'#'>Cerrar Sesión</a>
            `;
            break;
        case "admin":
            navDer.innerHTML = `
            <li class='nav-item'>
                <a class='nav-link' href='#'>Administrar Empleados</a>
            </li>
            <li class='nav-item'>
                <a class='nav-link' href='#'>Administrar Platos</a>
            </li>
            <li class='nav-item'>
                <a class='nav-link' href='#'>Administrar Ingredientes</a>
            </li>
            <li class='nav-item'>
                <a class='nav-link' href='#'>Administrar Horario De los Empleados</a>
            </li>
            `;
            navIzq.innerHTML = `
            <a class='nav-link' href='#'>Mis Datos</a>
            <a class='nav-link' href'#'>Cerrar Sesión</a>
            `;
            break;
        case "repartidor":
            navDer.innerHTML = `
            <li class='nav-item'>
                <a class='nav-link' href='#'>Pedidos</a>
            </li>
            `;
            navIzq.innerHTML = `
            <a class='nav-link' href='#'>Mis Datos</a>
            <a class='nav-link' href'#'>Cerrar Sesión</a>
            `;
            break;
        case "cocinero":
            navDer.innerHTML = `
            <li class='nav-item'>
                <a class='nav-link' href='#'>Administrar Platos</a>
            </li>
            <li class='nav-item'>
                <a class='nav-link' href='#'>Administrar Ingredientes</a>
            </li>
            <li class='nav-item'>
                <a class='nav-link' href='#'>Pedidos</a>
            </li>
            `;
            navIzq.innerHTML = `
            <a class='nav-link' href='#'>Mis Datos</a>
            <a class='nav-link' href'#'>Cerrar Sesión</a>
            `;
            break;
        default:
            navDer.innerHTML = `
            <li class='nav-item dropdown'>
                <a class='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Carta
                </a>
                <ul class='dropdown-menu'>
                    <li><a class='dropdown-item' href='#'>Marisco</a></li>
                    <li><a class='dropdown-item' href='#'></a></li>
                    <li><a class='dropdown-item' href='#'>Pasta</a></li>
                </ul>
            </li>
            `;
            navIzq.innerHTML = `
            <a class='nav-link' href='${url}sesion/registrarse.php'>Registrarse</a>
            <a class='nav-link' href='${url}sesion/iniciarSesion.php'>Iniciar Sesion</a>
            `;
    }

};

function cerrarSesion() {
    sessionStorage.clear();
    window.location.href = url + "index.php";
}