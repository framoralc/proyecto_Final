<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pedido extends Model
{
    use HasFactory;

    protected $table = 'public.users';
    
    public $timestamps = false;

    protected $fillable = ['user_id','repartidor_id','estado','total'];
}