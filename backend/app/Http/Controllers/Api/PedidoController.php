<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pedido;
use Exception;

class PedidoController extends Controller{

    public function crearPedido(Request $request){

        try{
            Pedido::create([
                'user_id' => $request->idUser,
                'repartidor_id' => $request->idRepartidor,
                'estado' => $request->estado,
                'total' => $request->total
            ]);
        }
        catch(Exception){
            return response()->json('no se ha podido crear', 500);
        }

    }

}