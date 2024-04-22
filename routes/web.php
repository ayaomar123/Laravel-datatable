<?php

use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('students', [StudentController::class, 'index']);
Route::get('students/list', [StudentController::class, 'getStudents'])->name('students.list');

Route::get('/test', function () {
    $beautymail = app()->make(Snowfire\Beautymail\Beautymail::class);
    $msg = "New message from :sendername ";
    $new_msg = str_replace(":sendername", "Ali", $msg);
    $beautymail->send('emails.welcome', ['data' => $new_msg], function ($message) {
        $message
            ->to('yotayot29@gmail.com', 'Aya Omar')
            ->subject('Welcome!');
    });

});
