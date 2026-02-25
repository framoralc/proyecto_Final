<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plato extends Model
{
    use HasFactory;
    
    public $timestamps = false; 

    protected $fillable = ['nombre', 'precio', 'disponible', 'descripcion'];

    public function ingredientes()
    {
        return $this->belongsToMany(Ingrediente::class, 'plato_ingredientes', 'plato_id', 'ingrediente_id')
                    ->withPivot('cantidad_necesaria');
    }
}