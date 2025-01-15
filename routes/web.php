<?php

use App\Http\Controllers\DriverController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\TripController;
use Illuminate\Support\Facades\Route;

// Vehicles
Route::redirect('/', '/vehicle');

Route::get('/vehicle', [VehicleController::class, 'index']);
Route::get('/vehicle/create', [VehicleController::class, 'create']);
Route::get('/vehicle/edit/{id}', [VehicleController::class, 'edit']);
Route::get('/vehicle/{id}', [VehicleController::class, 'show']);

Route::put('/vehicle/{id}', [VehicleController::class, 'update']);
Route::delete('/vehicle/{id}', [VehicleController::class, 'destroy']);
Route::post('/vehicle', [VehicleController::class, 'store']);
Route::get('/vehicle/{id}/last-km', [VehicleController::class, 'lastKm']);

// Drivers
Route::get('/driver', [DriverController::class, 'index']);
Route::get('/driver/create', [DriverController::class, 'create']);
Route::get('/driver/edit/{id}', [DriverController::class, 'edit']);
Route::get('/driver/{id}', [DriverController::class, 'show']);

Route::put('/driver/{id}', [DriverController::class, 'update']);
Route::delete('/driver/{id}', [DriverController::class, 'destroy']);
Route::post('/driver', [DriverController::class, 'store']);

// Trips
Route::get('/trip', [TripController::class, 'index']);
Route::get('/trip/create', [TripController::class, 'create']);
Route::get('/trip/edit/{id}', [TripController::class, 'edit']);
Route::get('/trip/{id}', [TripController::class, 'show']);

Route::put('/trip/{trip}', [TripController::class, 'update']);
Route::delete('/trip/{id}', [TripController::class, 'destroy']);
Route::post('/trip', [TripController::class, 'store']);
