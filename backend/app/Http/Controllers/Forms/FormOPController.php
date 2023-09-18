<?php 

namespace App\Http\Controllers\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Forms\Analyse_operation_audit;


class FormOPController extends Controller{
    public function index(){
        $AllBts = Analyse_operation_audit::all();
        return response()->json($AllBts);  
    }

    public function store(Request $request){
            return response()->json($request->all());
    }
}