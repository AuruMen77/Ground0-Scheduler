import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar(props) {
    const activities = () => {
       
        return props.event.data.map((e) => {
            return {
                title: e.title,
                start: new Date(e.start_time),
                end: new Date(e.end_time),
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
                // events={[
                //     {title:"test",
                //     start: '2024-06-06',
                //     end: '2024-06-07'}

                // ]
                // }
                events={activities()}
            />
  
        </>
    );
}
