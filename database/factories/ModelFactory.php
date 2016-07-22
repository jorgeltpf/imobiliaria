<?php

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'password' => str_random(10),
        'password_confirmation' => str_random(10),
        //'remember_token' => str_random(10),
    ];
});