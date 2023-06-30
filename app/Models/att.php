<?php

namespace App\Models;

use App\Processors\AvatarProcessor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class att extends Model
{
    use HasFactory;
    protected $fillable = [
        'project', 'school', 'month',
        'file_id', 'startDate', 'endDate'

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
