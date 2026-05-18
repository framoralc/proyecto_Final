<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pedido;
use App\Models\linea_pedidos;
use Exception;

class PedidoController extends Controller{

    public function crearPedido(Request $request){

        try{
            Pedido::create([
                'idUsuario' => $request->idUsuario,
                'estado' => $request->estado,
                'total' => $request->total
            ]);

            $pedido = Pedido::where('idUsuario', $request->idUsuario)->orderBy('id', 'desc')->first();

            foreach($request->carrito as $producto){

                linea_pedidos::create([
                'idPedido' => $pedido->id,
                'idPlato' => $producto['idPlato'],
                'cantidad' => $producto['cantidad']
            ]);

            }

            return response()->json('pedido creado correctamente', 201);
        }
        catch(Exception $err){
            return response()->json('no se ha podido crear Detalles:' . $err->getMessage(), 500);
        }
    }

    public function contarPedidos(){
        $totalPedidos = Pedido::where('estado', '!=', 'realizado')->count();
        return response()->json(['count' => $totalPedidos], 200);
    }
}