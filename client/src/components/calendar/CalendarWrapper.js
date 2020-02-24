/* eslint-disable */

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import React from 'react'
import axios from 'axios'


export default class CalendarWrapper extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    events: []
  }

  componentDidMount() {
    axios.get('api/v1/events.json')
      .then(response => {
        const events = response.data
        console.log(events)
        this.setState({ calendarEvents: events })
      })
      .catch(error => alert(error.response))
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
}
