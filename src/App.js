import "./App.css";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

function App() {
  const handleDateClick = function(info) {
    //Below is the line that changeds the view to the Day View everything that needs calendar can me just used as this.(insert method here)
    this.changeView("timeGridWeek", info.dateStr);
  };

  const header = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek",
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
      initialView={"dayGridMonth"}
      dateClick={handleDateClick}
      headerToolbar={header}
    />
  );
}

export default App;
