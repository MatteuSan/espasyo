<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration {

    public function up() {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('poster');
            $table->string('body');
            $table->string('background');
            $table->string('color');
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('posts');
    }
}
