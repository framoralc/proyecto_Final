let formulario = document.querySelector("form");

async function iniciar(email, password) {

    let usuario = {
        email: email,
        password: password
    }

    try {
        debugger;

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(usuario)
        }

        const respuesta = await fetch("http://127.0.0.1:8000/api/iniciarSesion", options)

        const data = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error("No se ha podido enviar." + data.message)
        }
        else {
            sessionStorage.setItem('user_id', data.id);
            sessionStorage.setItem('user_rol', data.rol);
            sessionStorage.setItem('user_name', data.usuario);
            sessionStorage.setItem('user_direccion', data.direccion);
            sessionStorage.setItem('user_email', data.email);
            window.location.href = "http://localhost/index.php";
        }

    } catch (err) {
        console.error(err);
    }

}

formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    let email = formulario.elements["eMail"];
    let password = formulario.elements["passw"];

    if (email.value != null || password.value != null) {
        iniciar(email.value, password.value);

    }
    else {
        email.classList.add("is-invalid");
        password.classList.add("is-invalid");
    }
})