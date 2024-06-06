<?php

namespace App\Http\Controllers;


use App\Http\Resources\ActivityResource;
use App\Models\Activity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
   
    public function index()
    {
        $query = Activity::query();
        $activities = $query->get();
        return Inertia::render('Dashboard',  ["activities" => ActivityResource::collection($activities)]);
    }
}