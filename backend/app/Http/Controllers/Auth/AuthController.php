<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Models\User;


class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }
    
    function register(Request $request){
        // Validation des données saisies par l'utilisateur
        $data = $request->validate([
            "firstName" => ["required", "string"],
            "lastName" => ["required", "string"],
            "email" => ["required", "email", "unique:clients,email"],
            "password" => ["required", "string"],

        ]);

        // Hachage du mot de passe saisi par l'utilisateur
        $data['password'] = bcrypt($request->password);

        // Création de l'utilisateur en BDD
        $user = User::create($data);

        // Création du Token de l'utilisateur
        $token = $user->createToken('API Token')->accessToken;

        // Réponse envoyé à l'utilisateur
        return response(['user' => $user, 'token' => $token], 201);

    }

    function login(Request $request){

        $user= User::where('email', $request->email)->first();
        // print_r($data);
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'message' => ['These credentials do not match our records.']
                ], 404);
            }
        
           

            $rememberMe = $request->has('remember_me');

            // Set the token expiration time based on the rememberMe checkbox
            $expiration = $rememberMe ? now()->addMonth() : null;
    

            $token = $user->createToken('my-app-token', ['expires_at' => $expiration])->plainTextToken;
            
        
            $response = [
                'user' => $user,
                'token' => $token
            ];
        
             return response($response, 201);

    }


    function logout(Request $request){

        $validateUser = $request->validate(
            [
                'email' => ["required", "string"],
                'password' => ["required", "string"]
            ]);


        if (!filter_var($validateUser['email'], FILTER_VALIDATE_EMAIL)) {
           return true;
        }
    }


    function user(){

        $users = User::all();
        // On retourne les informations des villes en JSON
        return response()->json($users);
    

    }
}