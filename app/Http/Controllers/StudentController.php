<?php

namespace App\Http\Controllers;

use App\Models\student;
use Illuminate\Http\Request;

class StudentController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $student = student::with('file')->get();

        $student->each(function ($std) {
            $std->append('avatar');
        });
        //check status

        return response()->json([
            'data' => $student
        ]);
    }

    //Update
    public function update(Request $request, student $student)
    {
        $student->fill($request->all());
        $student->save();

        return response()->json([
            'status' => true,
            'data' => $student
        ]);
    }
    //store
    public function store(Request $request)
    {
        $student = new student;
        $student->fill($request->all());

        $student->save();


        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $student->id
            ]
        ]);
    }

    public function destroyMass(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        student::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
    public function destroy(student $delete)
    {
        $delete->delete();

        return response()->json([
            'status' => true
        ]);
    }
    public function show(student $student)
    {
        $student->append('avatar');
        $student->append('avatar_filename');
        return response()->json([
            'data' => $student
        ]);
    }
}
