<?php

namespace App\Http\Controllers\Tables;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Tables\Tbd_bts;
use Illuminate\Support\Facades\Auth;

class BTSController extends Controller
{
    public function index(){
        if(auth()->user()->role == 'admin'){
            return $this->adminData();
        }
        else if(auth()->user()->role == 'ext'){
            return $this->FMData();
        }else if(auth()->user()->role == 'pilote_AGH'){
            return $this->AGHData();
        }
    }
    public function adminData(){
        $AllBts = Tbd_bts::all();
        return response()->json($AllBts);  
    }
    public function FMData(){
        $filterFM = Tbd_bts::select('id','date_cession', 'code_site','controle_clnx', 'prioritaire','etat', 'arbitrage','avis_op','avis_sm','avis_hse', 'synthese', 'date_dernier_commentaire', 'date_dernier_commentaire_fm')
        ->where('arbitrage', 'Annexe 2 avec réserves')
        ->orWhere('arbitrage', 'L.D.R en cours')
        ->orWhere('arbitrage', 'OK pour cession')
        ->orWhere('arbitrage', 'En attente')
        ->get();
        return response()->json($filterFM);  
    }

    public function AGHData(){
        $filterFM = Tbd_bts::select('id','date_cession', 'code_site','controle_clnx', 'cp','ville','type_infra','adresse','classe_site','loyer_declare_fm','etat', 'arbitrage','avis_op','avis_sm','avis_hse', 'synthese', 'date_dernier_commentaire', 'date_dernier_commentaire_fm')
        ->get();
        return response()->json($filterFM);  
    }


    public function EditTable (Request $request){

        if (auth()->user()->role !== 'admin' && auth()->user()->role !== 'direction') {
            return response()->json(['message' => 'Permission denied'], 403);
        }
    
        // Validez les données envoyées dans la requête (si nécessaire)
        $validatedData = $request->validate([

            'controle_clnx'=>'nullable',
            'loyer_declare_fm'=>'nullable',
            'charge_prod_ope'=>'nullable',
            'charge_prod_sm'=>'nullable',
            'charge_prod_hse'=>'nullable',
            'part_operation'=>'nullable',
            'part_patrimoine'=>'nullable',
            'part_hse'=>'nullable',
            'pilote_externe'=>'nullable',
            'pilote_externe2'=>'nullable',
            'arbitrage'=>'nullable',
            'date_acceptation'=>'nullable',
            'updated_at'=>'nullable',
        ]);
        Tbd_bts::where('code_site', $request->code_site)
        ->update($validatedData);

        return response()->json(['message' =>'data updated'], 200);
    }
}
