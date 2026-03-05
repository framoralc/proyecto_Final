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

        if (User::where('nombre', $request->usuario)->first()) {

            return response()->json("El usuario ya existe", 409);
        } else {
            $usuario = User::create([
                'nombre' => $request->nombre,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'rol' => $request->rol,
                'direccion' => $request->direccion,
            ]);

            return response()->json($usuario, 201);
        }
    }

    public function iniciar(Request $request)
    {

        $usuario = User::where('nombre', $request->nombre)->first();

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
        if (User::where('nombre', $request->nombre)->first()) {

            return response()->json(["error" => "Ya existe un perfil con el mismo nombre"], 409);
        } else {
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
    }

    public function actualizarPassword(Request $request)
    {
        $usuario = User::find($request->id);

        if ($usuario) {
            $usuario->password = Hash::make($request->password);
            $usuario->save();

            return response()->json([
                "mensaje" => "Contraseña Actualizada",
            ], 200);
        } else {
            return response()->json(["error" => "Perfil no encontrado"], 404);
        }
    }

    public function eliminarUsuario(Request $request)
    {
        $usuario = User::find($request->id);
        $usuario->delete();
        return response()->json(['message' => 'Usuario eliminado'], 201);
    }

    public function contarUsuarios(){
        $totalUsuarios = User::count();

        return response()->json(['count' => $totalUsuarios], 200);
    }

    public function mostrarUsuarios(Request $request){
        $usuario = User::where('nombre')->limit($request->limit)->offset($request->page);

        return response()->json(['usuarios'=> $usuario], 200);
    }
}
