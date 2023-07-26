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
    //Below is the line that changeds the view to the Day View everything that needs calendar can be just used as this.(insert method here)
    // this.changeView("timeGridDay", info.dateStr);
    this.addEvent(testEvent);
  };

  const testEvent = {
    title: "Test",
    start: "2023-07-26",
    end: "2023-07-26",
  };

  const handleSelect = function(info) {
    this.addEvent(testEvent);
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
      selectable={true}
      select={handleSelect}
    />
  );
}

export default App;
