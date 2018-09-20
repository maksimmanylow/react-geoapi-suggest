<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Request extends Model
{ 
  /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['query'];

  public function comments()
  {
      return $this->hasMany('App\Response');
  }
}
