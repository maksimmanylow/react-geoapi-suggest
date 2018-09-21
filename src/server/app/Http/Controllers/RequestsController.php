<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Request as RequestModel;
use App\Response as ResponseModel;

class RequestsController extends Controller
{
    public function index(Request $request) {
      $query = $request->query('query');
      $RequestModel = RequestModel::create(['query' => $query]);
      $suggestions = $this->getSuggestions($query);

      foreach($suggestions as $suggestion) {
        ResponseModel::create([
          'suggestion' => $suggestion,
          'request_id' => $RequestModel->id,
        ]);
      }
      

      return response()->json($suggestions);
    }

    protected function getSuggestions($query) {
      $suggestions =  $this->suggest($query);  
      $suggestions = array_map(function($suggestion) {return $suggestion['value'];}, $suggestions['suggestions']);

      return $suggestions;
    }
    
    protected function suggest($query)
    {
      $fields = ['query' => $query, 'count' => 6];

      $key = env('DADATA_API_KEY');
      $result = false;
      if ($ch = curl_init(env('DADATA_API_URL')))
      {
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json; charset=utf-8',
            'Accept: application/json; charset=utf-8',
            "Authorization: Token $key"
        ]);
        curl_setopt($ch, CURLOPT_POST, 1);
        // json_encode
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
        $result = curl_exec($ch);
        $result = json_decode($result, true);
        curl_close($ch);
      }
      return $result;
    }
}
