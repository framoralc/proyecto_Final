<?php

use App\Http\Controllers\api\CarritoController;
use App\Http\Controllers\api\PedidoController;
use App\Http\Controllers\api\PlatoContoller;
use App\Http\Controllers\Api\SesionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::post('/(Lo que le hayas puesto al final de la url del fetch)', [SesionController::class, 'funcion en este caso del SesionController']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//Sesiones

Route::post('/registrarUsuario', [SesionController::class, 'registrarUsuario']);

Route::post('/iniciarSesion', [SesionController::class, 'iniciarSesion']);

// actualizar información del perfil

Route::post('/actualizarPassword', [SesionController::class, 'actualizarPassword']);

Route::post('/actualizarNombre', [SesionController::class, 'actualizarNombre']);

Route::post('/actualizarEmail', [SesionController::class, 'actualizarEmail']);

// Recoger información usuarios y empleados

Route::get('/recogerInformacion', [SesionController::class, 'recogerInformacion']);

Route::delete('/eliminarUsuario/{id}', [SesionController::class, 'eliminarUsuario']);

Route::get('/contarUsuarios/{rol}', [SesionController::class, 'contarUsuarios']);

Route::get('/contarEmpleados', [SesionController::class, 'contarEmpleados']);

Route::post('/mostrarUsuarios', [SesionController::class, 'mostrarUsuarios']);

Route::post('/seleccionarRepartidor', [SesionController::class, 'obtenerRepartidor']);
// Recoger información Carrito

Route::get('/recogerCarrito/{idUsuario}', [CarritoController::class, 'getCarritosUsuario']);

// Platos 

Route::get('/cargarPlato/{idPlato}', [PlatoContoller::class, 'getPlato']);

// pedido

Route::post('/crearPedido', [PedidoController::class, 'crearPedido']);