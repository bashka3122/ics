<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class bedel extends Model
{
    use HasFactory;
    protected $fillable = [
        'pteacher', 'project',  'nteacher', 'sdate'
    ];
}
