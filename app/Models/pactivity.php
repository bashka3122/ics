<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pactivity extends Model
{
    use HasFactory;
    protected $fillable = [
        'pname', 'items'
    ];

    public function setItemsAttribute($value)
    {
        $this->attributes['items'] = json_encode($value);
    }

    public function getItemsAttribute($value)
    {
        return json_decode($value, true);
    }
}
