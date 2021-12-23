<?php

namespace App\Providers;

use App\Models\Post;
use App\Observers\PostObserver;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider {

    public function register() {
        //
    }

    public function boot() {
        JsonResource::withoutWrapping();
        Post::observe(PostObserver::class);
    }
}
