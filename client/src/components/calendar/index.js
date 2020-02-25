// REACT
import React, { forwardRef } from 'react'

import CalendarWrapper from './CalendarWrapper'

// RENDER CALENDAR HEADER
const Calendar = forwardRef(({ ...props }, ref) => {
  const CALENDAR = {
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    }
  }

  return (
    <CalendarWrapper
      {...props}

      header={CALENDAR.header}
      events={props.events}
      forwardedRef={ref}
    />
  )
})

export default Calendar
