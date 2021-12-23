<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::resource('post', PostController::class);
Route::get('/post/search/{query}', [PostController::class, 'search']);

// Route::group(['middleware' => 'auth:sanctum'], function () {
//     //
// });
