<?php

use App\Http\Controllers\Api\HotelController;
use App\Http\Controllers\Api\ProductController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ProductController::class)->group(function () {
    Route::get('products', 'index');
    Route::post('product', 'store');
    Route::get('product/{id}', 'show');
    Route::put('product/{id}', 'update');
    Route::delete('product/{id}', 'destroy');
});
Route::controller(HotelController::class)->group(function () {
    Route::get('/hotels', 'index');
    Route::get('/hotel/{id}', 'show');
});
// Route::get('/hotels/{id}', [HotelController::class, 'show']);
// Route::get('hotels', 'index');
