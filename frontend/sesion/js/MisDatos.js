import config from "../../config/config.json" with { type: "json" };

const url = config.apiURL;
const web = config.URLWeb;

let editableUser = false;
let editableCam = false;

let idUser = sessionStorage.getItem("user_id");

// formularios para cambiar la información del perfil

let formCambiarNombre = document.getElementById("formCambiarNombre");
let formCambiarEmail = document.getElementById("formCambiarEmail");
let formCambiarDireccion = document.getElementById("formCambiarDireccion");
let formCambiarDireccionFac = document.getElementById("formCambiarDireccionFac");

// Secciones de los formularios

let cambiarNombre = document.getElementById("cambiarNombre");
let cambiarCorreoElectronico = document.getElementById("cambiarCorreoElectronico");
let cambiarDireccion = document.getElementById("cambiarDireccion");
let cambiarContrasenya = document.getElementById("cambiarContrasenya");

let formContrasenya = document.getElementById("formCambiarCont");

let userError = document.getElementById("userError");

// funciones

function cargarInformacion() {

    let nameInfo = document.getElementById("NameInfo");
    let eMailInfo = document.getElementById("EmailInfo");

    let infoCiudadEntrega = document.getElementById("infoCiudadEntrega");
    let infoCalleEntrega = document.getElementById("infoCalleEntrega");
    let infoNumeroEntrega = document.getElementById("infoNumeroEntrega");
    let infoPisoEntrega = document.getElementById("infoPisoEntrega");
    let infoPuertaEntrega = document.getElementById("infoPuertaEntrega");
    let infoCodPostalEntrega = document.getElementById("infoCodPostalEntrega");

    let infoCiudadFac = document.getElementById("infoCiudadFac");
    let infoCalleFac = document.getElementById("infoCalleFac");
    let infoNumeroFac = document.getElementById("infoNumeroFac");
    let infoPisoFac = document.getElementById("infoPisoFac");
    let infoPuertaFac = document.getElementById("infoPuertaFac");
    let infoCodPostalFac = document.getElementById("infoCodPostalFac");

    nameInfo.textContent = sessionStorage.getItem("user_name");
    eMailInfo.textContent = sessionStorage.getItem("user_email");

    infoCiudadEntrega.textContent = sessionStorage.getItem("user_ciudadEntrega");
    infoCalleEntrega.textContent = sessionStorage.getItem("user_calleEntrega");
    infoNumeroEntrega.textContent = sessionStorage.getItem("user_numeroEntrega");
    infoPisoEntrega.textContent = sessionStorage.getItem("user_pisoEntrega");
    infoPuertaEntrega.textContent = sessionStorage.getItem("user_puertaEntrega")
    infoCodPostalEntrega.textContent = sessionStorage.getItem("user_codPostalEntrega");

    infoCiudadFac.textContent = sessionStorage.getItem("user_ciudadFac");
    infoCalleFac.textContent = sessionStorage.getItem("user_calleFac");
    infoNumeroFac.textContent = sessionStorage.getItem("user_numeroFac");
    infoPisoFac.textContent = sessionStorage.getItem("user_pisoFac");
    infoPuertaFac.textContent = sessionStorage.getItem("user_puertaFac");
    infoCodPostalFac.textContent = sessionStorage.getItem("user_codPostalFac");
};

// actualizar informcación del perfil

async function actualizarPerfil(perfil) {
    try {
        const options = {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(perfil)
        };

        const response = await fetch(`${url}/usuario`, options)

        if (!response.ok) {
            const error = await response.json();
            throw new Error("No se ha podido actualizar el perfil. Detalles:" + error);
        }
        else {
            await RecogerInformacion(perfil.id);
        }
    }
    catch (err) {
        console.error(err);
    }
};

