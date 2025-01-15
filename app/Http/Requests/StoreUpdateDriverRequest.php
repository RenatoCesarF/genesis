<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Carbon\Carbon;
use Illuminate\Validation\Rule;

class StoreUpdateDriverRequest extends FormRequest
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
    public function rules()
    {
        $rules = [
            'name' => 'required|string|max:255',
            'birthdate' => 'required|date|before_or_equal:' . Carbon::now()->subYears(18)->toDateString(),
            'cnh' => 'required|numeric|min:20|unique:drivers,cnh',
        ];

        if ($this->isMethod('put')) {
            $rules['cnh'] = [
                'required',
                'numeric',
                'min:20',
                Rule::unique('drivers')->ignore($this->id),

            ];
        }
        return $rules;
    }

    public function messages()
    {
        return [
            'name.required' => 'O nome é obrigatório.',
            'name.string' => 'O nome deve ser uma string válida.',
            'name.max' => 'O nome não pode ter mais que 255 caracteres.',

            'birthdate.required' => 'A data de nascimento é obrigatória.',
            'birthdate.date' => 'A data de nascimento deve ser uma data válida.',
            'birthdate.before_or_equal' => 'O motorista deve ter 18 anos ou mais.',

            'cnh.required' => 'O número da CNH é obrigatório.',
            'cnh.numeric' => 'A CNH deve conter apenas números.',
            'cnh.min' => 'A CNH deve ter no mínimo 20 caracteres.',
            'cnh.unique' => 'Este número de CNH já está cadastrado no sistema.',
        ];
    }
}
