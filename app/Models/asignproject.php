<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class asignproject extends Model
{
    use HasFactory;
    protected $fillable = [
        'teacher', 'project', 'date', 'salary'
    ];
}
