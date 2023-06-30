<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Payments;
use App\Models\Grants;
use App\Models\Tax;

class FunctionsCTR extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function selectOptions()
    {
        $projects = DB::select('SELECT name as label, name as value  
        from `projects` ');
        $school = DB::select('SELECT name as label, name as value  
        from `schools` ');
        $teachers = DB::select('SELECT name as label, name as value  
        from `teachers` ');
        $teacherbyproject = DB::select('SELECT teacher as label, project as value  
        from `asignprojects` ');
        $dist = DB::select('SELECT name as label, region as value  
        from `districts` ');
        return response()->json([
            'project' => $projects,
            'school' => $school,
            'teacher' => $teachers,
            'teacherbyproject' => $teacherbyproject,
            'district' => $dist

        ]);
    }
    //dashboard summary
    public function dashboard()
    {
        $projects = DB::select('SELECT id 
        from `projects` ');
        $school = DB::select('SELECT id 
        from `schools` ');
        $teachers = DB::select('SELECT id 
        from `teachers` ');
        $bedel = DB::select('SELECT id from `bedels` ');
        return response()->json([
            'project' => $projects,
            'school' => $school,
            'teacher' => $teachers,
            'bedel' => $bedel

        ]);
    }
}
