import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar(props) {

    const activities = () => {
       
        return props.event.data.map((e) => {
            
            if(e.type==="dailyActivity"){
                return {
                    title: e.title,
                    startTime: new Date(e.start_time).toLocaleTimeString('en-US', { hour12: false }),
                    endTime:   new Date(e.end_time).toLocaleTimeString('en-US', { hour12: false }),
                    daysOfWeek: [0,1,2,3,4,5,6]
                };
            }
            return {
                title: e.title,
                start: new Date(e.start_time),
                end:   new Date(e.end_time),
                
            };
        });
    };
    console.log(activities());
   

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                height="73vh"
                themeSystem="standard"
                headerToolbar={{
                    start: "today prev,next",
                    center: 'title',
                    end: 'dayGridMonth, timeGridWeek, timeGridDay'
                }}
               
                 events={activities()}
            />
  
        </>
    );
}
