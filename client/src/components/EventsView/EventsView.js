import React, { useEffect, useState } from "react";

const EventsView = () => {
  const [events, setEvents] = useState([]);

    useEffect(() => {

      fetch("/events")
      .then(response => response.json())
      .then(async data => {
        setEvents(data.events);
      })
    }, []);

  return (
    <div>
      <h5>Events</h5>
      <ul>
        {events.map((event) =>(
          <li key={event._id}>{event.name}</li>
        ))}
      </ul>
      <img src="https://i.postimg.cc/BnMLZpWz/Rectangle-1.png" alt="" />
    </div>
  );
};

export default EventsView;
