<?php

/*
  |--------------------------------------------------------------------------
  | Application Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register all of the routes for an application.
  | It's a breeze. Simply tell Laravel the URIs it should respond to
  | and give it the controller to call when that URI is requested.
  |
 */

Route::get('/', 'WelcomeController@index');
Route::get('home', 'HomeController@index');
Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);

//CATEGORIES
Route::get('categories/index','CategoriesController@index');

//CLIENTS
Route::get('clients/index','ClientsController@index');
Route::get('clients/', 'ClientsController@index');
Route::get('clients/create', 'ClientsController@create');
Route::post('clients/create', 'ClientsController@store');
Route::get('clients/{id}/edit', 'ClientsController@edit');
Route::post('clients/{id}/edit', 'ClientsController@update');
Route::get('clients/{id}/delete', 'ClientsController@delete');
Route::post('clients/{id}/delete', 'ClientsController@destroy');