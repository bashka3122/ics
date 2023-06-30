<?php

namespace App\Http\Controllers;

use App\Models\Staff;
use Illuminate\Http\Request;

class StaffController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        return Staff::get();
    }

    //Update
    public function update(Request $request, Staff $Staff)
    {
        $Staff->fill($request->all());
        $Staff->save();

        return response()->json([
            'status' => true,
            'data' => $Staff
        ]);
    }
    //store
    public function store(Request $request)
    {
        $Staff = new Staff;
        $Staff->fill($request->all());
        $Staff->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $Staff->id
            ]
        ]);
    }

    public function destroyMass(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        Staff::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
    public function destroy(Staff $delete)
    {
        $delete->delete();

        return response()->json([
            'status' => true
        ]);
    }
    public function show(Staff $Staff)
    {
        return response()->json([
            'data' => $Staff
        ]);
    }
}
