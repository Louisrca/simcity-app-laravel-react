<?php

namespace App\Http\Controllers\Tables;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BTSController extends Controller
{
    public function index(){
        $bts = \App\Models\Tables\Tbd_bts::all();
        return response()->json($bts);
    }
}
