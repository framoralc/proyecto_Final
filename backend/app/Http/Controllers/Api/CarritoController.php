<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\carrito;
use Exception;

class CarritoController extends Controller
{
    public function getCarritosUsuario($idUsuario)
    {
        try {
            $totalCarrito = carrito::where('idUsuario', $idUsuario)->get();

            return response()->json([
                $totalCarrito
            ], 200);
        } catch (Exception) {
            return response()->json('error not found', 404);
        }
    }
}
