import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import React, { Component } from 'react'
import Events from './Events'

const CalendarWrapper = props => {
  return (
    <FullCalendar
      defaultView={props.defaultView}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      ref={props.forwardedRef}
      {...props}
      events={props.events}
    />
  )
}

export default CalendarWrapper
