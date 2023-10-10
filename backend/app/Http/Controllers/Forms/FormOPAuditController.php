<?php 

namespace App\Http\Controllers\Forms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Forms\Analyse_operation_audit;
use \App\Models\Tables\Tbd_bts;


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
            // UPDATE DATA
            if(Analyse_operation_audit::where("code_site", $request->data['code_site'])->exists()){
                Analyse_operation_audit::where('code_site', $request->data['code_site'])
                ->update($request->data);
                $this->statutSite($request->data);
                return response()->json(['message' => 'Data updated successfully'], 202) ;
            }else{
                // INSERT NEW DATA
                $Analyse_operation_audit = new Analyse_operation_audit();
                foreach($request->data as $key => $value){
                    if($value == null){
                        return response()->json(['message' => $key.' is required'], 200);
                    }
                    $Analyse_operation_audit->$key = $value;
                }
                $Analyse_operation_audit->save();
                return response()->json(['message' => 'Data inserted successfully'], 201);
            }
    }

    public function statutSite($dataRequest){
        if(in_array("BLOQUANT",$dataRequest)){
            Tbd_bts::where('code_site',$dataRequest['code_site'])
            ->update(["avis_op"=> "Bloquant"]);
        }else{
            Tbd_bts::where('code_site',$dataRequest['code_site'])
            ->update(["avis_op"=> "OK"]);
        }
    }
}