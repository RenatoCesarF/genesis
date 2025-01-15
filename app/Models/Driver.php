<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    /** @use HasFactory<\Database\Factories\DriverFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'birthdate',
        'cnh',
    ];

    public function trips()
    {
        return $this->belongsToMany(Trip::class, 'driver_trip');
    }
}
