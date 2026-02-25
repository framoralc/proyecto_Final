<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ingrediente;

class IngredienteContoller extends Controller
{
   public function index()
    {
        return response()->json(Ingrediente::all(), 200);
    }

    public function store(Request $request)
    {
        $ingrediente = Ingrediente::create($request->all());
        return response()->json($ingrediente, 201);
    }

    public function show($id)
    {
        $ingrediente = Ingrediente::find($id);
        if (!$ingrediente) return response()->json(['error' => 'No encontrado'], 404);
        return response()->json($ingrediente, 200);
    }

    public function update(Request $request, $id)
    {
        $ingrediente = Ingrediente::find($id);
        if (!$ingrediente) return response()->json(['error' => 'No encontrado'], 404);
        
        $ingrediente->update($request->all());
        return response()->json($ingrediente, 200);
    }

    public function destroy($id)
    {
        $ingrediente = Ingrediente::find($id);
        if (!$ingrediente) return response()->json(['error' => 'No encontrado'], 404);

        $ingrediente->delete();
        return response()->json(['mensaje' => 'Borrado correctamente'], 200);
    } 
}
