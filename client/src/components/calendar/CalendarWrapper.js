import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import React, { Component } from 'react'
import Events from './Events'

export default class CalendarWrapper extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarEvents: [

      {
        title: 'yes'
      }

    ]
  }

  render() {
    return (
      <FullCalendar
        defaultView="dayGridMonth"
        header={{
          left: "prev, next today",
          center: "title",
          right: "dayGridMonth, timeGridWeek, timeGridDay, listWeek"
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        ref={this.calendarComponentRef}
        events={this.state.calendarEvents}
        dateClick={this.handleDateClick}
      />
    )
  }

  // handleDateClick = arg => {
  //   if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
  //     this.setState({
  //       calendarEvents: this.state.calendarEvents.concat({
  //         title: "New Event",
  //         start: arg.date,
  //         allDay: arg.allDay
  //       })
  //     });
  //   }
  // };
}
