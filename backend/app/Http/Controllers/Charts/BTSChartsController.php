<?php

namespace App\Http\Controllers\Charts;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Tables\Tbd_bts;
use Illuminate\Support\Facades\Auth;

class BTSChartsController extends Controller{
    public function index(){
        $lastBatch = Tbd_bts::get("date_cession")->last();
        $countEtatEnCours = Tbd_bts::where('etat', 'En cours')->where('date_cession', $lastBatch->date_cession)->count();
        $countEtatTermine = Tbd_bts::where('etat', 'Terminé')->where('date_cession', $lastBatch->date_cession)->count();
        $countArbitrageAnnexeOkCession = Tbd_bts::where('arbitrage', 'OK pour cession')->where('date_cession', $lastBatch->date_cession)->count();
        $countArbitrageAnnexe2 = Tbd_bts::where('arbitrage', 'Annexe 2 avec réserves')->where('date_cession', $lastBatch->date_cession)->count();
        $countArbitrageLDR = Tbd_bts::where('arbitrage', 'L.D.R en cours')->where('date_cession', $lastBatch->date_cession)->count();
        $countArbitrageEnAttente = Tbd_bts::where('arbitrage', 'En attente')->where('date_cession', $lastBatch->date_cession)->count();
        $countArbitrageStandby = Tbd_bts::where('arbitrage', 'Standby')->where('date_cession', $lastBatch->date_cession)->count();
        $totalCurrentBatch = Tbd_bts::where('date_cession', $lastBatch->date_cession)->count();
    
        $chartBTS = [
            'lastBatch' => $lastBatch->date_cession, // '2021-06-30
            'countEtatEnCours' => $countEtatEnCours,
            'countEtatTermine' => $countEtatTermine,
            'countArbitrageAnnexeOkCession' => $countArbitrageAnnexeOkCession,
            'countArbitrageAnnexe2' => $countArbitrageAnnexe2,
            'countArbitrageLDR' => $countArbitrageLDR,
            'countArbitrageEnAttente' => $countArbitrageEnAttente,
            'countArbitrageStandby' => $countArbitrageStandby,
            'totalCurrentBatch' => $totalCurrentBatch

        ];

        return response()->json($chartBTS);
    }
}
