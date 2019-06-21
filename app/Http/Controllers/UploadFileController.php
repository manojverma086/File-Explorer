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
        $res = ["success"];
        return response()->json(null);
     }
     public function getFiles(Request $request) {
        $result = [];
        if ($handle = opendir(public_path('uploads'))) {

            while (false !== ($entry = readdir($handle))) {
                if ($entry != "." && $entry != "..") {
                    array_push($result, $entry);
                }
            }
            closedir($handle);
        }
        $temp = json_encode($result);
        return response()->json($temp);
     }
}
