<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    use HasFactory;
    protected $fillable = [
        'teacher', 'region', 'district', 'village', 'school', 'date', 'note', 'fregion', 'fdistrict', 'fvillage', 'fschool'

    ];
}
