<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource {

    public function toArray($request) {
        return [
            'poster' => $this->poster,
            'body' => $this->body,
            'background' => $this->background,
            'color' => $this->color,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
