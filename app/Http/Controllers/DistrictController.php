<?php

namespace App\Http\Controllers;

use App\Models\district;
use Illuminate\Http\Request;

class DistrictController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {

        return district::get();
    }

    //Update
    public function update(Request $request, district $district)
    {
        $district->fill($request->all());
        $district->save();

        return response()->json([
            'status' => true,
            'data' => $district
        ]);
    }
    //store
    public function store(Request $request)
    {
        $district = new district;
        $district->fill($request->all());
        $district->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $district->id
            ]
        ]);
    }

    public function destroyMass(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        district::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
    public function destroy(district $delete)
    {
        $delete->delete();

        return response()->json([
            'status' => true
        ]);
    }
    public function show(district $district)
    {
        return response()->json([
            'data' => $district
        ]);
    }
}
