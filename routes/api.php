<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentsController;
;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
    //Route::get('crud/list', [TodoController::class, 'list']);
});

Route::get('update/', [TodoController::class, 'update']);
//Route::post('/register', 'Api\V1\PaymentsController@register');
Route::get('getDate', [PaymentsController::class, 'getDate']);
Route::get('sum', [PaymentsController::class, 'sum']);