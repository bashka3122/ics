<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Http\Requests\FileUploadRequest;
use Illuminate\Http\Request;

class FilesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Handle an upload & store model instance
     *
     * @param FileUploadRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store( Request $request ) {
        $uploadedFile = $request->file('file');

        if (!$uploadedFile->isValid()) {
            abort( 422 );
        }
       // $storePath ='/avatars/' . uniqid() . '.' . $uploadedFile->extension();
       $storePath = $uploadedFile->store('public/uploads');
        //$name = 
        
        
        $file = new File;
       
        $file->name = $uploadedFile->getClientOriginalName();
        $file->file = $storePath;
        $file->mime = $uploadedFile->getMimeType();
        $file->size = $uploadedFile->getSize();

        $file->save();

        return response()->json([
            'status' => true,
            'data' => $file
        ]);
    }
}
