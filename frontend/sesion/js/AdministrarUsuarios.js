import config from "../../config/config.json" with { type: "json" };

const url = config.apiURL;

async function ContadorUsuarios() {

    try {

        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const respuesta = await fetch(`${url}/contarUsuarios`, options);

        const resultado = await respuesta.json();

        console.log(resultado.count)

        return resultado.count;

    }
    catch (err) {
        console.error(err);
    }
}


async function recogerDatos(config) {

    try {

        const options = {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(config)
        };

        const respuesta = await fetch(`${url}/mostrarUsuarios`, options)

        const resultado = await respuesta.json();

        console.log(resultado);

        return resultado;

    }
    catch (err) {
        console.error(err);
    }
}

async function deleteUsuario(id) {

    const options = {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    await fetch(`${url}/eliminarUsuario/${id}`, options);
}

async function TotalUsuarios() {

    let usuariosTotal = await ContadorUsuarios();

    console.log(usuariosTotal);

    return usuariosTotal.usuarios;

}

function CargarInformacionAlFormulario(usuario){

    let formEditRol = document.getElementById("formEditRol");
    let usuarioSeleccionado = document.getElementById("userText");

    formEditRol.elements["rol"].value = usuario.rol;
    usuarioSeleccionado.textContent = "Usuario: " + usuario.nombre;

}

// Sirve para crear una tabla

async function mostrarLista(config) {
    debugger;

    let datosUsuarios = await recogerDatos(config);
    let tablaUsuarios = document.getElementById("informacionUsuarios");

    tablaUsuarios.innerHTML = "";

    datosUsuarios.usuarios.forEach((usuario) => {

        let tablaUsuario = document.getElementById("tablaUsuario").content.cloneNode(true);

        let usuarioId = tablaUsuario.querySelector("#id");
        usuarioId.textContent = usuario.id

        let usuarioNombre = tablaUsuario.querySelector("#nombre");
        usuarioNombre.textContent = usuario.nombre;

        let usuarioEmail = tablaUsuario.querySelector("#email");
        usuarioEmail.textContent = usuario.email;

        let usuarioRol = tablaUsuario.querySelector("#rol");
        usuarioRol.textContent = usuario.rol;

        let usuarioDireccion = tablaUsuario.querySelector("#direccion");
        usuarioDireccion.textContent = usuario.direccion;

        let btnDelete = tablaUsuario.querySelector("#eliminar");
        btnDelete.addEventListener('click', async function () {
            await deleteUsuario(usuario.id);
        })

        let btnEditar = tablaUsuario.querySelector("#editar");
        btnEditar.id = "edit" + usuario.id;
        btnEditar.addEventListener('click', () => {
            CargarInformacionAlFormulario(usuario);
        })

        tablaUsuarios.append(tablaUsuario);
    });
}

// Sirve para crear los botones para ir a otras páginas

let formFiltro = document.getElementById("formFiltro");

async function paginacion(limit, cantidadUsuariosTotales) {

    debugger;

    let paginas = document.getElementById("paginas");
    let filtroLimite = formFiltro.elements["limit"].value;
    let rol = ['user'];

    let count = cantidadUsuariosTotales;
    let pagina = 1;
    let offset = 0;

    do {
        let pageLi = document.createElement("li");
        pageLi.classList.add("page-item");
        pageLi.id = pagina;

        let pageButton = document.createElement("button")
        pageButton.classList.add("page-link");
        pageButton.textContent = pagina;
        pageButton.id = offset;
        pageButton.addEventListener('click', (event) => {
            debugger;
            event.preventDefault();

            let config = {
                limit: filtroLimite,
                offset: pageButton.id
            };

            let tablaUsuarios = document.getElementById("informacionUsuarios");

            eliminarContenido(tablaUsuarios)

            mostrarLista(config);
        })

        pageLi.append(pageButton);
        paginas.append(pageLi);

        pagina++;

        offset = offset + limit;

        count = count - limit;

    } while (count > -1);
}


function eliminarContenido(contenido) {

    contenido.innerHTML = "";

}

async function init() {
    debugger;

    let cantidadUsuariosTotales = await ContadorUsuarios();

    mostrarTotalUsuarios(cantidadUsuariosTotales);

    console.log(cantidadUsuariosTotales);

    let config = {
        rol: ['user'],
        limit: 10,
        offset: 0
    };

    mostrarLista(config);

    paginacion(10, cantidadUsuariosTotales);
}

function mostrarTotalUsuarios(cantidadUsuariosTotales) {

    let pCount = document.getElementById("count");

    if (cantidadUsuariosTotales == 0) {
        pCount.textContent = "No hay usuarios.";
    }
    else if (cantidadUsuariosTotales == 1) {
        pCount.textContent = `Hay ${cantidadUsuariosTotales} usuario.`
    }
    else {
        pCount.textContent = `Hay ${cantidadUsuariosTotales} usuarios.`
    }

}

init();