async function actualizarNombre(perfil) {
    try {

        const options = {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(perfil)
        }

        const response = await fetch(`${url}/usuario`, options)

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
};

async function actualizarEmail(perfil) {

    try {
        const options = {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(perfil)
        };

        const respuesta = await fetch(`${url}/usuario`, options);

        if (!respuesta.ok) {
            const error = await respuesta.json();
            throw new Error("No se ha podido enviar" + error)
        }
        else {
            await RecogerInformacion(perfil.id)
        }
    }
    catch (err) {
        console.error(err);
    }
};

async function actualizarContraseña(perfil) {
    try {
        const options = {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(perfil)
        }

        const respuesta = await fetch(`${url}/actualizarPassword`, options);

        if (!respuesta.ok) {
            const error = await respuesta.json();
            throw new Error("No se ha podido enviar." + error)
        }
        else {
            window.location.href = `${web}/index.php`;
        }

    }
    catch (err) {
        console.error(err);
    }
};

async function RecogerInformacion(id) {
    try {
        const options = {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const respuesta = await fetch(`${url}/recogerInformacion/${id}`, options);

        const data = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error("No se ha podido enviar." + data.message)
        }
        else {
            sessionStorage.setItem("user_name", data.nombre);
            sessionStorage.setItem("user_email", data.email);

            sessionStorage.setItem("user_ciudadEntrega", data.ciudadEntrega);
            sessionStorage.setItem("user_calleEntrega", data.calleEntrega);
            sessionStorage.setItem("user_numeroEntrega", data.numeroEntrega);
            sessionStorage.setItem("user_pisoEntrega", data.pisoEntrega);
            sessionStorage.setItem("user_puertaEntrega", data.puertaEntrega);
            sessionStorage.setItem("user_codPostalEntrega", data.codPostalEntrega);

            sessionStorage.setItem("user_ciudadFac", data.ciudadFac);
            sessionStorage.setItem("user_calleFac", data.calleFac);
            sessionStorage.setItem("user_numeroFac", data.numeroFac);
            sessionStorage.setItem("user_pisoFac", data.pisoFac);
            sessionStorage.setItem("user_puertaFac", data.puertaFac);
            sessionStorage.setItem("user_codPostalFac", data.codPostalFac);

            sessionStorage.setItem("user_rol", data.rol);
            window.location.reload();
        }
    }
    catch (err) {
        console.error(err);
    }
};

// Eliminar el perfil

async function eliminarPerfil(id) {
    try {
        const options = {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        }

        const respuesta = await fetch(`${url}/eliminarUsuario/${id}`, options)

    }
    catch (err) {
        console.error(err)
    }
};

async function ActualizarDireccionFac(direccion) {
    try {
        const options = {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(direccion)
        };

        const respuesta = await fetch(`${url}/usuario`, options)
    }
    catch (err) {
        console.error(err);
    }
};

///////////////////////// Formularios /////////////////////////////////

formCambiarUsername.addEventListener('submit', (event) => {
    event.preventDefault();

    let username = formCambiarUsername.elements["username"].value;

    let perfil = {
        id: sessionStorage.getItem('user_id'),
        username: username
    };

    actualizarPerfil(perfil);
});

formCambiarNombreApellidos.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombre = formCambiarNombreApellidos.elements["nombre"].value;
    let apellidos = formCambiarNombreApellidos.elements["apellidos"].value;

    let perfil = {
        id: sessionStorage.getItem('user_id'),
        nombre: nombre,
        apellidos: apellidos
    }

    actualizarPerfil(perfil);
});

formCambiarEmail.addEventListener('submit', (event) => {
    event.preventDefault();

    let email = formCambiarEmail.elements["eMail"].value;

    let perfil = {
        id: sessionStorage.getItem('user_id'),
        email: email
    };

    actualizarPerfil(perfil);
});

formContrasenya.addEventListener('submit', (event) => {
    event.preventDefault();

    if (confirm("¿Seguro que quieres actualizar la contraseña?")) {

        let passwd = formContrasenya.elements["passwd"];
        let repPasswd = formContrasenya.elements["rePasswd"];

        if (passwd.value == repPasswd.value) {
            passwd.classList.add("is-valid");
            repPasswd.classList.add("is-valid");
            passwd.classList.remove("is-invalid");
            repPasswd.classList.remove("is-invalid");

            let usuario = {
                id: sessionStorage.getItem('user_id'),
                password: passwd.value
            }

            actualizarPerfil(usuario);
        }
        else {
            passwd.classList.add("is-invalid");
            repPasswd.classList.add("is-invalid");
            passwd.classList.remove("is-valid");
            repPasswd.classList.remove("is-valid");
        }
    }
});

