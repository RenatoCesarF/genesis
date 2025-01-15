<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    /** @use HasFactory<\Database\Factories\TripFactory> */
    use HasFactory;

    protected $fillable = [
        'initial_km',
        'final_km',
        'vehicle_id',
        'driver_ids',
        'trip_date'
    ];
    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
    public function drivers()
    {
        return $this->belongsToMany(Driver::class, 'driver_trip');
    }
}
