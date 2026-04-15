let editableUser = false;
let editableCam = false;

// formularios para cambiar la información del perfil

let formCambiarNombre = document.getElementById("formCambiarNombre");
let formCambiarEmail = document.getElementById("formCambiarEmail");
let formCambiarDireccion = document.getElementById("formCambiarDireccion");

let formContrasenya = document.getElementById("formCambiarCont");

let userError = document.getElementById("userError");

function cargarInformacion() {

    let nameInfo = document.getElementById("NameInfo");
    let eMailInfo = document.getElementById("EmailInfo");
    let dirInfo = document.getElementById("DirInfo");

    nameInfo.textContent = sessionStorage.getItem("user_name");
    eMailInfo.textContent = sessionStorage.getItem("user_email");
    dirInfo.textContent = sessionStorage.getItem("user_direccion");
}

// actualizar informcación del perfil

async function actualizarNombre(perfil) {
    debugger;
    try {

        const options = {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(perfil)
        }

        const response = await fetch("http://127.0.0.1:8000/api/actualizarNombre", options)

        if (!response.ok) {
            const error = await response.json();
            throw new Error("No se ha podido enviar." + error)
        }
        else {
            await RecogerInformacion(perfil.id);
        }

    }
    catch (err) {
        console.error(err);
    }
}

async function actualizarEmail(perfil) {

    try {
        const options = {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(perfil)
        };

        const respuesta = await fetch("http://127.0.0.1:8000/api/actualizarEmail", options);

        if (!respuesta.ok) {
            const error = await respuesta.json();
            throw new Error("No se ha podido enviar" + error)
        }
        else{
            await RecogerInformacion(perfil.id)
        }
    }
    catch(err){
        console.error(err);
    }

}

async function actualizarContraseña(perfil) {
    debugger;

    try {
        const options = {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(perfil)
        }

        const respuesta = await fetch("http://127.0.0.1:8000/api/actualizarPassword", options);

        if (!respuesta.ok) {
            const error = await respuesta.json();
            throw new Error("No se ha podido enviar." + error)
        }
        else {
            window.location.href = "http://localhost/index.php";
        }

    }
    catch (err) {
        console.error(err);
    }
}

async function RecogerInformacion(id){
    debugger;
    try{
        const options = {
            method: "GET",
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(id)
        };

        const respuesta = await fetch("http://127.0.0.1:8000/api/recogerInformacion", options);

        const data = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error("No se ha podido enviar." + data.message)
        }
        else{
            sessionStorage.setItem("user_name", data.nombre);
            sessionStorage.setItem("user_email", data.email);
            sessionStorage.setItem("user_direccion", data.direccion);
            sessionStorage.setItem("user_rol", data.rol);
            window.location.reload();
        }
    }
    catch(err){
        console.error(err);
    }
}

// Eliminar el perfil

async function eliminarPerfil(id) {
    debugger;

    try {
        const options = {
            method: "DELETE",
            Headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        }

        console.log(options);

        const respuesta = await fetch(`http://127.0.0.1:8000/api/eliminarUsuario/${id}`, options)

        if (!respuesta.ok) {
            const errorHtml = await respuesta.text();
            console.error("EL SERVIDOR RESPONDIÓ CON HTML:");

            // TRUCO: Abre el error en una pestaña nueva para leerlo bien
            const win = window.open();
            win.document.write(errorHtml);
            return;
        }

        console.log(resultado.result);

    }
    catch (err) {
        console.log(err)
    }
}

formCambiarNombre.addEventListener('submit', (event) => {
    event.preventDefault();

    let nombre = formCambiarNombre.elements["name"].value;

    let perfil = {
        id: sessionStorage.getItem('user_id'),
        nombre: nombre
    };

    actualizarNombre(perfil);
})

formCambiarEmail.addEventListener('submit', (event) => {
    event.preventDefault();

    let email = formCambiarEmail.elements["eMail"].value;

    let perfil = {
        id: sessionStorage.getItem('user_id'),
        email: email
    };

    actualizarEmail(perfil);
})

formContrasenya.addEventListener('submit', (event) => {
    event.preventDefault();

    if (confirm("¿Seguro que quieres actualizar la contraseña?")) {

        let id = sessionStorage.getItem('user_id');

        let passwd = formContrasenya.elements["passwd"];
        let repPasswd = formContrasenya.elements["rePasswd"];

        if (passwd.value == repPasswd.value) {
            passwd.classList.add("is-valid");
            repPasswd.classList.add("is-valid");
            passwd.classList.remove("is-invalid");
            repPasswd.classList.remove("is-invalid");

            let usuario = {
                id: id,
                password: passwd.value
            }

            actualizarContraseña(usuario);
        }
        else {
            passwd.classList.add("is-invalid");
            repPasswd.classList.add("is-invalid");
            passwd.classList.remove("is-valid");
            repPasswd.classList.remove("is-valid");
        }
    }
})

let btnEliminar = document.getElementById("eliminar");

btnEliminar.addEventListener('click', async () => {

    await eliminarPerfil(sessionStorage.getItem('user_id'));

    sessionStorage.clear();
    window.location.href = "http://localhost/index.php";

})

function init() {
    cargarInformacion();
}

init();