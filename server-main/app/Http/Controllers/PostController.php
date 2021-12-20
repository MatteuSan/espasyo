<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use App\Models\Post;

class PostController extends Controller {

    public function index(): Collection {
        return Post::all();
    }

    public function store(Request $request): Post {
        $request->validate([
            'body' => 'required|string|min:10',
        ]);

        return Post::create([
            'user_id' => 1,
            'body'    => $request->body,
            'likes'   => 0,
        ]);
    }

    public function show($user, $id) {
        //
    }

    public function update(Request $request, int $id): Post {
        $post = Post::find($id);
        $post->update([
            'body' => $request->body,
        ]);

        return $post;
    }

    public function destroy(int $id): int {
        return Post::destroy($id);
    }

    public function search(string $query) {
        return Post::where('body', 'like', '%' . $query . '%')->get();
    }

    public function like(int $id) {
        $post = Post::find($id);
        $currentLikes = $post->likes;
        return $post->update([
            'likes' => $currentLikes + 1
        ]);
    }
}
