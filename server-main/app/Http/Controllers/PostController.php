<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use Cache;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Collection;
use App\Models\Post;

class PostController extends Controller {

    public function index(): AnonymousResourceCollection {
        return PostResource::collection(Cache::remember('posts', 60*60*24, function () {
            return Post::all();
        }));
    }

    public function store(Request $request): Post {
        $request->validate([
            'body' => 'required|string|min:10',
        ]);

        return Post::create([
            'poster' => $request->poster ?: 'Anonymous',
            'body' => $request->body,
            'background' => $request->background ?: '#232323',
            'color' => $request->color ?: '#fff',
        ]);
    }

    public function show($id): Post {
        return Post::find($id)->first();
    }

    public function update(Request $request, int $id): Post {
        $post = Post::find($id);
        $post->update([
            'body' => $request->body ?: $post->body,
            'background' => $request->background ?: $post->background,
            'color' => $request->color ?: $post->color
        ]);

        return $post;
    }

    public function destroy(int $id): int {
        return Post::destroy($id);
    }

    public function search(string $query): Collection {
        return Post::where('body', 'like', '%' . $query . '%')->get();
    }

    public function like(int $id): Post {
        $post = Post::find($id);
        $currentLikes = $post->likes;

        return $post->update([
            'likes' => $currentLikes + 1,
        ]);
    }
}
