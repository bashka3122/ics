<?php

namespace App\Http\Controllers;

use App\Models\school;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SchoolController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $school = school::with('file')->get();

        $school->each(function ($compan) {
            $compan->append('avatar');
        });
        //check status

        return response()->json([
            'data' => $school
        ]);
        return school::get();
    }
    public function userStore(Request $req)
    {
        $name = $req->name;
        $email = $req->email;

        $type = "school";
        $password = bcrypt($req->password);
        $id = $req->id;
        $sid = DB::select("SELECT * FROM users WHERE sid='$id'  limit 1");

        if ($sid) {
            DB::update("UPDATE users SET email='$email', name='$name', password='$password' WHERE sid='$id'");
            return response()->json([
                'status' => false,
                'id' => $id,
                'msg' => "User Data Updated"
            ]);
        } else {
            DB::insert("INSERT INTO users(name,email,password,sid,type) VALUES('$name','$email','$password','$id','$type) ");
            return response()->json([
                'status' => true,
                'id' => $id,
                'msg' => "User Data Created"
            ]);
        }
    }
    //Update
    public function update(Request $request, school $school)
    {
        $school->fill($request->all());
        $school->save();

        return response()->json([
            'status' => true,
            'data' => $school
        ]);
    }
    //store
    public function store(Request $request)
    {
        $school = new school;
        $school->fill($request->all());
        $school->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $school->id
            ]
        ]);
    }

    public function destroyMass(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        school::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
    public function destroy(school $delete)
    {
        $delete->delete();

        return response()->json([
            'status' => true
        ]);
    }
    public function show(school $school)
    {
        return response()->json([
            'data' => $school
        ]);
    }
}
