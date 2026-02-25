let editableUser = false;
let editableCam = false;

let formDat = document.getElementById("formMisDatos");
let formCon = document.getElementById("formCambiarCont");

function cargarInformacion() {

    formDat.elements["name"].value = sessionStorage.getItem("user_name");
    formDat.elements["eMail"].value = sessionStorage.getItem("user_email");

    if (sessionStorage.getItem("user_direccion") == "null") {
        formDat.elements["direccion"].value = "";
    }
    else {
        formDat.elements["direccion"].value = sessionStorage.getItem("user_direccion");
    }
}

let btnEdit = document.getElementById("editar");
btnEdit.addEventListener('click', (event) => {
    event.preventDefault();

    let btnSubmit = document.getElementById("editarForm");

    if (editableUser == false) {
        formDat.elements["name"].disabled = false;
        formDat.elements["eMail"].disabled = false;
        formDat.elements["direccion"].disabled = false;
        editableUser = true;
        btnSubmit.style.display = "block";
    }
    else {
        formDat.elements["name"].disabled = true;
        formDat.elements["eMail"].disabled = true;
        formDat.elements["direccion"].disabled = true;
        editableUser = false;
        btnSubmit.style.display = "none";
    }

})

let btnCam = document.getElementById("cambiar");
btnCam.addEventListener('click', (event) => {
    event.preventDefault();

    if(editableCam == false){
        editableCam = true;
        formCon.elements["passwd"].disabled = false;
        formCon.elements["rePasswd"].disabled = false;
    }
    else{
        editableCam = false;
        formCon.elements["passwd"].disabled = true;
        formCon.elements["rePasswd"].disabled = true;
    }
})

async function actualizar(perfil) {
    debugger;

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
            const error = await respuesta.json();
            throw new Error("No se ha podido enviar." + error)
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
        console.error(err);
    }
}

formDat.addEventListener('submit', (event) => {
    event.preventDefault();

    let id = sessionStorage.getItem('user_id');
    let nombre = formDat.elements["name"].value;
    let email = formDat.elements["eMail"].value;
    let direccion = formDat.elements["direccion"].value;

    let perfil = {
        id: id,
        nombre: nombre,
        email: email,
        direccion: direccion
    }

    console.log(perfil);

    actualizar(perfil);

})

formCon.addEventListener('click', (event) => {
    event.preventDefault();

    if (confirm("¿Seguro que quieres actualizar la contraseña?")) {

        let id = sessionStorage.getItem('user_id');

        let passw = formCon.elements["passwd"].value

        let usuario={
            id: id,
            password: passw
        }

        const options={
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: json.stringify(usuario)
        }
    }
})

async function actualizarContraseña(){

    try{

    }
    catch(err){
        console.error(err);
    }

}

cargarInformacion();