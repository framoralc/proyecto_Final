import config from "../../config/config.json" with { type: "json" };

const url = config.apiURL;
const web = config.URLWeb;

let idUser = sessionStorage.getItem("user_id");

let formCambiarNombre = document.getElementById("formCambiarNombre");
let formCambiarEmail = document.getElementById("formCambiarEmail");
let formCambiarDireccion = document.getElementById("formCambiarDireccion");
let formCambiarDireccionFac = document.getElementById("formCambiarDireccionFac");
let cambiarNombre = document.getElementById("cambiarNombre");
let cambiarCorreoElectronico = document.getElementById("cambiarCorreoElectronico");
let cambiarDireccion = document.getElementById("cambiarDireccion");
let cambiarContrasenya = document.getElementById("cambiarContrasenya");
let formContrasenya = document.getElementById("formCambiarCont");
let userError = document.getElementById("userError");

function cargarInformacion() {
    document.getElementById("NameInfo").textContent = sessionStorage.getItem("user_name");
    document.getElementById("EmailInfo").textContent = sessionStorage.getItem("user_email");

    document.getElementById("infoCiudadEntrega").textContent = sessionStorage.getItem("user_ciudadEntrega");
    document.getElementById("infoCalleEntrega").textContent = sessionStorage.getItem("user_calleEntrega");
    document.getElementById("infoNumeroEntrega").textContent = sessionStorage.getItem("user_numeroEntrega");
    document.getElementById("infoPisoEntrega").textContent = sessionStorage.getItem("user_pisoEntrega");
    document.getElementById("infoPuertaEntrega").textContent = sessionStorage.getItem("user_puertaEntrega");
    document.getElementById("infoCodPostalEntrega").textContent = sessionStorage.getItem("user_codPostalEntrega");

    document.getElementById("infoCiudadFac").textContent = sessionStorage.getItem("user_ciudadFac");
    document.getElementById("infoCalleFac").textContent = sessionStorage.getItem("user_calleFac");
    document.getElementById("infoNumeroFac").textContent = sessionStorage.getItem("user_numeroFac");
    document.getElementById("infoPisoFac").textContent = sessionStorage.getItem("user_pisoFac");
    document.getElementById("infoPuertaFac").textContent = sessionStorage.getItem("user_puertaFac");
    document.getElementById("infoCodPostalFac").textContent = sessionStorage.getItem("user_codPostalFac");
}

async function actualizarPerfil(perfil) {
    try {
        const options = {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(perfil)
        };

        const response = await fetch(`${url}/usuario`, options);

        if (!response.ok) {
            const error = await response.json();
            throw new Error("No se ha podido actualizar el perfil. Detalles:" + error);
        } else {
            await RecogerInformacion(perfil.id);
        }
    } catch (err) {
        console.error(err);
    }
}

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
            throw new Error("No se ha podido enviar." + data.message);
        } else {
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
    } catch (err) {
        console.error(err);
    }
}

async function eliminarPerfil(id) {
    try {
        const options = {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        };
        await fetch(`${url}/eliminarUsuario/${id}`, options);
    } catch (err) {
        console.error(err);
    }
}

formCambiarUsername.addEventListener('submit', (event) => {
    event.preventDefault();
    let perfil = {
        id: sessionStorage.getItem('user_id'),
        username: formCambiarUsername.elements["username"].value
    };
    actualizarPerfil(perfil);
});

formCambiarNombreApellidos.addEventListener("submit", (event) => {
    event.preventDefault();
    let perfil = {
        id: sessionStorage.getItem('user_id'),
        nombre: formCambiarNombreApellidos.elements["nombre"].value,
        apellidos: formCambiarNombreApellidos.elements["apellidos"].value
    };
    actualizarPerfil(perfil);
});

formCambiarEmail.addEventListener('submit', (event) => {
    event.preventDefault();
    let perfil = {
        id: sessionStorage.getItem('user_id'),
        email: formCambiarEmail.elements["eMail"].value
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
            actualizarPerfil({ id: sessionStorage.getItem('user_id'), password: passwd.value });
        } else {
            passwd.classList.add("is-invalid");
            repPasswd.classList.add("is-invalid");
            passwd.classList.remove("is-valid");
            repPasswd.classList.remove("is-valid");
        }
    }
});

formCambiarDireccion.addEventListener("submit", (event) => {
    event.preventDefault();
    let Direccion = {
        id: sessionStorage.getItem('user_id'),
        ciudad: formCambiarDireccion.elements["ciudad"].value,
        calle: formCambiarDireccion.elements["calle"].value,
        numero: formCambiarDireccion.elements["numero"].value,
        piso: formCambiarDireccion.elements["piso"].value,
        puerta: formCambiarDireccion.elements["puerta"].value,
        codpostal: formCambiarDireccion.elements["codPostal"].value
    };
    actualizarPerfil(Direccion);
});

formCambiarDireccionFac.addEventListener("submit", (event) => {
    event.preventDefault();
    let Direccion = {
        id: sessionStorage.getItem('user_id'),
        ciudadFac: formCambiarDireccionFac.elements["ciudadFac"].value,
        calleFac: formCambiarDireccionFac.elements["calleFac"].value,
        numeroFac: formCambiarDireccionFac.elements["numeroFac"].value,
        pisoFac: formCambiarDireccionFac.elements["pisoFac"].value,
        puertaFac: formCambiarDireccionFac.elements["puertaFac"].value,
        codpostalFac: formCambiarDireccionFac.elements["codPostalFac"].value
    };
    actualizarPerfil(Direccion);
});

let btnEliminar = document.getElementById("eliminar");
btnEliminar.addEventListener('click', async () => {
    await eliminarPerfil(sessionStorage.getItem('user_id'));
    sessionStorage.clear();
    window.location.href = `${web}/index.php`;
});

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

        document.getElementById("btnCambiarPass").addEventListener("click", () => {
            secPass.style.display = "block";
            secEliminarCuenta.style.display = "none";
        });

        document.getElementById("btnEliminarCuenta").addEventListener("click", () => {
            secEliminarCuenta.style.display = "block";
            secPass.style.display = "none";
        });
    }
}

init();