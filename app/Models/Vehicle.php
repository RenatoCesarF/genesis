<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Vehicle extends Model
{

    use HasFactory;

    protected $fillable = [
        'model',
        'renavam',
        'original_quilometration',
        'year',
        'aquisition',
    ];

    public function trips()
    {
        return $this->hasMany(Trip::class);
    }
}
