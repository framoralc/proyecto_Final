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
    <link rel="stylesheet" href="../style/style.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <section class="dashboard">
        <aside id="dashboard" class="menuVert"></aside>
        <section>
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

                <hr>

                <!-- Editar Información -->

                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <button id="btnSeguridad" type="button" class="nav-link">Seguridad</button>
                    </li>
                    <li class="nav-item">
                        <button id="btnPerfil" type="button" class="nav-link">Perfil</button>
                    </li>
                </ul>

                <ul class="nav nav-pills nav-fill d-none justify-content-evenly" id="menuPerfil">
                    <li class="nav-item">
                        <button id="btnCambiarNombre" type="button" class="nav-link">Nombre</button>
                    </li>
                    <li class="nav-item">
                        <button id="btnCambiarEmail" type="button" class="nav-link">Email</button>
                    </li>
                    <li class="nav-item">
                        <button id="btnCambiarDireccion" type="button" class="nav-link">Dirección</button>
                    </li>
                </ul>

                <ul class="nav nav-pills nav-fill d-none justify-content-evenly" id="menuSeguridad">
                    <li class="nav-item">
                        <button id="btnCambiarPass" type="button" class="nav-link">Contraseña</button>
                    </li>
                    <li class="nac-item">
                        <button id="btnEliminarCuenta" type="button" class="nav-link">Eliminar Cuenta</button>
                    </li>
                </ul>

                <section style="width: 50vw;">
                    <section style="display: none;" class="cambiarNombre">
                        <h2>Nombre del perfil</h2>
                        <form class="w-50" id="formCambiarUsername">
                            <div class="form-floating mb-3 w-100">
                                <input type="text" class="form-control" id="username" name="username" placeholder="Nombre del Perfil">
                                <label for="username" class="form-label">Nombre de usuario</label>
                            </div>
                            <button type="submit" class="btn btn-primary" id="editarForm">Actualizar</button>
                        </form>
                        <h2>Nombre y apellidos</h2>
                        <form class="w-50" id="formCambiarNombreApellidos">
                            <div class="d-flex" style="width: 50vw;">
                                <div class="form-floating mb-3 w-100">
                                    <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre">
                                    <label for="nombre" class="form-label">Nombre</label>
                                </div>
                                <div class="form-floating mb-3 w-100">
                                    <input type="text" class="form-control" id="apellidos" name="apellidos" placeholder="apellidos">
                                    <label for="apellidos" class="form-label">Apellidos</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary" id="editarForm">Actualizar</button>
                        </form>
                    </section>
                    <section style="display: none;" class="cambiarCorreoElectronico">
                        <h2>Correo Electrónico</h2>
                        <form class="w-50" id="formCambiarEmail">
                            <div class="form-floating mb-3 w-100">
                                <input type="email" class="form-control" id="eMail" name="eMail" placeholder="nombre@email.com">
                                <label for="eMail" class="form-label">Email</label>
                            </div>
                            <div class="alert alert-danger" role="alert" id="userError" style="display: none;">
                                El Correo electronico ya existe
                            </div>
                            <button type="submit" class="btn btn-primary" id="editarForm">Actualizar</button>
                        </form>
                    </section>
                    <section style="display: none;" class="cambiarDireccion">
                        <h2>Dirección</h2>
                        <form class="w-50" id="formCambiarDireccion">
                            <div class="form-floating mb-3 w-100">
                                <input type="text" class="form-control" id="direccion" name="direccion" placeholder="Direccion">
                                <label for="direccion" class="form-label">Dirección</label>
                            </div>
                        </form>
                        <button type="submit" class="btn btn-primary" id="editarForm">Submit</button>
                    </section>

                    <section style="display: none;" class="cambiarContrasenya">
                        <h2>Contraseña</h2>
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
                    <section style="display:none;" class="eliminarPerfil">
                        <p>¿Seguro que quieres eliminar tu cuenta?</p>

                        <button class="btn btn-danger" id="eliminar">Eliminar Perfil</button>
                    </section>

                </section>
            </section>
        </section>
    </section>


    <script type="module" src="../navBar.js"></script>
    <script type="module" src="./js/MisDatos.js"></script>
    <script type="module" src="../dashboard.js"></script>
</body>

</html>