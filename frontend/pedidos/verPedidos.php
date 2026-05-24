<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashfood - Administrar Pedidos</title>
    <?php include("../bootstrap.php"); ?>
    <link rel="stylesheet" href="../style/style.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <section class="dashboard">
        <aside id="dashboard" class="menuVert"></aside>
        <div class="container mt-4">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h2>Administrar Pedidos</h2>
            </div>

            <div id="alertaGlobal" class="alert d-none"></div>

            <table class="table table-striped table-bordered">
                <thead class="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Estado</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody id="tablaPedidos">
                    <tr>
                        <td colspan="5" class="text-center">Cargando...</td>
                    </tr>
                </tbody>
            </table>

            <nav>
                <ul class="pagination justify-content-center" id="paginacion"></ul>
            </nav>
        </div>
    </section>

    <div class="modal fade" id="modalPedido" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="tituloModal">Detalle del pedido</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div id="alertaModal" class="alert d-none"></div>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Estado del pedido</label>
                        <select class="form-select" id="estadoPedido">
                            <option value="pendiente">Pendiente</option>
                            <option value="en preparacion">En preparación</option>
                            <option value="en camino">En camino</option>
                            <option value="realizado">Realizado</option>
                        </select>
                    </div>
                    <h6 class="mt-3">Líneas del pedido</h6>
                    <table class="table table-striped table-bordered">
                        <thead class="table-dark">
                            <tr>
                                <th>Plato</th>
                                <th>Cantidad</th>
                                <th>Precio unitario</th>
                            </tr>
                        </thead>
                        <tbody id="tablaLineas">
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" id="btnGuardarEstado">Guardar estado</button>
                </div>
            </div>
        </div>
    </div>

    <script type="module" src="../navBar.js"></script>
    <script type="module" src="../dashboard.js"></script>
    <script type="module" src="./js/verPedidos.js"></script>
</body>
</html>