let formulario = document.querySelector("form");

async function iniciar(nombre, password) {

    let usuario = {
        nombre: nombre,
        password: password
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

        const respuesta = await fetch("http://127.0.0.1:8000/api/iniciar", options)

        const data = await respuesta.json();

        if (!respuesta.ok) {
            const error = await respuesta.json();
            throw new Error("No se ha podido enviar." + error)
        }
        else{
            sessionStorage.setItem('user_rol', data.rol);
            sessionStorage.setItem('user_name', data.usuario);
            sessionStorage.setItem('user_direccion', data.direccion);
            sessionStorage.setItem('user_email', data.email);
        }

    }catch(err){
        console.error(err);
    }

}

formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    let nombre = formulario.elements["name"];
    let password = formulario.elements["passw"];

    if(nombre.value != null || password.value != null){
        iniciar(nombre.value, password.value);
    }
    else{
        nombre.classList.add("is-invalid");
        password.classList.add("is-invalid");
    }
})