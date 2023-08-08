<?php

namespace App\Http\Controllers\Tables;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Tables\Tbd_bts;
use Illuminate\Support\Facades\Auth;

class BTSController extends Controller
{
    public function adminData(){
        $AllBts = Tbd_bts::all();
        return response()->json($AllBts);  
    }
    public function FMData(){
        $filterFM = Tbd_bts::select('date_cession', 'code_site','controle_clnx', 'prioritaire','etat', 'arbitrage','avis_op','avis_sm','avis_hse', 'synthese', 'date_dernier_commentaire', 'date_dernier_commentaire_fm')
        ->where('arbitrage', 'Annexe 2 avec réserves')
        ->orWhere('arbitrage', 'L.D.R en cours')
        ->orWhere('arbitrage', 'OK pour cession')
        ->orWhere('arbitrage', 'En attente')
        ->get();
        return response()->json($filterFM);  
    }

    

   
}
