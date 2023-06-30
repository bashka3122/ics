<?php

namespace App\Models;

use App\Processors\AvatarProcessor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class teacher extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'email', 'gender', 'tel',  'acc', 'date', 'school',
        'file_id', 'region', 'district', 'village', 'level',

    ];
    public function file()
    {
        return $this->belongsTo(File::class);
    }

    public function getAvatarFilenameAttribute()
    {
        if (!empty($this->file)) {
            return $this->file->name;
        }

        return null;
    }

    public function getAvatarAttribute()
    {
        return AvatarProcessor::get($this);
    }
}
