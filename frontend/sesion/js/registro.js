let formulario = document.querySelector("form");

async function Registro(nombre, email, password, rol, direccion) {
    debugger;
    let usuario = {

        nombre: nombre,
        email: email,
        password: password,
        rol: rol,
        direccion: direccion
    }

    try {

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(usuario)
        }

        const respuesta = await fetch("http://127.0.0.1:8000/api/register", options)

        if (!respuesta.ok) {
            const error = await respuesta.json();
            throw new Error("No se ha podido enviar." + error)
        }
        else{
            window.location.href = "http://localhost/index.php";
        }

    }
    catch (err) {
        console.error("error: " + err)
    }

}


formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    let nombre = formulario.elements["name"];
    let eMail = formulario.elements["eMail"];
    let passwd = formulario.elements["passwd"];
    let repPasswd = formulario.elements["repPasswd"];

    if (passwd.value == repPasswd.value) {
        passwd.classList.add("is-valid");
        repPasswd.classList.add("is-valid");
        passwd.classList.remove("is-invalid");
        repPasswd.classList.remove("is-invalid");

        let rol = "user";

        let direccion = null;

        Registro(nombre.value, eMail.value, passwd.value, rol, direccion)

        
    }
    else {
        passwd.classList.add("is-invalid");
        repPasswd.classList.add("is-invalid");
        passwd.classList.remove("is-valid");
        repPasswd.classList.remove("is-valid");
    }
})