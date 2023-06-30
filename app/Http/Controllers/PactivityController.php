<?php

namespace App\Http\Controllers;

use App\Models\pactivity;
use Illuminate\Http\Request;

class PactivityController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        return pactivity::get();
    }
    public function store(Request $request)
    {
        $pactivity = new pactivity;
        $pactivity->fill($request->all());
        $pactivity->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $pactivity->id
            ]
        ]);
    }

    //Update
    public function update(Request $request, pactivity $pactivity)
    {
        $pactivity->fill($request->all());
        $pactivity->save();

        return response()->json([
            'status' => true,
            'data' => $pactivity
        ]);
    }
    public function destroyMass(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        pactivity::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
    public function destroy(pactivity $delete)
    {
        $delete->delete();

        return response()->json([
            'status' => true
        ]);
    }
    public function show(pactivity $pactivity)
    {
        return response()->json([
            'data' => $pactivity
        ]);
    }
    public function showCode($id)
    {
        $data = pactivity::where('pname', $id)->first();
        return response()->json([
            'data' => $data
        ]);
    }
}
