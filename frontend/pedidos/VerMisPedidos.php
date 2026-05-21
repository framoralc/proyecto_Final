<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashfood - Ver Mis Pedidos</title>
    <?php
    include("../bootstrap.php");
    ?>
    <link rel="stylesheet" href="../style/style.css">
    <!-- <link rel="stylesheet" href="./style/VerMisPedidos.css"> -->
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <section class="dashboard">
        <aside id="dashboard" class="menuVert"></aside>
        <section class="d-flex gap-3">
            <section class="card">
                <section class="card-body">
                    <table class="table table-striped table-hover table-bordered rounded-start-2">
                        <thead class="table-dark">
                            <tr>
                                <th>Nº Pedido</th>
                                <th>Estado</th>
                                <th>Total</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody id="listaPedidos">

                        </tbody>
                    </table>
                </section>
            </section>
        </section>
    </section>

    <script type="module" src="../navBar.js"></script>
    <script type="module" src="../dashboard.js"></script>
    <script type="module" src="./js/VerMisPedidos.js"></script>
</body>

<template id="ContentPedido">
    <tr>
        <td class="numeroPedido"></td>
        <td class="estadoPedido"></td>
        <td class="totalPedido"></td>
        <td class="align-content-center">
            <button class="btn btn-primary btn-ver-lineas">Ver detalle</button>
        </td>
    </tr>
</template>

<template id="ContentLineaPedido">
    <tr>
        <td class="nombrePlato"></td>
        <td class="cantidadPlato"></td>
    </tr>
</template>

<!-- Modal para ver las líneas del pedido -->
<section class="modal fade" id="modalLineaPedido" tabindex="-1" aria-labelledby="modalLineaPedidoLabel" aria-hidden="true">
    <section class="modal-dialog">
        <section class="modal-content">
            <section class="modal-header">
                <h5 class="modal-title" id="modalLineaPedidoLabel">Detalle del pedido</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </section>
            <section class="modal-body">
                <table class="table table-striped table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Plato</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody id="listaLineasPedido">
                    </tbody>
                </table>
            </section>
            <section class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </section>
        </section>
    </section>
</section>

</html>