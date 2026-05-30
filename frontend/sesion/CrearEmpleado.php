<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashfood - Registrar Empleado</title>
    <?php
    include("../bootstrap.php");
    ?>
    <link rel="stylesheet" href="../style/style.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <section class="dashboard">
        <aside id="dashboard" class="menuVert"></aside>
        <section style="width: 60vw;">
            <section class="d-flex justify-content-center mt-5">
                <section class="w-100 d-flex flex-column align-items-center">
                    <h3>Registrar Empleado</h3>
                    <form class="w-100 d-flex flex-column align-items-center">
                        <div class="form-floating mb-3 w-25">
                            <input class="form-control" type="text" name="username" id="username" placeholder="username">
                            <label for="username">Nombre de Usuario</label>
                        </div>
                        <div class="form-floating mb-3 w-25">
                            <input class="form-control" type="text" name="name" id="name" placeholder="name">
                            <label for="name">Nombre</label>
                        </div>
                        <div class="form-floating mb-3 w-25">
                            <input class="form-control" type="text" name="apellidos" id="apellidos" placeholder="apellidos">
                            <label for="apellidos">Apellidos</label>
                        </div>
                        <div class="form-floating mb-3 w-25">
                            <input class="form-control" type="email" name="eMail" id="eMail" placeholder="email@example.com">
                            <label class="form-label" for="eMail">Email</label>
                        </div>
                        <div class="form-floating mb-3 w-25">
                            <input class="form-control" type="password" name="passwd" id="passwd" placeholder="password">
                            <label class="form-label" for="passwd">Contraseña</label>
                            <div id="passwd" class="invalid-feedback">
                                No coincide la contraseña.
                            </div>
                        </div>
                        <div class="form-floating mb-3 w-25">
                            <input class="form-control" type="password" name="repPasswd" id="repPasswd" placeholder="repPassword">
                            <label class="form-label" for="repPasswd">Repetir Contraseña</label>
                            <div id="repPasswd" class="invalid-feedback">
                                No coincide la contraseña.
                            </div>
                        </div>
                        <div class="form-floating mb-3 w-25">
                            <select class="form-select" id="selectedRol" name="selectedRol" aria-label="Default select example">
                                <option value="admin" selected>Administrador</option>
                                <option value="repartidor">repartidor</option>
                                <option value="cocinero">cocinero</option>
                            </select>
                            <label class="form-label" for="repPasswd">Rol</label>
                        </div>
                        <div class="alert alert-danger" role="alert" style="display:none;">
                            El empleado ya existe
                        </div>
                        <button type="submit" class="btn btn-primary mb-3">Registrar Empleado</button>
                    </form>
                </section>
            </section>
        </section>
    </section>

    <script type="module" src="./js/CrearEmpleado.js"></script>
    <script type="module" src="../navBar.js"></script>
    <script type="module" src="../dashboard.js"></script>
</body>

</html>