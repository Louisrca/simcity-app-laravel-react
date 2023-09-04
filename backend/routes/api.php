<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CsrfTokenController;
use App\Http\Controllers\Tables\BTSController;
use App\Http\Controllers\Charts\BTSChartsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});





// User
Route::post("/user/login", [AuthController::class, "login"]);
Route::get("/user",[AuthController::class,"user"]);
Route::get("/csrf-token", [CsrfTokenController::class, "getCsrfToken"]);
Route::post("/user/logout", [AuthController::class, "logout"]);
Route::middleware(['auth:sanctum'])->get("/user/me", [AuthController::class, "me"]);

//Tables BTS
Route::middleware(['auth:sanctum'])->get("/table/all-bts", [BTSController::class, "index"]);
Route::middleware(['auth:sanctum'])->post("/table/edit-bts-table", [BTSController::class, "EditTable"]);
Route::middleware(['auth:sanctum'])->get("/table/store-by-id/{code_site}", [BTSController::class, "StoreById"]);


//Charts BTS
Route::middleware(['auth:sanctum'])->get("/chart/chart-bts", [BTSChartsController::class, "index"]);