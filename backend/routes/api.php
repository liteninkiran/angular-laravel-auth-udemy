<?php

Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers',
], function () {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});
