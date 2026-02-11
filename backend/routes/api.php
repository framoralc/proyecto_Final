<?php

use App\Http\Controllers\Api\SesionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::post('/(Lo que le hayas puesto al final de la url del fetch)', [SesionController::class, 'funcion en este caso del SesionController']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [SesionController::class, 'registrarse']);

Route::post('/iniciar', [SesionController::class,'iniciar']);