<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//Route::get('filemanager', [App\Http\Controllers\FileManagerController::class, 'index']);
/*
 * Clients management
 * */





//schools

Route::prefix('/school')->group(function () {
    Route::get('/', [\App\Http\Controllers\SchoolController::class, 'index']);
    Route::get('/{school}', [\App\Http\Controllers\SchoolController::class, 'show']);
    Route::post('/Store', [\App\Http\Controllers\SchoolController::class, 'store']);
    Route::post('/userStore', [\App\Http\Controllers\SchoolController::class, 'userStore']);
    Route::patch('/{school}', [\App\Http\Controllers\SchoolController::class, 'update']);
    Route::delete('/{delete}/destroy', [\App\Http\Controllers\SchoolController::class, 'destroy']);
    Route::post('/destroy', [\App\Http\Controllers\SchoolController::class, 'destroyMass']);
});
Route::prefix('/student')->group(function () {
    Route::get('/', [\App\Http\Controllers\StudentController::class, 'index']);
    Route::get('/{student}', [\App\Http\Controllers\StudentController::class, 'show']);
    Route::post('/Store', [\App\Http\Controllers\StudentController::class, 'store']);
    Route::post('/userStore', [\App\Http\Controllers\StudentController::class, 'userStore']);
    Route::patch('/{student}', [\App\Http\Controllers\StudentController::class, 'update']);
    Route::delete('/{delete}/destroy', [\App\Http\Controllers\StudentController::class, 'destroy']);
    Route::post('/destroy', [\App\Http\Controllers\StudentController::class, 'destroyMass']);
});
//projects
Route::prefix('/project')->group(function () {
    Route::get('/', [\App\Http\Controllers\ProjectController::class, 'index']);
    Route::get('/{project}', [\App\Http\Controllers\ProjectController::class, 'show']);
    Route::post('/Store', [\App\Http\Controllers\ProjectController::class, 'store']);
    Route::patch('/{project}', [\App\Http\Controllers\ProjectController::class, 'update']);
    Route::delete('/{delete}/destroy', [\App\Http\Controllers\ProjectController::class, 'destroy']);
    Route::post('/destroy', [\App\Http\Controllers\ProjectController::class, 'destroyMass']);
});
//selectOptions
Route::prefix('/setting')->group(function () {
    Route::get('/select', [\App\Http\Controllers\FunctionsCTR::class, 'selectOptions']);
    Route::get('/dash', [\App\Http\Controllers\FunctionsCTR::class, 'dashboard']);
    Route::post('/Store', [\App\Http\Controllers\ProjectController::class, 'store']);
    Route::patch('/{project}', [\App\Http\Controllers\ProjectController::class, 'update']);
    Route::delete('/{delete}/destroy', [\App\Http\Controllers\ProjectController::class, 'destroy']);
    Route::post('/destroy', [\App\Http\Controllers\ProjectController::class, 'destroyMass']);
});
//TeacherController
Route::prefix('/teacher')->group(function () {
    Route::get('/', [\App\Http\Controllers\TeacherController::class, 'index']);

    Route::get('/{teacher}', [\App\Http\Controllers\TeacherController::class, 'show']);
    Route::post('/Store', [\App\Http\Controllers\TeacherController::class, 'store']);
    Route::patch('/{teacher}', [\App\Http\Controllers\TeacherController::class, 'update']);
    Route::delete('/{delete}/destroy', [\App\Http\Controllers\TeacherController::class, 'destroy']);
    Route::post('/destroy', [\App\Http\Controllers\TeacherController::class, 'destroyMass']);
});

