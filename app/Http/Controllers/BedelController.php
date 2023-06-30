<?php

namespace App\Http\Controllers;

use App\Models\bedel;
use App\Models\teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BedelController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {

        return bedel::get();
    }

    //Update
    public function update(Request $request, bedel $bedel)
    {
        $bedel->fill($request->all());
        $bedel->save();

        return response()->json([
            'status' => true,
            'data' => $bedel
        ]);
    }
    //store
    public function store(Request $request)
    {
        $bedel = new teacher;
        $bedel->fill($request->all());
        $bedel->save();
        $pteacher = $request->pteacher;
        $salary = $request->salary;
        $teacher = $request->name;
        $project = $request->project;
        $data = [];

        $bedel = bedel::create([
            'pteacher' => $pteacher,
            'nteacher' => $teacher,
            'project' => $project,
            'sdate' => now()
        ]);
        DB::update("UPDATE asignprojects SET teacher='$teacher', salary='$salary' WHERE project='$project'");
        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $bedel->id,
                'pteacher' => $pteacher,
                'teacher' => $teacher,
                'project' => $project,
                'salary' => $salary,
            ]
        ]);
    }

    public function destroyMass(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        bedel::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
    public function destroy(bedel $delete)
    {
        $delete->delete();

        return response()->json([
            'status' => true
        ]);
    }
    public function show(bedel $bedel)
    {
        return response()->json([
            'data' => $bedel
        ]);
    }
}
