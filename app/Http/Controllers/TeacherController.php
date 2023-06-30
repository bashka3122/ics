<?php

namespace App\Http\Controllers;

use App\Models\asignproject;
use App\Models\teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeacherController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $teacher = teacher::with('file')->get();

        $teacher->each(function ($compan) {
            $compan->append('avatar');
        });
        //check status

        return response()->json([
            'data' => $teacher
        ]);
    }

    //Update
    public function update(Request $request, teacher $teacher)
    {
        $teacher->fill($request->all());
        $teacher->save();

        return response()->json([
            'status' => true,
            'data' => $teacher
        ]);
    }
    //store
    public function store(Request $request)
    {
        $teacher = new teacher;
        $teacher->fill($request->all());
        $salary = $request->salary;
        $project = $request->project;
        $t = $request->name;
        $teacher->save();
        $assign = asignproject::create([
            'teacher' => $t,
            'salary' => $salary,
            'project' => $project,
            'date' => now()
        ]);

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $teacher->id
            ]
        ]);
    }

    public function destroyMass(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        teacher::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
    public function destroy(teacher $delete)
    {
        $delete->delete();

        return response()->json([
            'status' => true
        ]);
    }
    public function show(teacher $teacher)
    {
        $teacher->append('avatar');
        $teacher->append('avatar_filename');
        return response()->json([
            'data' => $teacher
        ]);
    }
}
