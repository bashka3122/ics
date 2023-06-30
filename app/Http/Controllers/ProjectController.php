<?php

namespace App\Http\Controllers;

use App\Models\project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {

        return project::get();
    }

    //Update
    public function update(Request $request, project $project)
    {
        $project->fill($request->all());
        $project->save();

        return response()->json([
            'status' => true,
            'data' => $project
        ]);
    }
    //store
    public function store(Request $request)
    {
        $project = new project;
        $project->fill($request->all());
        $project->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $project->id
            ]
        ]);
    }

    public function destroyMass(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        project::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
    public function destroy(project $delete)
    {
        $delete->delete();

        return response()->json([
            'status' => true
        ]);
    }
    public function show(project $project)
    {
        return response()->json([
            'data' => $project
        ]);
    }
}
