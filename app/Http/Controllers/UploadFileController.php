<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\Routing\ResponseFactory;

class UploadFileController extends Controller
{
    public function index() {
        return view('upload');
     }
     public function uploadFile(Request $request) {
         var_dump($request->file('file'));
        $file = $request->file('file');
     
        //Display File Name
        echo 'File Name: '.$file->getClientOriginalName();
        echo '<br>';
     
        //Display File Extension
        echo 'File Extension: '.$file->getClientOriginalExtension();
        echo '<br>';
     
        //Display File Real Path
        echo 'File Real Path: '.$file->getRealPath();
        echo '<br>';
     
        //Display File Size
        echo 'File Size: '.$file->getSize();
        echo '<br>';
     
        //Display File Mime Type
        echo 'File Mime Type: '.$file->getMimeType();
     
        //Move Uploaded File
        $destinationPath = 'uploads';
        $file->move($destinationPath,$file->getClientOriginalName());
        return redirect('/');
     }
     public function getFiles(Request $request) {
        $result = [];
        foreach (\Illuminate\Support\Facades\Storage::files('uploads') as $filename) {
            $file = \Illuminate\Support\Facades\Storage::get($filename);
            array_push($result, $file);
        }
        $temp = json_encode($result);
        return response()->json($temp);
     }
}
