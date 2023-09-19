<?php 

namespace App\Http\Controllers\Forms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Forms\Analyse_operation_audit;


class FormOPAuditController extends Controller{
    public function index(){
        $AllBts = Analyse_operation_audit::all();
        return response()->json($AllBts);  
    }

    public function showById($code_site){
        $Analyse_operation_audit = Analyse_operation_audit::where('code_site', $code_site)->get();
        return response()->json($Analyse_operation_audit);
    }
    public function store(Request $request){
            $Analyse_operation_audit = new Analyse_operation_audit();

            // UPDATE DATA
            if(Analyse_operation_audit::where("code_site", $request->data['code_site'])->exists()){
                foreach($request->data as $key => $value){
                    if($value == null){
                        return response()->json(['message' => $key.' is required'], 200);
                    }
                    $Analyse_operation_audit::where('code_site', $request->code_site)
                    ->update($request);
                    return response()->json(['message' => 'Data updated successfully'], 200 );
                }
            }
            // INSERT NEW DATA
            foreach($request->data as $key => $value){
                if($value == null){
                    return response()->json(['message' => $key.' is required'], 200);
                }
                $Analyse_operation_audit->$key = $value;
                return response()->json(['message' => 'There is your data'], $key ."". $value );
            }
            $Analyse_operation_audit->save();
            return response()->json(['message' => 'Data inserted successfully'], 201);
    }
}