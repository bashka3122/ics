<?php

namespace App\Http\Controllers;

use App\Models\Budgetline;
use Illuminate\Http\Request;

class BudgetlineController extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        return Budgetline::get();
    }

//Update
    public function update(Request $request, Budgetline $Budgetline ) {
    $Budgetline->fill($request->all());
    $Budgetline->save();

    return response()->json([
        'status' => true,
        'data' => $Budgetline
    ]);
}
//store
    public function store( Request $request ) {
    $Budgetline = new Budgetline;
    $Budgetline->fill($request->all());
    $Budgetline->save();

    return response()->json([
        'status' => true,
        'created' => true,
        'data' => [
            'id' => $Budgetline->id
        ]
    ]);
}

    public function destroyMass( Request $request ) {
        $request->validate([
            'ids' => 'required|array'
        ]);

        Budgetline::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
    public function destroy(Budgetline $delete ) {
        $delete->delete();

        return response()->json([
            'status' => true
        ]);
    }
   public function show(Budgetline $Budgetline) {
        return response()->json([
            'data' =>$Budgetline
        ]);
    }   

}
