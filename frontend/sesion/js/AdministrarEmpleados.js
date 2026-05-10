let lista = document.getElementById("lista");

async function ContadorUsuarios() {

    try {

        const options = {
            method: "GET"
        }

        const respuesta = await fetch('http://127.0.0.1:8000/api/contarEmpleados', options);

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

        const respuesta = await fetch('http://127.0.0.1:8000/api/mostrarUsuarios', options)

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

    await fetch(`http://127.0.0.1:8000/api/eliminarUsuario/${id}`, options);
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

let formFiltro = document.getElementById("formFiltro");

async function paginacion(limit, cantidadUsuariosTotales) {

    let paginas = document.getElementById("paginas");
    let filtroLimite = formFiltro.elements["limit"].value;
    let rol = revelarRol();

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
                rol: rol,
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

function eliminarContenido(contenido) {

    contenido.innerHTML = "";

}

async function init() {
    debugger;

    let cantidadUsuariosTotales = await ContadorUsuarios();

    let config = {
        rol: ['admin', 'cocinero', 'repartidor'],
        limit: 10,
        offset: 0
    };

    mostrarTotalUsuarios(cantidadUsuariosTotales);

    console.log(cantidadUsuariosTotales);

    mostrarLista(config);

    paginacion(10, cantidadUsuariosTotales);
}

init();

function eliminarTodo() {

    let tablaUsuarios = document.getElementById("informacionUsuarios");
    let paginas = document.getElementById("paginas");

    eliminarContenido(tablaUsuarios);
    eliminarContenido(paginas);
}

function revelarRol(){

    let filtroRol = formFiltro.elements["rol"].value;

    switch(filtroRol){
        case "all":
            return ['admin', 'cocinero', 'repartidor']
        case "empleados":
            return ['cocinero', 'repartidor']
        case "cocinero":
            return ['cocinero']
        case "repartidor":
            return ['repartidor']
        case "admin":
            return ['admin']
        default:
            return ['admin', 'cocinero', 'repartidor'];
    }

}

formFiltro.addEventListener("submit", async (event) => {

    event.preventDefault();

    let filtroLimite = formFiltro.elements["limit"].value;

    eliminarTodo();

    let rol = revelarRol();

    let cantidadUsuariosTotales = await ContadorUsuarios();

    let config = {
        limit: filtroLimite,
        rol: rol,
        offset: 0
    };

    mostrarTotalUsuarios(cantidadUsuariosTotales);

    mostrarLista(config);

    paginacion(filtroLimite, cantidadUsuariosTotales);

})