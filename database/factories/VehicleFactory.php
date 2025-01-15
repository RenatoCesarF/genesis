<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Ramsey\Uuid\Type\Integer;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class VehicleFactory extends Factory
{

    public function definition(): array
    {
        return [
            'model' => fake()->firstNameMale(),
            'renavam' => Str::random(12),
            'original_quilometration' => random_int(100, 3000),
            'year' => random_int(1930, 2025),
            'aquisition' => fake()->date(),
        ];
    }
}
