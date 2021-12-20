<?php

use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::post('/auth/register', [UserController::class, 'register']);
Route::post('/auth/login', [UserController::class, 'login']);

Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{id}', [PostController::class, 'show']);
Route::get('/posts/search/{query}', [PostController::class, 'search']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('/auth/logout', [UserController::class, 'logout']);

    Route::post('/posts', [PostController::class, 'store']);
    Route::put('/posts/{id}', [PostController::class, 'update']);
    Route::delete('/posts/{id}', [PostController::class, 'destroy']);

    Route::put('/post/like/{id}', [PostController::class, 'like']);
});

