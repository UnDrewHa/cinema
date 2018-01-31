<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cinema extends Model
{
    public function halls() {
        return $this->hasMany(Hall::class);
    }

    public $timestamps = false;

    public $guarded = [];
}
