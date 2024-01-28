"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { INITIAL_EVENTS, createEventId } from "./calendar-event-utils";

export default class Calendar extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  render() {
    return (
      <div>
        {this.renderSidebar()}
        <div>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            events={[{ title: "event 1", date: "2024-01-27" }]}
            editable={true}
            selectable={true}
            selectMirror={true}
            select={this.handleDateSelect}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            //select={this.handleDateSelect}
          />
        </div>
      </div>
    );
  }

  renderSidebar() {
    return (
      <div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            Toggle Weekends
          </label>
        </div>
        <div>
          <button onClick={this.handleEventAdd}>Add Event</button>
        </div>
      </div>
    );
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

  handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  handleEventAdd = () => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = this.dateSelected;

    if (title) {
      this.dateSelected.addEvent({
        title,
        start: calendarApi.startStr,
        end: calendarApi.endStr,
        allDay: calendarApi.allDay,
      });
    }
  };
}
