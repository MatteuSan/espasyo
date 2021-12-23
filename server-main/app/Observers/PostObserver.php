<?php

namespace App\Observers;

use App\Models\Post;
use Cache;

class PostObserver {

    public function created(Post $post) {
        Cache::forget('posts');
    }

    public function updated(Post $post) {
        Cache::forget('posts');
    }

    public function deleted(Post $post) {
        Cache::forget('posts');
    }
}
