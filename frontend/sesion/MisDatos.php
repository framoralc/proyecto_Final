<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mis Datos</title>
    <?php
    include("../bootstrap.php");
    ?>
    <link rel="stylesheet" href="./css/MisDatos.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <h1 id="titulo">Detalles</h1>

    <section class="menu">

        <section class="w-50">

            <section class="info">

                <h2>Información del perfil</h2>

                <form class="w-50" id="formMisDatos">
                    <div class="mb-3 w-100">
                        <label for="name" class="form-label">Nombre de usuario</label>
                        <input type="text" class="form-control" id="name" name="name" disabled="true">
                    </div>
                    <div class="mb-3 w-100">
                        <label for="eMail" class="form-label">Email</label>
                        <input type="email" class="form-control" id="eMail" name="eMail" disabled="true">
                    </div>
                    <div class="mb-3 w-100">
                        <label for="direccion" class="form-label">Dirección</label>
                        <input type="text" class="form-control" id="direccion" name="direccion" disabled="true">
                    </div>
                    <button style="display: none;" type="submit" class="btn btn-primary" id="editarForm">Submit</button>
                </form>

            </section>
            <section class="camPass">
                <h2>Cambiar la contraseña</h2>

                <form id="formCambiarCont">
                    <div class="mb-3 w-100">
                        <label for="passwd" class="form-label">Contraseña</label>
                        <input type="email" class="form-control" id="passwd" name="passwd" disabled="true">
                    </div>
                    <div class="mb-3 w-100">
                        <label for="rePasswd" class="form-label">Repetir contraseña</label>
                        <input type="text" class="form-control" id="rePasswd" name="rePasswd" disabled="true">
                    </div>
                    <button style="display: none;" type="submit" class="btn btn-primary" id="ActuaCont">Submit</button>
                </form>
            </section>

        </section>
        <section>
            <button class="btn btn-primary" id="editar">Editar Perfil</button>
            <button class="btn btn-primary" id="cambiar">Cambiar contraseña</button>
        </section>
    </section>



    <script type="module" src="../navBar.js"></script>
    <script type="module" src="./js/MisDatos.js"></script>
</body>

</html>