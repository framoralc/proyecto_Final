<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrar Empleados</title>
    <?php
    include("../bootstrap.php");
    ?>
    <link rel="stylesheet" href="./css/AdministrarEmpleados.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <div id="controles">
        <button class="btn btn-primary" id="btnFiltros" data-bs-toggle="collapse" data-bs-target="#collapseFiltro" aria-expanded="false" aria-controls="collapseFiltro">Mostrar Filtros</button>
        <section class="collapse" id="collapseFiltro">
            <div class="card card-body">
                <form id="formFiltro">
                    <!-- Filtro de limite
                    
                    Si se selecciona max el envío del offset tendrá que se de 0,
                    pero se debe de incorporar una advertencía por si llegan a ver muchos registros

                    Limites: 10, 20, 30, max

                    -->
                    <section class="form-control w-25">
                        <label class="form-label" for="limit">limite de las paginas</label>
                        <select class="form-select" name="limit">
                            <option value="10" selected>10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="max">max</option>
                        </select>
                    </section>
                    <section class="form-control w-25">
                        <label class="form-label" for="rol">rol</label>
                        <select class="form-select" name="rol" id="rol">
                            <option value="user">usuario</option>
                            <option value="cocinero">cocinero</option>
                            <option value="repartidor">repartidor</option>
                            <option value="admin">administrador</option>
                        </select>
                    </section>


                    <button class="btn btn-primary" type="submit">Filtrar</button>
                </form>
            </div>
        </section>
    </div>
    <div id="lista">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">eMail</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Dirección</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody id="informacionUsuarios">
            </tbody>
        </table>
    </div>

    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><button class="page-link" href="#">Previous</button></li>
            <li class="page-item"><button class="page-link" href="#">1</button></li>
            <li class="page-item"><button class="page-link" href="#">2</button></li>
            <li class="page-item"><button class="page-link" href="#">3</button></li>
            <li class="page-item"><button class="page-link" href="#">Next</button></li>
        </ul>
    </nav>

    <template id="tablaUsuario">

        <tr>
            <td id="id"></td>
            <td id="nombre"></td>
            <td id="email"></td>
            <td id="rol"></td>
            <td id="direccion"></td>
            <td style="display:flex;">
                <button class="btn btn-danger" id="eliminar">Eliminar</button>
            </td>
        </tr>

    </template>

    <script type="module" src="./js/AdministrarEmpleados.js"></script>
    <script type="module" src="../navBar.js"></script>
</body>

</html>