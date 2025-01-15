<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUpdateDriverRequest;
use App\Models\Driver;

class DriverController extends Controller
{
    public function index(Driver $driver)
    {
        $drivers = $driver->latest()->paginate(15);
        return inertia("Driver/Index", [
            'drivers' => $drivers
        ]);
    }

    public function create()
    {
        return inertia("Driver/CreateDriver");
    }

    public function store(StoreUpdateDriverRequest $request)
    {
        Driver::create($request->validated());
        return redirect('/driver');
    }

    public function show(Driver $driver, string|int $id)
    {
        $driver = $driver::find($id);
        if (!$driver) {
            return back();
        }
        return inertia("Driver/ShowDriver", compact('driver'));
    }

    public function edit(Driver $driver, string|int $id)
    {
        $driver = $driver::find($id);
        if (!$driver) {
            return back();
        }

        return inertia("Driver/EditDriver", compact('driver'));
    }

    public function update(StoreUpdateDriverRequest $request, Driver $driver, string|int $id)
    {
        $driver = $driver::find($id);

        if (!$driver) {
            return back();
        }
        $driver->update($request->validated());

        return redirect('/driver')->with('message', 'Motorista atualizado com sucesso.');
    }

    public function destroy(Driver $driver, string|int $id)
    {
        $driver = $driver::find($id);

        if (!$driver) {
            return back();
        }

        $driver->delete();
        return redirect('/driver');
    }
}
