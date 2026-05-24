<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;
protected $table = 'public.users';
    public $timestamps = false;

    protected $fillable = [
        'username','nombre','apellidos','email','password','rol','direccion','telefono',
        'ciudad','calle','numero','piso','puerta','codPostal',
        'ciudadFac','calleFac','numeroFac','pisoFac','puertaFac','codPostalFac','turno'
    ];
}
