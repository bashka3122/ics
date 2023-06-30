<?php

namespace App\Http\Controllers;

use App\Models\Transfer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransferController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {

        return Transfer::get();
    }

    //Update
    public function update(Request $request, Transfer $Transfer)
    {
        $Transfer->fill($request->all());
        $Transfer->save();

        return response()->json([
            'status' => true,
            'data' => $Transfer
        ]);
    }
    //store
    public function store(Request $request)
    {
        $Transfer = new Transfer;
        $Transfer->fill($request->all());
        $r = $Transfer->region;
        $d = $Transfer->district;
        $v = $Transfer->village;
        $s = $Transfer->school;
        DB::update("Update teachers SET region='$r',district='$d',village='$v',school='$s'");

        $Transfer->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $Transfer->id
            ]
        ]);
    }

    public function destroyMass(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        Transfer::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
    public function destroy(Transfer $delete)
    {
        $delete->delete();

        return response()->json([
            'status' => true
        ]);
    }
    public function show(Transfer $Transfer)
    {
        return response()->json([
            'data' => $Transfer
        ]);
    }
}
