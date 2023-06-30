<?php

namespace App\Http\Controllers;

use App\Models\doc;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;

class DocController extends Controller
{

    public function index()
    {
        //
    }
    public function upload(Request $request)
    {
        $ID = $request->file_id;

        $fileUpload = new doc;
        $uploadedFile = $request->file;

        $file_name = time() . '_' . $request->file->getClientOriginalName();
        $request->file('file')->storeAs('uploads/teachers', $file_name, 'public');




        $fileUpload->file = $file_name;

        $fileUpload->name = $uploadedFile->getClientOriginalName();

        $fileUpload->mime = $uploadedFile->getMimeType();
        $fileUpload->size = $uploadedFile->getSize();
        $fileUpload->file_id = $ID;
        $fileUpload->save();
        return response()->json([
            'status' => true,
            'data' => $ID,
            'msg' => "Succesfully Uploaded"
        ]);
    }
    public function destroy($delete)
    {


        File::delete('storage/uploads/staff' . $delete);
        DB::delete("DELETE FROM doc WHERE file='$delete' ");
        return response()->json([
            'msg' => "Succesfully Deleted"
        ]);
    }
    public function show($id)
    {
        $data = doc::where('file_id', $id)->get();

        return response()->json([
            'data' => $data
        ]);
    }
}
