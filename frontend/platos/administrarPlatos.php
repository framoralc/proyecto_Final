<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrar Platos</title>
    <?php include("../bootstrap.php"); ?>
    <link rel="stylesheet" href="../style/style.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <section class="dashboard">
        <aside id="dashboard" class="menuVert"></aside>
        <div class="container mt-4">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h2>Administrar Platos</h2>
                <button class="btn btn-success" id="btnNuevoPlato">+ Añadir Plato</button>
            </div>

            <div id="alertaGlobal" class="alert d-none"></div>

            <table class="table table-striped table-bordered">
                <thead class="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Disponible</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody id="tablaPlatos">
                    <tr>
                        <td colspan="6" class="text-center">Cargando...</td>
                    </tr>
                </tbody>
            </table>

            <nav>
                <ul class="pagination justify-content-center" id="paginacion"></ul>
            </nav>
        </div>

        <div class="modal fade" id="modalPlato" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="tituloModal">Plato</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                    </div>
                    <div class="modal-body">
                        <div id="alertaModal" class="alert d-none"></div>
                        <form id="formularioPlato">
                            <input type="hidden" id="platoId">

                            <table class="table table-striped table-bordered">
                                <thead class="table-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Categoría</th>
                                        <th>Descripción</th>
                                        <th>Precio</th>
                                        <th>Disponible</th>
                                        <th>Acciones</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody id="tablaPlatos">
                                    <tr>
                                        <td colspan="7" class="text-center">Cargando...</td>
                                    </tr>
                                </tbody>
                            </table>

                            <hr>
                            <h6>Ingredientes del plato</h6>
                            <div id="listaIngredientesModal" class="mb-3" style="max-height:200px; overflow-y:auto;">
                            </div>

                            <div class="modal fade" id="modalPlato" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="tituloModal">Plato</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div id="alertaModal" class="alert d-none"></div>
                                            <form id="formularioPlato">
                                                <input type="hidden" id="platoId">

                                                <div class="mb-3">
                                                    <label class="form-label">Nombre</label>
                                                    <input type="text" class="form-control" id="nombrePlato" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Categoría</label>
                                                    <select class="form-select" id="categoriaPlato">
                                                        <option value="">Sin categoría</option>
                                                        <option value="Pasta">Pasta</option>
                                                        <option value="Marisco">Marisco</option>
                                                        <option value="Picante">Picante</option>
                                                        <option value="Carnes">Carnes</option>
                                                        <option value="Entrante">Entrante</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Descripción</label>
                                                    <textarea class="form-control" id="descripcionPlato" rows="2"></textarea>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Precio (€)</label>
                                                    <input type="number" step="0.01" class="form-control" id="precioPlato" required>
                                                </div>
                                                <div class="mb-3 form-check">
                                                    <input type="checkbox" class="form-check-input" id="disponiblePlato" checked>
                                                    <label class="form-check-label">Disponible</label>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Imagen</label>
                                                    <input type="text" class="form-control" id="imagenPlato" placeholder="Poner imagen aqui:)">
                                                </div>

                                                <hr>
                                                <h6>Ingredientes</h6>
                                                <div id="listaIngredientesModal" class="mb-3" style="max-height:180px; overflow-y:auto;"></div>

                                                <button type="submit" class="btn btn-primary w-100">Guardar</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script type="module" src="../navBar.js"></script>
    <script type="module" src="../dashboard.js"></script>
    <script type="module" src="./administrarPlatos.js"></script>
</body>

</html>