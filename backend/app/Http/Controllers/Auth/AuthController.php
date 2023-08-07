<?php

namespace App\Http\Controllers\Auth;
use DateTimeImmutable;
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\ValidationData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cookie;
use App\Models\User;


class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }


    public function generateJWT($user) {
        $config = Configuration::forSymmetricSigner(
            new Sha256(),
            InMemory::plainText('N]9V9~h+8GB3]w)D2-sA5e@$kFr^4tLz')
        );
    
        $now = new DateTimeImmutable();

    
        $token = $config->builder()
        ->issuedBy('http://localhost:5173')
        ->permittedFor('http://localhost:5173')
        ->identifiedBy('token_id', true)
        ->issuedAt($now)
        ->expiresAt($now->modify('+1 hour'))
        ->withClaim('user_id', $user->id)
        ->withClaim('email', $user->email)
        ->withClaim('firstname', $user->firstname)
        ->withClaim('lastname', $user->lastname)
        ->withClaim('role', $user->role)
        ->withClaim('tag', $user->tags)
        ->withClaim('status', $user->status)
        ->getToken($config->signer(), $config->signingKey());
    
       return $token->toString();
    }
    
    function register(Request $request){
        // Validation des données saisies par l'utilisateur
        $data = $request->validate([
            "firstname" => ["required", "string"],
            "lastname" => ["required", "string"],
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
            $token = $this->generateJWT($user);
            $response = [
                'user' => $user,
                'token' => $token
            ];
            $expirationInSeconds = 3600;
            $cookie = Cookie::make('jwt_token', $token, $expirationInSeconds, null, null,null, false, true,false,null); // Le dernier paramètre true indique que c'est un cookie HTTP-only
            // return response($response, 201)->withCookie($cookie);
            // apfpoezjfozjofzajpofjzapofzajofzjfpoezofjzpofef
    }


    function logout(Request $request){

        auth('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['status' => true, 'message' => 'logged out']);
    }


   
    public function userProfile() {
       


    if (Auth::check()) {
        // Récupérez l'utilisateur connecté
        $user = Auth::user();

        // Accédez aux données spécifiques de l'utilisateur
    
        // ... et d'autres données

        // Retournez les données sous forme de réponse JSON
        return response()->json([
            'id' => $user->id,
        'firstname' => $user->name,
        'lastname' => $user->name,
        'pseudo'=>$user->pseudo,
        'email' => $user->email,
        'role'=>$user->role,
        'tag'=>$user->tag,
        'status' =>$user->status
            // ... et d'autres données
        ]);
    } else {
        // L'utilisateur n'est pas authentifié, renvoyez une réponse appropriée
        return response()->json(['message' => 'Utilisateur non authentifié'], 401);
    }
    
    }


    function user(){

        $users = User::all();
        // On retourne les informations des villes en JSON
        return response()->json($users);
    

    }
}