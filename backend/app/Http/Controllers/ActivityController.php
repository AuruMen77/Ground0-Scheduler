<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Http\Requests\StoreActivityRequest;
use App\Http\Requests\UpdateActivityRequest;
use App\Http\Resources\ActivityResource;




class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    const ACTIVITY_TYPE = [
        ['label' => 'Daily Activity', 'value' => 'dailyActivity'],
        ['label' => 'Outdoor Event', 'value' => 'outdoorEvent'],
        ['label' => 'Tolerance Time', 'value' => 'toleranceTime'],
        ['label' => 'Recoup from Unplanned Activities', 'value' => 'recoup'],
        ['label' => 'Backup', 'value' => 'backup'],
        ['label' => 'Meeting with Kuya Walts', 'value' => 'meetingWithWatts'],
        ['label' => 'Meeting with Team', 'value' => 'meetingWithTeam'],
    ];
    
    public function index()
    {

        $query = Activity::query();
        $activities = $query->paginate(10)->onEachSide(1);
        return inertia("Activity/Index", ["activities" => ActivityResource::collection($activities)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Activity/Create",);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreActivityRequest $request)
    {
        $data = $request->validated();

        // Format the cost to include decimal if not present
        $data['cost'] = strpos($data['cost'], '.') !== false ? $data['cost'] : $data['cost'] . '.00';

        // Format start_time and end_time
        $startDate = new \DateTime($data['start_date']);
        $startTime = new \DateTime($data['start_time']);
        $data['start_time'] = $startDate->format('Y-m-d') . 'T' . $startTime->format('H:i:00');
        
        $endTime = new \DateTime($data['end_time']);
        $data['end_time'] = $startDate->format('Y-m-d') . 'T' . $endTime->format('H:i:00');

        $data['title'] = trim($data['title']) === "" ? self::getActivityTypeInfo($data['type']) : $data['title'];

        // Optional: Remove unnecessary fields
        unset($data['start_date'], $data['end_date']);



        Activity::create($data);

        return to_route('activity.create');
    }
    /**
     * Display the specified resource.
     */
    public function show(Activity $activity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Activity $activity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateActivityRequest $request, Activity $activity)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Activity $activity)
    {
        //
    }

    private static function getActivityTypeInfo($type)
    {
        foreach (self::ACTIVITY_TYPE as $activity) {
            if ($activity['value'] === $type) {
                return $activity['label'];
            }
        }
        return ''; // Return empty string if type is not found
    }
}
