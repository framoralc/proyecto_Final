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
        <section class="d-flex flex-column align-items-center w-100">
            <section class="table-responsive-sm m-2 w-100">
                <section class="d-flex column-gap-5 justify-content-center align-items-start" id="lista">
                    <section>
                        <section class="d-flex gap-3 mb-3">
                            <p id="count"></p>
                            <button class="btn btn-primary" id="btnFiltros" data-bs-toggle="modal" data-bs-target="#modalFiltro">Mostrar Filtros</button>
                        </section>
                        <table class="table table-hover table-striped table-bordered">
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">eMail</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">Turno</th>
                                    <th scope="col">opciones</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider" id="informacionUsuarios">

                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination" id="paginas">
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <h3>Cambiar rol</h3>
                        <p id="userText">Usuario: </p>
                        <form id="formEditRol">
                            <input type="text" name="id" hidden>
                            <select class="form-select" aria-label="Rol" name="rol">
                                <option value="admin">admin</option>
                                <option value="cocinero">cocinero</option>
                                <option value="repartidor">repartidor</option>
                            </select>
                            <select class="form-select mt-2" name="turno">
                                <option value="mañana">Mañana</option>
                                <option value="tarde">Tarde</option>
                            </select>
                            <button class="btn btn-primary" type="submit">Enviar</button>
                        </form>
                    </section>
                </section>
            </section>
        </section>

        <section class="modal fade" id="modalFiltro" tabindex="-1" aria-hidden="true">
            <section class="modal-dialog">
                <section class="modal-content">
                    <section class="modal-header">
                        <h5 class="modal-title" id="tituloModal">Filtros</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                    </section>
                    <section class="modal-body">
                        <section id="alertaModal" class="alert d-none"></section>
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