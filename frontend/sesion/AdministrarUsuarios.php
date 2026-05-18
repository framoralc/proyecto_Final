<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashfood - Administrar Usuarios</title>
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
            <section>
                <div id="controles">
                    <section class="collapse" id="collapseFiltro">
                        <div class="card card-body">

                        </div>
                    </section>
                </div>
                <section class="table-responsive-sm m-2 gap-3">
                    <section class="d-flex gap-3">
                        <p id="count"></p>
                        <button class="btn btn-primary" id="btnFiltros" data-bs-toggle="modal" data-bs-target="#modalFiltro">Mostrar Filtros</button>
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
                    </section>
                </section>
            </section>
        </section>

        <div class="modal fade" id="modalFiltro" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="tituloModal">Filtros</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                    </div>
                    <div class="modal-body">
                        <div id="alertaModal" class="alert d-none"></div>
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
                            <button class="btn btn-primary" type="submit">Filtrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <template id="tablaUsuario">
        <tr>
            <td id="id"></td>
            <td id="nombre"></td>
            <td class="w-25" id="email"></td>
            <td id="rol"></td>
            <td id="direccion"></td>
            <td class="opciones">
                <button class="btn btn-warning" id="editar">Editar</button>
                <button class="btn btn-danger" id="eliminar">Eliminar</button>
            </td>
        </tr>
        <tr class="collapse"></tr>
    </template>

    <script type="module" src="./js/AdministrarUsuarios.js"></script>
    <script type="module" src="../navBar.js"></script>
    <script type="module" src="../dashboard.js"></script>
</body>

</html>