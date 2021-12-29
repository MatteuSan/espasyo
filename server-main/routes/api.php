<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ReportController;
use Illuminate\Support\Facades\Route;

Route::resource('post', PostController::class);
Route::get('/post/search/{query}', [PostController::class, 'search']);

Route::post('/report/{post_id}', [ReportController::class, 'store']);
