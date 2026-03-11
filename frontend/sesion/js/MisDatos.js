let editableUser = false;
let editableCam = false;

let formDatos = document.getElementById("formMisDatos");
let formContrasenya = document.getElementById("formCambiarCont");

let userError = document.getElementById("userError");

function cargarInformacion() {

    formDatos.elements["name"].value = sessionStorage.getItem("user_name");
    formDatos.elements["eMail"].value = sessionStorage.getItem("user_email");

    if (sessionStorage.getItem("user_direccion") == "null") {
        formDatos.elements["direccion"].value = "";
    }
    else {
        formDatos.elements["direccion"].value = sessionStorage.getItem("user_direccion");
    }
}

async function actualizarPerfil(perfil) {

    try {
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(perfil)
        }

        const respuesta = await fetch("http://127.0.0.1:8000/api/actualizarPerfil", options);

        const data = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error("No se ha podido enviar." + data.message);
        }
        else {
            sessionStorage.setItem('user_id', data.id);
            sessionStorage.setItem('user_rol', data.rol);
            sessionStorage.setItem('user_name', data.usuario);
            sessionStorage.setItem('user_direccion', data.direccion);
            sessionStorage.setItem('user_email', data.email);
            window.location.href = "http://localhost/index.php";
        }
    }
    catch (err) {
        console.error("Error:" + err);
        let alert = formDatos.getElementsByClassName("alert")[0];
        if (alert) {
            alert.style.display = "block";
        }
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

let btnEdit = document.getElementById("editar");
btnEdit.addEventListener('click', (event) => {
    event.preventDefault();

    let btnSubmit = document.getElementById("editarForm");

    if (editableUser == false) {
        formDatos.elements["name"].disabled = false;
        formDatos.elements["eMail"].disabled = false;
        formDatos.elements["direccion"].disabled = false;
        editableUser = true;
        btnSubmit.style.display = "block";
    }
    else {
        formDatos.elements["name"].disabled = true;
        formDatos.elements["eMail"].disabled = true;
        formDatos.elements["direccion"].disabled = true;
        userError.classList.add("none")
        userError.classList.remove("block");
        editableUser = false;
        btnSubmit.style.display = "none";
    }

})

let btnCam = document.getElementById("cambiar");
btnCam.addEventListener('click', (event) => {
    event.preventDefault();

    let btnSubmit = document.getElementById("ActuaCont");

    if (editableCam == false) {
        editableCam = true;
        formContrasenya.elements["passwd"].disabled = false;
        formContrasenya.elements["rePasswd"].disabled = false;
        btnSubmit.style.display = "block";
    }
    else {
        editableCam = false;
        formContrasenya.elements["passwd"].disabled = true;
        formContrasenya.elements["rePasswd"].disabled = true;
        btnSubmit.style.display = "none";
    }
})

formDatos.addEventListener('submit', (event) => {
    event.preventDefault();

    let id = sessionStorage.getItem('user_id');
    let nombre = formDatos.elements["name"].value;
    let email = formDatos.elements["eMail"].value;
    let direccion = formDatos.elements["direccion"].value;

    let perfil = {
        id: id,
        nombre: nombre,
        email: email,
        direccion: direccion
    }

    console.log(perfil);

    actualizarPerfil(perfil);

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

cargarInformacion();