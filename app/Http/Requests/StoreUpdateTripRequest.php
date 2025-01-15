<?php

namespace App\Http\Requests;

use Illuminate\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use App\Models\Trip;

class StoreUpdateTripRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'vehicle_id' => 'required|exists:vehicles,id',
            'driver_ids' => 'required|exists:drivers,id',
            'initial_km' => 'required|integer|min:0',
            'final_km' => 'nullable|integer|gte:initial_km',
            'trip_date' => 'required'
        ];
    }
    public function messages()
    {
        return [
            'vehicle_id.required' => 'O campo veículo é obrigatório.',
            'vehicle_id.exists' => 'O veículo selecionado é inválido.',
            'driver_ids.required' => 'O campo motorista é obrigatório.',
            'driver_ids.exists' => 'O motorista selecionado é inválido.',
            'initial_km.required' => 'O campo quilometragem inicial é obrigatório.',
            'initial_km.integer' => 'O campo quilometragem inicial deve ser um número inteiro.',
            'initial_km.min' => 'O campo quilometragem inicial deve ser no mínimo 0.',
            'final_km.integer' => 'O campo quilometragem final deve ser um número inteiro.',
            'final_km.min' => 'O campo quilometragem final deve ser igual ou superior à quilometragem inicial.',
        ];
    }
    // public function withValidator(Validator $validator)
    // {
    //     $validator->after(function ($validator) {
    //         $vehicleId = $this->input('vehicle_id');
    //         $driverIds = $this->input('driver_ids');

    //         if (Trip::where('vehicle_id', $vehicleId)->whereNull('final_km')->exists()) {
    //             $validator->errors()->add('vehicle_id', 'O veículo selecionado está em uma viagem não finalizada.');
    //         }

    //         foreach ($driverIds as $driverId) {
    //             if (Trip::whereHas('drivers', function ($query) use ($driverId) {
    //                 $query->where('driver_id', $driverId);
    //             })->whereNull('final_km')->exists()) {
    //                 $validator->errors()->add('driver_ids', 'Um dos motoristas selecionados está em uma viagem não finalizada.');
    //             }
    //         }
    //     });
    // }
}
