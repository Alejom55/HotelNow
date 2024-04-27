<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $filePath = storage_path('DB.json');

        if (file_exists($filePath)) {
            $jsonData = file_get_contents($filePath);

            $hotels = json_decode($jsonData, true);

            return response()->json($hotels);
        } else {
            return response()->json(['error' => 'JSON file not found'], 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $filePath = storage_path('DB.json');

        if (file_exists($filePath)) {
            $jsonData = file_get_contents($filePath);
            $hotels = json_decode($jsonData, true);

            $foundHotel = null;
            foreach ($hotels as $hotel) {
                if ($hotel['id'] == $id) {
                    $foundHotel = $hotel;
                    break;
                }
            }

            if ($foundHotel) {
                return response()->json($foundHotel);
            } else {
                return response()->json(['error' => 'Hotel not found'], 404);
            }
        } else {
            return response()->json(['error' => 'JSON file not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
