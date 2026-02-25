<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

use function Laravel\Prompts\error;

class SesionController extends Controller
{
    public function registrarse(Request $request)
    {

        $datos = $request->validate([
            'nombre' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'direccion' => 'nullable',
        ]);

        $usuario = \App\Models\User::create([
            'nombre' => $request->nombre,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'rol' => $request->rol,
            'direccion' => $request->direccion,
        ]);

        return response()->json($usuario, 201);
    }

    public function iniciar(Request $request)
    {

        $usuario = \App\Models\User::where('nombre', $request->nombre)->first();

        if (!$usuario) {
            return response()->json(["No existe el usuario"], 404);
        }

        if (Hash::check($request->password, $usuario->password)) {
            return response()->json([
                "mensaje" => "Acceso correcto",
                "id" => $usuario->id,
                "usuario" => $usuario->nombre,
                "rol" => $usuario->rol,
                "direccion" => $usuario->direccion,
                "email" => $usuario->email
            ], 200);
        } else {
            return response()->json(["error" => "Contraseña incorrecta"], 401);
        }
    }

    public function actualizarPerfil(Request $request)
    {

        $usuario = User::find($request->id);

        if ($usuario) {
            $usuario->nombre = $request->nombre;
            $usuario->email = $request->email;
            $usuario->direccion = $request->direccion;
            $usuario->save();

            return response()->json([
                "mensaje" => "Perfil actualizado",
                "id" => $usuario->id,
                "usuario" => $usuario->nombre,
                "rol" => $usuario->rol,
                "direccion" => $usuario->direccion,
                "email" => $usuario->email
            ], 200);
        } else {
            return response()->json(["error" => "Perfil no encontrado"], 404);
        }
    }

    public function actualizarPassword(Request $request)
    {
        $usuario = User::find($request->id);

        if ($usuario) {
            $usuario->password = Hash::make($request->password);
            $usuario->save();

            return response()->json([
                "mensaje"=> "Contraseña Actualizada",
            ], 200);
        } else {
            return response()->json(["error" => "Perfil no encontrado"], 404);
        }
    }
}
