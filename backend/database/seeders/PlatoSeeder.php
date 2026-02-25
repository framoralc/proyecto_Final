<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Ingrediente;
use App\Models\Plato;
use Illuminate\Support\Facades\DB;

class PlatoSeeder extends Seeder
{
    public function run(): void
    {
        $tomate = Ingrediente::create(['nombre' => 'Tomate', 'stock' => 500, 'unidad_medida' => 'unidades']);
        $lechuga = Ingrediente::create(['nombre' => 'Lechuga', 'stock' => 200, 'unidad_medida' => 'unidades']);
        $carne = Ingrediente::create(['nombre' => 'Carne', 'stock' => 100, 'unidad_medida' => 'kg']);
        $pan = Ingrediente::create(['nombre' => 'Pan', 'stock' => 300, 'unidad_medida' => 'unidades']);

        $hamburguesa = Plato::create(['nombre' => 'Hamburguesa Kevin', 'precio' => 12.50, 'disponible' => true]);
        $hamburguesa->ingredientes()->attach([
            $carne->id => ['cantidad_necesaria' => 1],
            $pan->id => ['cantidad_necesaria' => 1]
        ]);

        for ($i = 1; $i <= 50; $i++) {
            Plato::create([
                'nombre' => 'Plato Especial Nº ' . $i,
                'precio' => rand(5, 25) + 0.99, 
                'disponible' => (bool)rand(0, 1), 
                'descripcion' => 'Descripción generada automáticamente para pruebas de carga.'
            ]);
        }
    }
}