//DistrictController
Route::prefix('/setting/district')->group(function () {
    Route::get('/', [\App\Http\Controllers\DistrictController::class, 'index']);
    Route::get('/{district}', [\App\Http\Controllers\DistrictController::class, 'show']);
    Route::post('/Store', [\App\Http\Controllers\DistrictController::class, 'store']);
    Route::patch('/{district}', [\App\Http\Controllers\DistrictController::class, 'update']);
    Route::delete('/{delete}/destroy', [\App\Http\Controllers\DistrictController::class, 'destroy']);
    Route::post('/destroy', [\App\Http\Controllers\DistrictController::class, 'destroyMass']);
});

Route::prefix('/docs')->group(function () {

    Route::get('/', [\App\Http\Controllers\DocController::class, 'index']);
    Route::get('/{id}', [\App\Http\Controllers\DocController::class, 'show']);


    Route::post('/store', [\App\Http\Controllers\DocController::class, 'upload']);

    Route::get('/{delete}/destroy', [\App\Http\Controllers\DocController::class, 'destroy']);
    Route::post('/destroy', [\App\Http\Controllers\DocController::class, 'destroyMass']);
});
//attendance
Route::prefix('/att')->group(function () {
    Route::get('/', [\App\Http\Controllers\AttController::class, 'index']);

    Route::get('/{att}', [\App\Http\Controllers\AttController::class, 'show']);
    Route::post('/Store', [\App\Http\Controllers\AttController::class, 'store']);
    Route::patch('/{att}', [\App\Http\Controllers\AttController::class, 'update']);
    Route::delete('/{delete}/destroy', [\App\Http\Controllers\AttController::class, 'destroy']);
    Route::post('/destroy', [\App\Http\Controllers\AttController::class, 'destroyMass']);
});
//bedel
Route::prefix('/bedel')->group(function () {
    Route::get('/', [\App\Http\Controllers\BedelController::class, 'index']);

    Route::get('/{bedel}', [\App\Http\Controllers\BedelController::class, 'show']);
    Route::post('/Store', [\App\Http\Controllers\BedelController::class, 'store']);
    Route::patch('/{bedel}', [\App\Http\Controllers\BedelController::class, 'update']);
    Route::delete('/{delete}/destroy', [\App\Http\Controllers\BedelController::class, 'destroy']);
    Route::post('/destroy', [\App\Http\Controllers\BedelController::class, 'destroyMass']);
});
//asign
Route::prefix('/asignproject')->group(function () {
    Route::get('/', [\App\Http\Controllers\AsignprojectController::class, 'index']);

    Route::get('/{asignproject}', [\App\Http\Controllers\AsignprojectController::class, 'show']);
    Route::post('/Store', [\App\Http\Controllers\AsignprojectController::class, 'store']);
    Route::patch('/{asignproject}', [\App\Http\Controllers\AsignprojectController::class, 'update']);
    Route::delete('/{delete}/destroy', [\App\Http\Controllers\AsignprojectController::class, 'destroy']);
    Route::post('/destroy', [\App\Http\Controllers\AsignprojectController::class, 'destroyMass']);
});
//TransferController
Route::prefix('/transfer')->group(function () {
    Route::get('/', [\App\Http\Controllers\TransferController::class, 'index']);

    Route::get('/{Transfer}', [\App\Http\Controllers\TransferController::class, 'show']);
    Route::post('/Store', [\App\Http\Controllers\TransferController::class, 'store']);
    Route::patch('/{Transfer}', [\App\Http\Controllers\TransferController::class, 'update']);
    Route::delete('/{delete}/destroy', [\App\Http\Controllers\TransferController::class, 'destroy']);
});
/*
 * Current user
 * */
Route::prefix('/user')->group(function () {
    Route::get('/', [\App\Http\Controllers\CurrentUserController::class, 'show']);
    Route::patch('/', [\App\Http\Controllers\CurrentUserController::class, 'update']);
    Route::patch('/password', [\App\Http\Controllers\CurrentUserController::class, 'updatePassword']);
});

/*
 * File upload (e.g. avatar)
 * */
Route::post('/files/store', [\App\Http\Controllers\FilesController::class, 'store']);
