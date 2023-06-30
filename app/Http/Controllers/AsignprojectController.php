<?php

namespace App\Http\Controllers;

use App\Models\asignproject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AsignprojectController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {

        return asignproject::get();
    }

    //Update
    public function update(Request $request, asignproject $asignproject)
    {
        $asignproject->fill($request->all());
        $asignproject->save();

        return response()->json([
            'status' => true,
            'data' => $asignproject
        ]);
    }
    //store
    public function store(Request $request)
    {
        $asignproject = new asignproject;
        $asignproject->fill($request->all());
        $project = $request->project;
        $teacher = $request->teacher;
        $invalid = DB::table('asignprojects')
            ->where('project', $project)
            ->where('teacher', $teacher)
            ->sum('id');
        if ($invalid) {
            return response()->json([
                'status' => false,

            ]);
        } else {
            $asignproject->save();

            return response()->json([
                'status' => true,
                'created' => true,
                'data' => [
                    'id' => $asignproject->id,
                    'project' => $project,
                    'teacher' => $project,
                    'invalid' => $invalid,
                ]
            ]);
        }
    }

    public function destroyMass(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        asignproject::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
    public function destroy(asignproject $delete)
    {
        $delete->delete();

        return response()->json([
            'status' => true
        ]);
    }
    public function show(asignproject $asignproject)
    {
        return response()->json([
            'data' => $asignproject
        ]);
    }
}
