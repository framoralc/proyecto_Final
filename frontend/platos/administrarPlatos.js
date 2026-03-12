const URL_API = 'http://127.0.0.1:8000/api/platos';

document.addEventListener('DOMContentLoaded', () => {
    cargarPlatos();
});

function cargarPlatos() {
    fetch(URL_API)
        .then(respuesta => respuesta.json())
        .then(platos => {
            const tbody = document.querySelector('#tablaPlatos tbody');
            tbody.innerHTML = '';

            platos.forEach(plato => {
                let disponible = plato.disponible ? 'Sí' : 'No';

                tbody.innerHTML += `
                    <tr>
                        <td>${plato.id}</td>
                        <td>${plato.nombre}</td>
                        <td>${plato.precio} €</td>
                        <td>${disponible}</td>
                        <td>
                            <button class="btn btn-warning btn-sm">Editar</button>
                            <button class="btn btn-danger btn-sm" onclick="borrarPlato(${plato.id})">Borrar</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function borrarPlato(id) {
    // De momento solo avisa, luego programaremos el borrado real
    alert("Has pulsado borrar en el plato con ID: " + id);
}