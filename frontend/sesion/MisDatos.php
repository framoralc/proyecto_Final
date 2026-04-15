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
    <h1 id="titulo">Flashfood - Detalles</h1>

    <section class="menu">

        <section class="w-50">

            <section class="info">

                <h2>Información del perfil</h2>

                <p>Nombre: <span id="NameInfo"></span></p>
                <p>Correo Electronico: <span id="EmailInfo"></span></p>
                <p>Dirección: <span id="DirInfo"></span></p>
            </section>
        </section>

<!-- Editar Información -->

        <section>
            <section>
                <h2>Cambiar nombre del perfil</h2>
                <form class="w-50" id="formCambiarNombre">
                    <div class="form-floating mb-3 w-100">
                        <input type="text" class="form-control" id="name" name="name" placeholder="Nombre del Perfil">
                        <label for="name" class="form-label">Nombre de usuario</label>
                    </div>

                    <div class="alert alert-danger" role="alert" id="userError" style="display: none;">
                        El Correo electronico ya existe
                    </div>
                    <button type="submit" class="btn btn-primary" id="editarForm">Submit</button>
                </form>
            </section>
            <section>
                <h2>Cambiar Correo Electronico</h2>
                <form class="w-50" id="formCambiarEmail">
                    <div class="form-floating mb-3 w-100">
                        <input type="email" class="form-control" id="eMail" name="eMail" placeholder="nombre@email.com">
                        <label for="eMail" class="form-label">Email</label>
                    </div>
                    
                </form><button type="submit" class="btn btn-primary" id="editarForm">Submit</button>
            </section>
            <section>
                <h2>Cambiar Dirección</h2>
                <form class="w-50" id="formCambiarDireccion">
                    <div class="form-floating mb-3 w-100">
                        <input type="text" class="form-control" id="direccion" name="direccion" placeholder="Direccion">
                        <label for="direccion" class="form-label">Dirección</label>
                    </div>
                </form>
                <button type="submit" class="btn btn-primary" id="editarForm">Submit</button>
            </section>
            <section class="camPass">
                <h2>Cambiar la contraseña</h2>

                <form id="formCambiarCont">
                    <div class="form-floating mb-3 w-100">
                        <input type="password" class="form-control" id="passwd" name="passwd" placeholder="Contraseña">
                        <label for="passwd" class="form-label">Contraseña</label>
                        <div id="passwd" class="invalid-feedback">
                            No coincide la contraseña.
                        </div>
                    </div>
                    <div class="form-floating mb-3 w-100">
                        <input type="password" class="form-control" id="rePasswd" name="rePasswd" placeholder="Contraseña">
                        <label for="rePasswd" class="form-label">Repetir contraseña</label>
                        <div id="rePasswd" class="invalid-feedback">
                            No coincide la contraseña.
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" id="ActuaCont">Submit</button>
                </form>
            </section>
            <button class="btn btn-danger" id="eliminar">Eliminar Perfil</button>
        </section>
    </section>
    <script type="module" src="../navBar.js"></script>
    <script type="module" src="./js/MisDatos.js"></script>
</body>
</html>