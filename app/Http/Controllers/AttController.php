<?php

namespace App\Http\Controllers;

use App\Models\att;
use Illuminate\Http\Request;

class AttController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $att = att::with('file')->get();

        $att->each(function ($compan) {
            $compan->append('avatar');
        });
        //check status

        return response()->json([
            'data' => $att
        ]);
    }

    //Update
    public function update(Request $request, att $att)
    {
        $att->fill($request->all());
        $att->save();

        return response()->json([
            'status' => true,
            'data' => $att
        ]);
    }
    //store
    public function store(Request $request)
    {
        $att = new att;
        $att->fill($request->all());
        $att->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $att->id
            ]
        ]);
    }

    public function destroyMass(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        att::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
    public function destroy(att $delete)
    {
        $delete->delete();

        return response()->json([
            'status' => true
        ]);
    }
    public function show(att $att)
    {
        $att->append('avatar');
        $att->append('avatar_filename');
        return response()->json([
            'data' => $att
        ]);
    }
}
