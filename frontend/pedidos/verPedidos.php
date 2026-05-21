<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashfood - Administrar Pedidos</title>
    <?php
    include("../bootstrap.php");
    ?>
    <link rel="stylesheet" href="../style/style.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <section class="dashboard">
        <aside id="dashboard" class="menuVert"></aside>
        <section class="d-flex gap-3">
            <section class="card">
                <section class="card-body d-flex" id="pedidosList">
                    <section>
                        <p id="NumPedido"></p>
                        <p></p>
                    </section>
                </section>
            </section>
        </section>
    </section>

    <script type="module" src="../navBar.js"></script>
    <script type="module" src="../dashboard.js"></script>
    <script type="module" src="./js/verPedidos.js"></script>
</body>

</html>