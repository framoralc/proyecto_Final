let lista = document.getElementById("lista");

async function ContadorUsuarios() {

    try {

        const options = {
            method: "GET"
        }

        const respuesta = await fetch('http://127.0.0.1:8000/api/contarUsuarios', options);

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

async function mostrarLista(config) {

    eliminarContenido();

    let informacionUsuarios = await recogerDatos(config);

    let tablaUsuarios = document.getElementById("informacionUsuarios");

    informacionUsuarios.usuarios.forEach((usuario) => {

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

        tablaUsuarios.append(tablaUsuario);

    });
}

async function paginacion(limit) {

    let cantidadUsuariosTotales = await ContadorUsuarios();

    let pCount = document.getElementById("count");
    let paginas = document.getElementById("paginas");

    if (cantidadUsuariosTotales == 0) {
        pCount.textContent = "No hay usuarios.";
    }
    else if (cantidadUsuariosTotales == 1) {
        pCount.textContent = `Hay ${cantidadUsuariosTotales} usuario.`
    }
    else {
        pCount.textContent = `Hay ${cantidadUsuariosTotales} usuarios.`
    }

    let count = cantidadUsuariosTotales;
    let pagina = 1;

    do{

        let pageLi = document.createElement("li");
        pageLi.classList.add("page-item");
        pageLi.id = pagina;

        let pageButton = document.createElement("button")
        pageButton.classList.add("page-link");
        pageButton.textContent = pagina;

        pageLi.append(pageButton);
        paginas.append(pageLi);

        pagina++;

        count = count - limit;

    }while(count > -1);
}

function eliminarContenido() {

    let tablaUsuarios = document.getElementById("informacionUsuarios");

    tablaUsuarios.innerHTML = "";

}

function init() {

    let config ={
        limit: 10,
        offset: 0
    };

    mostrarLista(config);

    paginacion(10);
}

init();