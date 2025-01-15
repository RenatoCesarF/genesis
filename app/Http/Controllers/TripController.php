<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUpdateTripRequest;
use App\Models\Trip;
use App\Models\Vehicle;
use App\Models\Driver;

class TripController extends Controller
{
    public function index(Trip $trip)
    {
        $trips = $trip::with(['vehicle', 'drivers'])->latest()->paginate(15);
        return inertia("Trip/Index", compact('trips'));
    }

    public function create()
    {
        // $vehicles = Vehicle::whereDoesntHave('trips', function ($query) {
        //     $query->whereNull('final_km');
        // })->get();


        // $drivers = Driver::whereDoesntHave('trips', function ($query) {
        //     $query->whereNull('final_km');
        // })->get();

        $drivers = Driver::all();
        $vehicles = Vehicle::all();

        return inertia("Trip/CreateTrip", compact('drivers', 'vehicles'));
    }

    public function store(StoreUpdateTripRequest $request)
    {
        $validated = $request->validated();

        // dd($validated);
        $trip = Trip::create([
            'vehicle_id' => $validated['vehicle_id'],
            'initial_km' => $validated['initial_km'],
            'final_km' => $validated['final_km'],
            'trip_date' => $validated['trip_date'],
        ]);

        $trip->drivers()->attach($validated['driver_ids']);

        return redirect("/trip");
    }

    public function show(Trip $trip, string|int $id)
    {
        $trip = $trip::with(['vehicle', 'drivers'])->find($id);
        if (!$trip) {
            return back();
        }

        return inertia("Trip/ShowTrip", compact("trip"));
    }

    public function edit(Trip $trip, string|int $id)
    {
        $trip = $trip::with(['vehicle', 'drivers'])->find($id);
        if (!$trip) {
            return back();
        }

        $vehicles = Vehicle::all();
        $drivers = Driver::all();
        return inertia('Trip/EditTrip', compact('trip', 'vehicles', 'drivers'));
    }

    public function update(StoreUpdateTripRequest $request, string|int $id)
    {
        $trip = Trip::findOrFail($id);
        $validated = $request->validated();

        $trip->update([
            'vehicle_id' => $validated['vehicle_id'],
            'initial_km' => $validated['initial_km'],
            'final_km' => $validated['final_km'],
            'trip_date' => $validated['trip_date'],
        ]);

        $trip->drivers()->sync($validated['driver_ids']);

        return redirect('/trip');
    }

    public function destroy(Trip $trip, string|int $id)
    {
        $trip = $trip::find($id);

        if (!$trip) {
            return back();
        }

        $trip->delete();
        return redirect('/trip');
    }
}
