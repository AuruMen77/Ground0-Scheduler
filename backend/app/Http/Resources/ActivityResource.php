<?php

namespace App\Http\Resources;


use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ActivityResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       return[
        
        'id' => $this->id,
        'type' => $this->type,
        'title' => $this->title,
        'start_time' => (new Carbon($this->start_time))->format('Y/m/d H:i'),
        'end_time' => (new Carbon($this->end_time))->format('Y/m/d H:i'),
        'cost' => $this->cost,
       ];
    }
}
