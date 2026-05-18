<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashfood - Administrar Empleados</title>
    <?php
    include("../bootstrap.php");
    ?>
    <link rel="stylesheet" href="./css/AdministrarEmpleados.css">
    <link rel="stylesheet" href="../style/style.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <section class="dashboard">
        <aside id="dashboard" class="menuVert"></aside>
        <section>
            <div id="controles">
                <section class="collapse" id="collapseFiltro">
                    <div class="card card-body">
                        <form id="formFiltro">
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
                                    <option value="all" selected>Todos</option>
                                    <option value="cocinero">cocineros</option>
                                    <option value="repartidor">repartidores</option>
                                    <option value="admin">administradores</option>
                                </select>
                            </section>
                            <button class="btn btn-primary" type="submit">Filtrar</button>
                        </form>
                    </div>
                </section>
            </div>
            <section class="table-responsive-sm m-2 gap-3">
                <section class="d-flex gap-3">
                    <p id="count"></p>
                    <button class="btn btn-primary" id="btnFiltros" data-bs-toggle="collapse" data-bs-target="#collapseFiltro" aria-expanded="false" aria-controls="collapseFiltro">Mostrar Filtros</button>
                </section>
                <section class="d-flex column-gap-3 justify-content-lg-center" id="lista">
                    <section>
                        <table class="table table-hover table-striped table-bordered">
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">eMail</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">Dirección</th>
                                    <th scope="col">Turno</th>
                                    <th scope="col">opciones</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider" id="informacionUsuarios">

                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination" id="paginas">
                                <!-- <li class="page-item"><button class="page-link" href="#">Previous</button></li> -->

                                <!-- <li class="page-item"><button class="page-link" href="#">Next</button></li> -->
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <h3>Cambiar rol</h3>
                        <p id="userText">Usuario: </p>
                        <form id="formEditRol">
                            <select class="form-select" aria-label="Rol" name="rol">
                                <option value="admin">admin</option>
                                <option value="cocinero">cocinero</option>
                                <option value="repartidor">repartidor</option>
                            </select>
                            <button class="btn btn-primary" type="submit">Enviar</button>
                        </form>
                    </section>
                </section>
            </section>
        </section>
    </section>

    <template id="tablaUsuario">
        <tr>
            <td id="id"></td>
            <td id="nombre"></td>
            <td class="w-25" id="email"></td>
            <td id="rol"></td>
            <td id="direccion"></td>
            <td id="turno"></td>
            <td class="opciones">
                <button class="btn btn-warning" id="editar">Editar</button>
                <button class="btn btn-danger" id="eliminar">Eliminar</button>
            </td>
        </tr>
        <tr class="collapse"></tr>
    </template>

    <script type="module" src="./js/AdministrarEmpleados.js"></script>
    <script type="module" src="../navBar.js"></script>
    <script type="module" src="../dashboard.js"></script>
</body>

</html>