<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request): Response {
        $query = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'name' => $query['name'],
            'email' => $query['email'],
            'password' => bcrypt($query['password'])
        ]);

        $token = $user->createToken('randombullshitgo')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function login(Request $request): Response {

        $query = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $query['email'])->first();

        if (!$user || !Hash::check($query['password'], $user->password)) {
            return response([
                'message' => 'Bad credential request.'
            ], 401);
        }

        $token = $user->createToken('randombullshitgo')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function logout(): array {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'Successfully logged out.'
        ];
    }
}
