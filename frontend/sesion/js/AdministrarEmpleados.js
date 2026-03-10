let lista = document.getElementById("lista");

async function ContadorUsuarios() {

    try {

        const options = {
            method: "GET"
        }

        const respuesta = await fetch('http://127.0.0.1:8000/api/contarUsuarios', options);

        const resultado = await respuesta;

        return resultado;

    }
    catch (err) {
        console.error(err);
    }

}

async function recogerDatos(config) {

    try {

        const options = {
            method: "GET",
            Headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(config)
        };

        const respuesta = await fetch('http://127.0.0.1:8000/api/mostrarUsuarios', options)

        const resultado = await respuesta.json();

        return resultado;

    }
    catch (err) {
        console.error(err);
    }
}

async function deleteUsuario(id){

    const options ={
        method: "POST",
        body: JSON.stringify(id)
    };

    const respuesta = await fetch('http://127.0.0.1:8000/api/eliminarUsuario', options);

    const resultado = await respuesta;

}

async function TotalUsuarios() {

    let usuariosTotal = await ContadorUsuarios();

    console.log(usuariosTotal);

    return usuariosTotal.usuarios;

}

async function mostrarLista() {

    let informacionUsuarios = await recogerDatos();

    console.log(informacionUsuarios);

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
        btnDelete.addEventListener('click', () => {
            
        })

        tablaUsuarios.append(tablaUsuario);

        console.log(usuario.nombre);

    });
}

mostrarLista();