formCambiarDireccionFac.addEventListener("submit", (event) => {
    event.preventDefault();

    let ciudad = formCambiarDireccionFac.elements["ciudadFac"];
    let calle = formCambiarDireccionFac.elements["calleFac"];
    let numero = parseInt(formCambiarDireccionFac.elements["numeroFac"]);
    let piso = formCambiarDireccionFac.elements["pisoFac"];
    let puerta = formCambiarDireccionFac.elements["puertaFac"];
    let codPostal = formCambiarDireccionFac.elements["codPostalFac"];

    let Direccion = {
        id: sessionStorage.getItem('user_id'),
        ciudadFac: ciudad.value,
        calleFac: calle.value,
        numeroFac: numero.value,
        pisoFac: piso.value,
        puertaFac: puerta.value,
        codPostalFac: codPostal.value
    };

    actualizarPerfil(Direccion);
});

formCambiarDireccion.addEventListener("submit", (event) => {
    event.preventDefault();

    let ciudad = formCambiarDireccion.elements["ciudad"];
    let calle = formCambiarDireccion.elements["calle"];
    let numero = parseInt(formCambiarDireccion.elements["numero"]);
    let piso = formCambiarDireccion.elements["piso"];
    let puerta = formCambiarDireccion.elements["puerta"];
    let codPostal = formCambiarDireccion.elements["codPostal"];

    let Direccion = {
        id: sessionStorage.getItem('user_id'),
        ciudad: ciudad.value,
        calle: calle.value,
        numero: numero.value,
        piso: piso.value,
        puerta: puerta.value,
        codPostal: codPostal.value
    };

    actualizarPerfil(Direccion);
});

///////////////////////////// Eliminar Cuenta //////////////////////////////

let btnEliminar = document.getElementById("eliminar");

btnEliminar.addEventListener('click', async () => {

    await eliminarPerfil(sessionStorage.getItem('user_id'));

    sessionStorage.clear();
    window.location.href = `${web}/index.php`;
});

///////////////////////////// Menu ///////////////////////////////////////////

function init() {

    if (idUser != null) {
        cargarInformacion();

        const menuPerfil = document.getElementById("menuPerfil");
        const menuSeguridad = document.getElementById("menuSeguridad");

        const secNombre = document.querySelector(".cambiarNombre");
        const secEmail = document.querySelector(".cambiarCorreoElectronico");
        const secDireccion = document.querySelector(".cambiarDireccion");

        const secPass = document.querySelector(".cambiarContrasenya");
        const secEliminarCuenta = document.querySelector(".eliminarPerfil");

        // grupo opciones

        document.getElementById("btnPerfil").addEventListener("click", () => {
            menuPerfil.classList.remove("d-none");
            menuSeguridad.classList.add("d-none");
            secPass.style.display = "none";
            secEliminarCuenta.style.display = "none";
        });

        document.getElementById("btnSeguridad").addEventListener("click", () => {
            menuSeguridad.classList.remove("d-none");
            menuPerfil.classList.add("d-none");
            secNombre.style.display = "none";
            secEmail.style.display = "none";
            secDireccion.style.display = "none";
        });

        // grupo perfil

        document.getElementById("btnCambiarNombre").addEventListener("click", () => {
            secNombre.style.display = "block";
            secEmail.style.display = "none";
            secDireccion.style.display = "none";
        });

        document.getElementById("btnCambiarEmail").addEventListener("click", () => {
            secEmail.style.display = "block";
            secNombre.style.display = "none";
            secDireccion.style.display = "none";
        });

        document.getElementById("btnCambiarDireccion").addEventListener("click", () => {
            secNombre.style.display = "none";
            secEmail.style.display = "none";
            secDireccion.style.display = "block";
            secPass.style.display = "none";
        });

        // grupo seguridad

        document.getElementById("btnCambiarPass").addEventListener("click", () => {
            secPass.style.display = "block";
            secEliminarCuenta.style.display = "none";
        });

        document.getElementById("btnEliminarCuenta").addEventListener("click", () => {
            secEliminarCuenta.style.display = "block";
            secPass.style.display = "none";
        });
    }
    else {

    }

};

init();