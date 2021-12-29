<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;

class ReportController extends Controller {

    public function store(Request $request, $post_id): Report {
        $request->validate([
            'context' => 'max:255'
        ]);

        return Report::create([
            'post_id' => (int)$post_id,
            'context' => $request->context ?: 'No context provided.'
        ]);
    }
}
