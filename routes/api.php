<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');

Route::group(['middleware' => 'auth:api'], function(){
    Route::post('details', 'API\UserController@details');
});

Route::apiResources([
    'cinema' => 'CinemaController',
    'hall' => 'HallController',
    'film-format' => 'FilmFormatController',
    'actor' => 'ActorController',
    'director' => 'DirectorController',
    'genre' => 'GenreController',
    'country' => 'CountryController',
    'age-limit' => 'AgeLimitController',
]);

Route::delete('/hall', 'HallController@batchDelete');
Route::delete('/actor', 'ActorController@batchDelete');
Route::delete('/director', 'DirectorController@batchDelete');
Route::delete('/genre', 'GenreController@batchDelete');
Route::delete('/country', 'CountryController@batchDelete');
Route::delete('/film-format', 'FilmFormatController@batchDelete');
Route::delete('/age-limit', 'AgeLimitController@batchDelete');
