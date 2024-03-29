import "./App.css";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
// eslint-disable-next-line
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { getAllEvents } from "./db/events";
import Modal from "./components/Modal";

function App() {
  const [events, setEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const _getEvents = async () => {
      const gottenEvents = await getAllEvents();
      setEvents(gottenEvents);
    };
    _getEvents();
  }, []);

  useEffect(() => {}, [setIsOpen]);

  const header = {
    left: "prev,next,today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek",
  };

  const handleDateClick = function(info) {
    //Below is the line that changeds the view to the Day View everything that needs calendar can be just used as this.(insert method here)
    console.log(this.view.type);
    if ((this.view.type = "dayGridMonth")) {
      this.changeView("timeGridDay", info.dateStr);
    }
  };

  const handleEventClick = function(info) {
    setIsOpen(true);
    console.log(info);
    return <Modal setIsOpen={setIsOpen} />;
  };

  const handleSelect = function(info) {
    if (this.view.type !== "dayGridMonth") {
      setIsOpen(true);
      return <Modal setIsOpen={setIsOpen} />;
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
        initialView={"dayGridMonth"}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        headerToolbar={header}
        selectable={true}
        select={handleSelect}
        editable={true}
        events={events}
      />
      {isOpen && (
        <div className="centered">
          <Modal setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
}

export default App;
