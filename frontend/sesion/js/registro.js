let formulario = document.querySelector("form");

async function Registro(username, nombre, apellidos, email, password) {
    let usuario = {
        username: username,
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        password: password,
        rol: "user"
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

        const respuesta = await fetch(`${url}/registrarUsuario`, options)
        const data = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error("No se ha podido enviar." + data.message)
        } else {
            window.location.href = `${web}/index.php`;
        }
    } catch (err) {
        console.error("error: " + err)
        let alerta = formulario.getElementsByClassName("alert")[0];
        if (alerta) alerta.style.display = "block";
    }
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    let username = formulario.elements["username"];
    let nombre = formulario.elements["name"];
    let apellidos = formulario.elements["apellidos"];
    let eMail = formulario.elements["eMail"];
    let passwd = formulario.elements["passwd"];
    let repPasswd = formulario.elements["repPasswd"];

    if (passwd.value == repPasswd.value) {
        passwd.classList.add("is-valid");
        repPasswd.classList.add("is-valid");
        passwd.classList.remove("is-invalid");
        repPasswd.classList.remove("is-invalid");

        Registro(username.value, nombre.value, apellidos.value, eMail.value, passwd.value)
    } else {
        passwd.classList.add("is-invalid");
        repPasswd.classList.add("is-invalid");
        passwd.classList.remove("is-valid");
        repPasswd.classList.remove("is-valid");
    }
})


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