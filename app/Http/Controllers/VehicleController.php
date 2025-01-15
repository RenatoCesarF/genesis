<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use App\Models\Trip;
use App\Http\Requests\StoreUpdateVehicleRequest;

class VehicleController extends Controller
{
    public function index(Vehicle $vehicle)
    {
        $vehicles = $vehicle->latest()->paginate(15);
        return inertia("Vehicle/Index", [
            'vehicles' => $vehicles
        ]);
    }

    public function create()
    {
        return inertia("Vehicle/CreateVehicle");
    }

    public function store(StoreUpdateVehicleRequest $request)
    {
        Vehicle::create($request->validated());

        return redirect('/vehicle');
    }

    public function show(string|int $id)
    {
        $vehicle = Vehicle::find($id);

        if (!$vehicle) {
            return back();
        }

        return inertia("Vehicle/ShowVehicle", compact('vehicle'));
    }

    public function edit(string|int $id)
    {
        $vehicle = Vehicle::find($id);

        if (!$vehicle) {
            return back();
        }

        return inertia('Vehicle/EditVehicle', compact('vehicle'));
    }

    public function update(string|int $id, StoreUpdateVehicleRequest $request)
    {
        $vehicle = Vehicle::find($id);

        if (!$vehicle) {
            return back();
        }

        $vehicle->update($request->all());
        return redirect('/vehicle');
    }

    public function destroy(string|int $id)
    {
        $vehicle = Vehicle::find($id);

        if (!$vehicle) {
            return back();
        }

        $vehicle->delete();
        return redirect('/vehicle');
    }

    public function lastKm(string|int $id)
    {
        // ordenar por maior km final
        $lastTrip = Trip::where('vehicle_id', $id)->orderBy('created_at', 'desc')->first();
        if ($lastTrip) {
            return $lastTrip->final_km;
        }

        return Vehicle::find($id)->original_quilometration;
    }
}
