<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class StoreUpdateVehicleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'model' => 'required|string|max:255',
            'renavam' => 'required|numeric|digits:12|unique:vehicles',
            'original_quilometration' => 'required|integer|min:0',
            'year' => 'required|integer|digits:4|min:1886|max:' . (date('Y') + 1),
            'aquisition' => 'required|date|before_or_equal:today',
        ];

        if ($this->method() === 'PUT') {
            $rules['renavam'] = [
                'required',
                'min:12',
                Rule::unique('vehicles')->ignore($this->id),
            ];
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'model.required' => 'O campo modelo é obrigatório.',
            'model.string' => 'O modelo deve ser uma string válida.',
            'model.max' => 'O modelo não pode ter mais que 255 caracteres.',

            'renavam.required' => 'O campo renavam é obrigatório.',
            'renavam.numeric' => 'O renavam deve conter apenas números.',
            'renavam.digits' => 'O renavam deve ter 12 dígitos.',
            'renavam.unique' => 'Este renavam já está cadastrado no sistema.',

            'original_quilometration.required' => 'A quilometragem original é obrigatória.',
            'original_quilometration.integer' => 'A quilometragem original deve ser um número inteiro.',
            'original_quilometration.min' => 'A quilometragem original não pode ser negativa.',

            'year.required' => 'O campo ano é obrigatório.',
            'year.integer' => 'O ano deve ser um número inteiro.',
            'year.digits' => 'O ano deve ter 4 dígitos.',
            'year.min' => 'O ano deve ser maior ou igual a 1886.',
            'year.max' => 'O ano não pode ser maior que o ano atual.',

            'aquisition.required' => 'A data de aquisição é obrigatória.',
            'aquisition.date' => 'A data de aquisição deve ser uma data válida.',
            'aquisition.before_or_equal' => 'A data de aquisição não pode ser superior a hoje.',
        ];
    }
}
