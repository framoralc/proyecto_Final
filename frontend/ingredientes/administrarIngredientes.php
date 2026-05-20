<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrar Ingredientes</title>
    <?php include("../bootstrap.php"); ?>
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>

    <div class="container mt-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h2>Administrar Ingredientes</h2>
            <button class="btn btn-success" id="btnNuevoIngrediente">+ Añadir Ingrediente</button>
        </div>

        <div id="alertaGlobal" class="alert d-none"></div>

        <table class="table table-striped table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Stock actual</th>
                    <th>Unidad de medida</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="tablaIngredientes">
                <tr><td colspan="4" class="text-center">Cargando...</td></tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination justify-content-center" id="paginacion"></ul>
        </nav>
    </div>

    <div class="modal fade" id="modalIngrediente" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="tituloModal">Ingrediente</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body">
                    <div id="alertaModal" class="alert d-none"></div>
                    <form id="formularioIngrediente">
                        <input type="hidden" id="ingredienteId">

                        <div class="mb-3">
                            <label class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombreIngrediente" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Stock actual</label>
                            <input type="number" step="0.01" class="form-control" id="stockIngrediente" value="0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Unidad de medida</label>
                            <input type="text" class="form-control" id="unidadIngrediente" placeholder="kg, g, L, unidades...">
                        </div>

                        <button type="submit" class="btn btn-primary w-100">Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script type="module" src="../navBar.js"></script>
    <script src="./administrarIngredientes.js"></script>
</body>
</html>