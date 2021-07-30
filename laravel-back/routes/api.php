<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\IpController;
use App\Http\Controllers\AuthController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Auth::routes();
Route::group([

    'middleware' => 'api',
    // 'middleware' => 'auth:api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('jwt.verify');;
    Route::post('refresh', [AuthController::class, 'refresh'])->middleware('jwt.verify');;
    Route::post('me', [AuthController::class, 'me'])->middleware('jwt.verify');;

});

Route::resource('ips', IpController::class);

Route::any('{any}', function(){
    return response()->json([
    	'status' => 'error',
        'message' => 'Resource not found'], 404);
})->where('any', '.*');;
