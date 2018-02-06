<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FilmLicense extends Model
{
    public function film() {
        return $this->belongsTo(Film::class);
    }

    public function cinema() {
        return $this->belongsTo(Cinema::class);
    }

    public function filmFormat() {
        return $this->belongsTo(FilmFormat::class);
    }

    public function filmSessions() {
        return $this->hasMany(FilmSession::class);
    }

    public $timestamps = false;
    public $guarded = [];
    public $fillable = ['film_id','cinema_id','film_format_id','show_number'];
}
