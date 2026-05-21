<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pedido;
use App\Models\linea_pedidos;
use Exception;

class PedidoController extends Controller{

    public function verPedido($idUsuario){
        try{
            $pedidoUsuario = Pedido::where('idUsuario', $idUsuario)->orderBy('id', 'desc')->get();

            return response()->json(['pedidos' => $pedidoUsuario], 200);
        }
        catch(Exception $ex){
            return response()->json('no se han podido encontrar los pedidos Detalles:' . $ex->getMessage(), 500);
        }
    }

    public function verLineaPedido($idPedido){
        try{
            $lineaPedidos = linea_pedidos::where('idPedido', $idPedido)->get();

            return response()->json(['lineaPedido' => $lineaPedidos], 200);
        }
        catch(EXception $ex){
            return response()->json('no se han podido encontrar los pedidos Detalles:' . $ex->getMessage(), 500);
        }
    }

    public function verPedidos(){
        try{
            $pedidos = Pedido::orderBy('id', 'desc')->get();

            return response()->json(['pedidos' => $pedidos], 200);
        }
        catch(Exception $err){
            return response()->json('no se han podido encontrar los pedidos. Detalles: ' . $err->getMessage(), 500);
        }
    }

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